import { EmotionBtn } from '@components/atoms/Button';
import {
  AngryBtn,
  ExcitedBtn,
  HappyBtn,
  SadBtn,
  SosoBtn,
} from '@components/atoms/Icon';
import { NavigateSpan } from '@components/atoms/Span';
import React from 'react';

export type EmotionBtnProps = {
  $id: string;
  $emotion: string | null;
};

const EmotionButton = ({ emotion, selectedEmotion, setSelectedEmotion }) => {
  const Emotions = {
    신남: <ExcitedBtn />,
    행복: <HappyBtn />,
    보통: <SosoBtn />,
    슬픔: <SadBtn />,
    화남: <AngryBtn />,
  };

  const handleButtonClick = () => {
    setSelectedEmotion(emotion);
  };

  return (
    <EmotionBtn
      $id={emotion}
      $emotion={selectedEmotion}
      onClick={handleButtonClick}
    >
      {Emotions[emotion]}
      <NavigateSpan>{emotion}</NavigateSpan>
    </EmotionBtn>
  );
};

export default EmotionButton;
