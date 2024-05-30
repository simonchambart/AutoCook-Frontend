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
  const CREATOR_ID_KEY = 'creatorId';
  const AuthContext = createContext();
  
  export const useAuth = () => useContext(AuthContext);
  
  export const AuthProvider = ({ children }) => {
    const [ready, setReady] = useState(false);
    const [isAuthed, setIsAuthed] = useState(false);
    const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
    const [creator, setCreator] = useState(null);


    useEffect(() => {
        api.setAuthToken(token);
        setIsAuthed(Boolean(token));
        setReady(true);
      }, [token]);
  
    const {
      isMutating: loginLoading,
      error: loginError,
      trigger: doLogin,
    } = useSWRMutation('creators/login', api.post);

    const {
      isMutating: registerLoading,
      error: registerError,
      trigger: doRegister,
    } = useSWRMutation('creators/register', api.post);
  
    const setSession = useCallback(
      (token, creator) => {
        setToken(token);
        setCreator(creator);
  
        localStorage.setItem(JWT_TOKEN_KEY, token);
        localStorage.setItem(CREATOR_ID_KEY, creator.id);
      },
      [],
    );
  
    const login = useCallback(
      async (email, password) => {
        try {
          const { token, creator } = await doLogin({
            email,
            password,
          });
  
          setSession(token, creator);
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
          const { token, creator } = await doRegister(data);
          setSession(token, creator);
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
      setCreator(null);
  
      localStorage.removeItem(JWT_TOKEN_KEY);
      localStorage.removeItem(CREATOR_ID_KEY);
    }, []);
  
    const value = useMemo(
      () => ({
        token,
        creator,
        error: loginError || registerError,
        loading: loginLoading || registerLoading ,
        ready,
        isAuthed,
        login,
        logout,
        register,
      }),
      [token, creator, loginError, registerError, loginLoading, registerLoading, ready, isAuthed, login, logout, register]
    );
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };
  