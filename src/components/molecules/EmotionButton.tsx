import { EmotionBtn } from '@components/atoms/Button';
import {
  AngryBtn,
  ExcitedBtn,
  HappyBtn,
  SadBtn,
  SosoBtn,
} from '@components/atoms/Icon';
import React from 'react';

export type EmotionBtnProps = {
  $id: string;
  $emotion: string | null;
};

const EmotionButton = ({ emotion, selectedEmotion, setSelectedEmotion }) => {
  const Emotions = {
    excited: <ExcitedBtn />,
    happy: <HappyBtn />,
    soso: <SosoBtn />,
    sad: <SadBtn />,
    angry: <AngryBtn />,
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
    </EmotionBtn>
  );
};

export default EmotionButton;
