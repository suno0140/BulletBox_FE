import { useNavigate, useLocation } from 'react-router-dom';

export const usePageLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToDailyLogAdd = (additionalState = {}) => {
    navigate('/dailyAdd', {
      state: {
        from: location.pathname,
        ...additionalState,
      },
    });
  };

  const goToDailyLogUpdate = (additionalState = {}) => {
    navigate('/dailyUpdate', {
      state: {
        from: location.pathname,
        ...additionalState,
      },
    });
  };

  return {
    goToDailyLogAdd,
    goToDailyLogUpdate,
  };
};
