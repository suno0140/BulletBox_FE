import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@core/AuthContext';

const useAuthRedirect = () => {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo === null) {
      alert('토큰이 만료되었습니다. 다시 로그인해주세요.');
      navigate('/login');
    }
  }, [userInfo]);
};

export default useAuthRedirect;
