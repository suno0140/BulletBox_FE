import React, { useEffect, useState } from 'react';
import { MainCalendar } from '@components/molecules/Calendar';
import useCurrentDate from '@hooks/useCurrentData';

import EmotionButton from '@components/molecules/EmotionButton';

import { addDiaryApi, getDiaryApi } from '@api/DairyApi';

import {
  DiaryContainer,
  EditCheckContainer,
  EmotionBoxContainer,
  EmotionContainer,
} from '@components/atoms/Container';
import { DefaultBoldSpan, DiaryLengthSpan } from '@components/atoms/Span';
import { EditIcon } from '@components/atoms/Icon';
import { EditBtn } from '@components/atoms/Button';
import { DiaryText } from '@components/atoms/textarea';
import { useRequest } from '@hooks/useRequest';

const Diary = () => {
  const currentDate = useCurrentDate();
  const emotions = ['excited', 'happy', 'soso', 'sad', 'angry'];

  const { request: addDiary } = useRequest({
    apiFunc: addDiaryApi,
    reduxKey: 'diaries',
    successMessage: '저장 성공',
    errorMessage: '저장 실패',
  });

  const { data: data, request: getDiary } = useRequest({
    apiFunc: getDiaryApi,
    reduxKey: 'diaries',
  });

  const [contents, setContents] = useState('');
  const [emotion, setEmotion] = useState('');

  const handleSave = async () => {
    const newDiary = {
      date: currentDate,
      emotion,
      contents,
    };

    try {
      await addDiary(newDiary);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (e) => {
    const value = e.currentTarget.value;
    if (value.length <= 400) {
      setContents(value);
    }
  };

  useEffect(() => {
    getDiary(currentDate);
  }, [currentDate]);

  useEffect(() => {
    if (data) {
      setContents(data.contents);
      setEmotion(data.emotion);
    }
  }, [data]);

  return (
    <>
      <MainCalendar />
      <DiaryContainer>
        <DefaultBoldSpan>{currentDate}</DefaultBoldSpan>
        <EmotionContainer>
          <EmotionBoxContainer>
            {emotions.map((e) => (
              <EmotionButton
                key={e}
                emotion={e}
                selectedEmotion={emotion}
                setSelectedEmotion={setEmotion}
              />
            ))}
          </EmotionBoxContainer>

          <EditCheckContainer>
            <EditBtn
              aria-label="EditBtn"
              onClick={() => {
                void handleSave();
              }}
            >
              <EditIcon />
            </EditBtn>
            저장
          </EditCheckContainer>
        </EmotionContainer>

        <DiaryText
          value={contents}
          onChange={handleTextChange}
          placeholder="일기를 작성해보세요"
        />

        <DiaryLengthSpan>({contents.length}/400)</DiaryLengthSpan>
      </DiaryContainer>
    </>
  );
};

export default Diary;
