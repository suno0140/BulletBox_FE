import React, { useState } from 'react';
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

import { errorToast } from '@components/atoms/toast';
import { CategoryInput } from '@components/atoms/Input';
import { TitleLengthSpan } from '@components/atoms/Span';
import { colorList } from '@components/atoms/ColorList';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  color?: string;
  id?: string;
  setReload?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CategoryModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  name,
  color,
  id,
  setReload,
}) => {
  if (!isOpen) return null;

  const [categoryName, setCategoryName] = useState(name || '');
  const [categoryColor, setCategoryColor] = useState(color || '');

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

  const handleAddCategory = async () => {
    if (categoryName.length === 0) {
      errorToast('카테고리 이름을 입력해주세요');
    } else if (categoryColor === '') {
      errorToast('카테고리 색깔을 선택해주세요');
    } else {
      try {
        await addCategoryApi({ categoryName, categoryColor });
        setReload((prev) => !prev);
        onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateCategory = async () => {
    if (categoryName.length === 0) {
      errorToast('카테고리 이름을 입력해주세요');
    } else if (categoryColor === '') {
      errorToast('카테고리 색깔을 선택해주세요');
    } else {
      try {
        await updateCategoryApi({
          categoryName,
          categoryColor,
          id,
        });
        setReload((prev) => !prev);
        onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteCategory = async () => {
    try {
      await deleteCategoryApi({ id });
      setReload((prev) => !prev);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

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
            {colorList.map((value) => {
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
                <ModalCheckBtn
                  onClick={() => {
                    void handleUpdateCategory();
                  }}
                >
                  수정
                </ModalCheckBtn>
                <ModalCheckBtn onClick={() => void handleDeleteCategory()}>
                  삭제
                </ModalCheckBtn>
              </>
            ) : (
              <>
                <ModalCheckBtn
                  onClick={() => {
                    void handleAddCategory();
                  }}
                >
                  확인
                </ModalCheckBtn>
                <ModalCheckBtn onClick={onClose}>취소</ModalCheckBtn>
              </>
            )}
          </ModalBtnContainer>
        </ModalContentContainer>
      </ModalContainer>
    </PotalContainer>
  );
};
