import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@core/AuthContext';

const useAuthRedirect = () => {
  const { user, userDataLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!userDataLoading && !user) {
      navigate('/login');
    } else if (
      location.pathname === '/' ||
      location.pathname === '/login' ||
      location.pathname === '/singup'
    ) {
      navigate('/main');
    }
  }, [user, userDataLoading]);
};

export default useAuthRedirect;
