import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@core/AuthContext';

const useAuthRedirect = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
      navigate('/login');
    }
  }, [user]);
};

export default useAuthRedirect;
