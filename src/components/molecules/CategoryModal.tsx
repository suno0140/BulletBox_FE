import React, { useContext, useState } from 'react';
import PotalContainer from 'utils/Portal';
import { CloseIcon } from '@components/atoms/Icon';
import {
  ModalCancleBtn,
  ModalCheckBtn,
  SelectBtn,
} from '@components/atoms/Button';
import {
  ModalBtnContainer,
  ModalContainer,
  ModalContentContainer,
  SelectColorContainer,
} from '@components/atoms/Container';
import {
  addCategoryApi,
  deleteCategoryApi,
  updateCategoryApi,
} from '@api/CategoryApi';
import { AuthContext } from '@core/AuthContext';
import { errorToast } from '@components/atoms/toast';
import { CategoryInput } from '@components/atoms/Input';
import { TitleLengthSpan } from '@components/atoms/Span';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  color?: string;
  categoryId?: string;
};

export const CategoryModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  name,
  color,
  categoryId,
}) => {
  if (!isOpen) return null;

  const [categoryName, setCategoryName] = useState(name || '');
  const [categoryColor, setCategoryColor] = useState(color || '');

  const { user, userDataLoading } = useContext(AuthContext);

  const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length <= 10) {
      setCategoryName(value);
    }
  };

  const handleCategoryColor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = e.currentTarget.value;
    setCategoryColor(value);
  };

  const handleAddCategory = () => {
    if (userDataLoading) {
      return;
    } else if (categoryName.length === 0) {
      errorToast('카테고리 이름을 입력해주세요');
    } else if (categoryColor === '') {
      errorToast('카테고리 색깔을 선택해주세요');
    } else {
      void addCategoryApi({ user, categoryName, categoryColor });
      onClose();
    }
  };

  const handleUpdateCategory = () => {
    if (userDataLoading) {
      return;
    } else if (categoryName.length === 0) {
      errorToast('카테고리 이름을 입력해주세요');
    } else if (categoryColor === '') {
      errorToast('카테고리 색깔을 선택해주세요');
    } else {
      void updateCategoryApi({
        user,
        categoryName,
        categoryColor,
        categoryId,
      });
      onClose();
    }
  };

  const handleDeleteCategory = () => {
    void deleteCategoryApi({ user, categoryId });
    onClose();
  };

  const tagColorList = [
    { key: 0, value: '#FFFFFF' },
    { key: 1, value: '#E3E2E3' },
    { key: 2, value: '#C6C6C6' },
    { key: 3, value: '#F4BBE3' },
    { key: 4, value: '#DCB8F9' },
    { key: 5, value: '#F4BCB8' },
    { key: 6, value: '#FFC79B' },
    { key: 7, value: '#FEFE93' },
    { key: 8, value: '#ABFC92' },
    { key: 9, value: '#B0A9FF' },
    { key: 10, value: '#FF8C85' },
    { key: 11, value: '#FFB57E' },
    { key: 12, value: '#F4BB65' },
    { key: 13, value: '#91FB6C' },
    { key: 14, value: '#96C6FA' },
  ];

  return (
    <PotalContainer>
      <ModalContainer>
        <ModalContentContainer height={400}>
          <ModalCancleBtn onClick={onClose}>
            <CloseIcon />
          </ModalCancleBtn>
          <CategoryInput
            value={categoryName}
            placeholder="카테고리 이름을 입력해주세요"
            onChange={(e) => {
              handleCategoryName(e);
            }}
          />
          <TitleLengthSpan>({categoryName.length}/10)</TitleLengthSpan>
          <SelectColorContainer>
            {tagColorList.map((value) => {
              return (
                <SelectBtn
                  key={value.key}
                  value={value.value}
                  $categoryColor={categoryColor}
                  onClick={(e) => {
                    handleCategoryColor(e);
                  }}
                ></SelectBtn>
              );
            })}
          </SelectColorContainer>

          <ModalBtnContainer>
            {name ? (
              <>
                <ModalCheckBtn onClick={handleUpdateCategory}>
                  수정
                </ModalCheckBtn>
                <ModalCheckBtn onClick={handleDeleteCategory}>
                  삭제
                </ModalCheckBtn>
              </>
            ) : (
              <>
                <ModalCheckBtn onClick={handleAddCategory}>확인</ModalCheckBtn>
                <ModalCheckBtn onClick={onClose}>취소</ModalCheckBtn>
              </>
            )}
          </ModalBtnContainer>
        </ModalContentContainer>
      </ModalContainer>
    </PotalContainer>
  );
};
