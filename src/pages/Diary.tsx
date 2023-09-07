// import { MainCalendar } from '@components/molecules/Calendar';
// import useCurrentDate from '@hooks/useCurrentData';
// import React from 'react';

// import EmotionButton from '@components/molecules/EmotionButton';

// import { useDispatch } from 'react-redux';
// import { addDiaryApi } from '@api/DairyApi';
// import { addDiary } from '@redux/modules/diaries';
// import { errorToast, successToast } from '@components/atoms/toast';
// import { useGetDiaryData } from '@hooks/useGetApi';
// import {
//   DiaryContainer,
//   EditCheckContainer,
//   EmotionBoxContainer,
//   EmotionContainer,
// } from '@components/atoms/Container';
// import { DefaultBoldSpan, DiaryLengthSpan } from '@components/atoms/Span';
// import { EditIcon } from '@components/atoms/Icon';
// import { EditBtn } from '@components/atoms/Button';
// import { DiaryText } from '@components/atoms/textarea';

// const Diary = () => {
//   const currentDate = useCurrentDate();
//   const emotions = ['excited', 'happy', 'soso', 'sad', 'angry'];
//   const dispatch = useDispatch();

//   const { emotion, setEmotion, contents, setContents } =
//     useGetDiaryData(currentDate);

//   const handleSave = async () => {
//     const newDiary = {
//       date: currentDate,
//       emotion,
//       contents,
//     };

//     try {
//       await addDiaryApi(newDiary);
//       dispatch(addDiary(newDiary));
//       successToast('저장 성공');
//     } catch (error) {
//       console.log(error);
//       errorToast('저장 실패');
//     }
//   };

//   const handleTextChange = (e) => {
//     const value = e.currentTarget.value;
//     if (value.length <= 400) {
//       setContents(value);
//     }
//   };

//   return (
//     <>
//       <MainCalendar />
//       <DiaryContainer>
//         <DefaultBoldSpan>{currentDate}</DefaultBoldSpan>
//         <EmotionContainer>
//           <EmotionBoxContainer>
//             {emotions.map((e) => (
//               <EmotionButton
//                 key={e}
//                 emotion={e}
//                 selectedEmotion={emotion}
//                 setSelectedEmotion={setEmotion}
//               />
//             ))}
//           </EmotionBoxContainer>

//           <EditCheckContainer>
//             <EditBtn
//               aria-label="EditBtn"
//               onClick={() => {
//                 void handleSave();
//               }}
//             >
//               <EditIcon />
//             </EditBtn>
//             저장
//           </EditCheckContainer>
//         </EmotionContainer>

//         <DiaryText
//           value={contents}
//           onChange={handleTextChange}
//           placeholder="일기를 작성해보세요"
//         />

//         <DiaryLengthSpan>({contents.length}/400)</DiaryLengthSpan>
//       </DiaryContainer>
//     </>
//   );
// };

// export default Diary;
