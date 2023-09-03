import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodo } from '@redux/modules/todos';
import { getTodoApi } from '@api/TodoApi';
import { getCategoryApi } from '@api/CategoryApi';
import { getCategory } from '@redux/modules/categories';
import { DiaryType, getDiaryApi } from '@api/DairyApi';

export const useGetTodos = (dependencies = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodoApi();
        if (data) {
          dispatch(getTodo(data));
        } else {
          dispatch(getTodo([]));
        }
      } catch (error) {
        console.log(error);
      }
    };

    void fetchTodo();
  }, [...dependencies]);
};

export const useGetCategories = (dependencies = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategoryApi();
        if (data) {
          dispatch(getCategory(data));
        } else {
          dispatch(getCategory([]));
        }
      } catch (error) {
        console.log(error);
      }
    };

    void fetchCategory();
  }, [...dependencies]);
};

export const useGetDiaryData = (currentDate: string) => {
  const [emotion, setEmotion] = useState(null);
  const [contents, setContents] = useState('');

  useEffect(() => {
    const fetchDiaryData = async () => {
      try {
        const diaryDataObject = await getDiaryApi();
        if (diaryDataObject) {
          const diaryDataArray: DiaryType[] = Object.values(diaryDataObject);
          const todayDiary = diaryDataArray.find(
            (diary) => diary.date === currentDate,
          );
          if (todayDiary) {
            setEmotion(todayDiary.emotion);
            setContents(todayDiary.contents);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    void fetchDiaryData();
  }, [currentDate]);

  return { emotion, setEmotion, contents, setContents };
};
