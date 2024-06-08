import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth.context';
import { recordClick} from './api/index'; // Import post and save functions
import router from './router'; // Import router


function App() {
  useEffect(() => {
    // Record a click when the user opens the site
    recordClick('homepage');

    const handleClick = (event) => {
      const { id } = event.target;
      if (id) {
        recordClick(id);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
