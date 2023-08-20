import { useState, useEffect } from 'react';

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = days[now.getDay()];

    return `${year}/${month}/${date}(${dayName})`;
  };

  useEffect(() => {
    setCurrentDate(getCurrentDate());

    const intervalId = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentDate;
};

export default useCurrentDate;
