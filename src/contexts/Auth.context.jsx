import {
    createContext, 
    useState,
    useCallback,
    useMemo,
    useContext,
    useEffect
  } from 'react';
  import useSWRMutation from 'swr/mutation';
  import * as api from '../api/index.js';
  
  const JWT_TOKEN_KEY = 'jwtToken';
  const ACCOUNT_ID_KEY = 'accountId';
  const AuthContext = createContext();
  
  export const useAuth = () => useContext(AuthContext);
  
  export function AuthProvider({ children }) {
    const [ready, setReady] = useState(false);
    const [isAuthed, setIsAuthed] = useState(false);
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
    const [account, setAccount] = useState(null);


    useEffect(() => {
        api.setAuthToken(token);
        setIsAuthed(Boolean(token));
        setReady(true);
      }, [token]);
  
    const {
      isMutating: loginLoading,
      error: loginError,
      trigger: doLogin,
    } = useSWRMutation('accounts/login', api.post);

    const {
      isMutating: registerLoading,
      error: registerError,
      trigger: doRegister,
    } = useSWRMutation('accounts/register', api.post);
  
    const setSession = useCallback(
      (token, account) => {
        setToken(token);
        setAccount(account);
  
        localStorage.setItem(JWT_TOKEN_KEY, token);
        localStorage.setItem(ACCOUNT_ID_KEY, account.id);
      },
      [],
    );
  
    const login = useCallback(
      async (email, password) => {
        try {
          const { token, account } = await doLogin({
            email,
            password,
          });
  
          setSession(token, account);
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },
      [doLogin, setSession]
    );

    const register = useCallback(
      async (data) => {
        try {
          const { token, account } = await doRegister(data);
          setSession(token, account);
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },
      [doRegister, setSession]
    );
  
    const logout = useCallback(() => {
      setToken(null);
      setAccount(null);
  
      localStorage.removeItem(JWT_TOKEN_KEY);
      localStorage.removeItem(ACCOUNT_ID_KEY);
    }, []);
  
    const value = useMemo(
      () => ({
        token,
        account,
        error: loginError || registerError,
        loading: loginLoading || registerLoading ,
        ready,
        isAuthed,
        login,
        logout,
        register,
      }),
      [token, account, loginError, registerError, loginLoading, registerLoading, ready, isAuthed, login, logout, register]
    );
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  