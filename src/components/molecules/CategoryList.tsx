import React, { useState } from 'react';
import { CategoryModal } from './CategoryModal';
import { CategoryData } from '@api/CategoryApi';
import { CategoryAddList, FlexContainer } from '@components/atoms/Container';
import { CategoryBtn } from '@components/atoms/Button';
import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
import { MypageAddSpan } from '@components/atoms/Span';

type CategoryListProps = {
  categories: CategoryData[];
};

const CategoryList = ({ categories }: CategoryListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryColor, setCategoryColor] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleModal = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      const value = e.currentTarget;
      setCategoryName(value.getAttribute('name'));
      setCategoryColor(value.getAttribute('color'));
      setCategoryId(value.getAttribute('id'));
    }
    setIsModalOpen((prev) => !prev);
  };

  return (
    <CategoryAddList>
      {categories && categories.length === 0 ? (
        <MypageAddSpan>내 카테고리를 추가해주세요</MypageAddSpan>
      ) : (
        categories?.map((value) => {
          return (
            <CategoryBtn
              key={value.categoryId}
              id={value.categoryId}
              name={value.categoryName}
              color={value.categoryColor}
              $backgroundColor={value.categoryColor}
              onClick={(e) => {
                handleModal(e);
              }}
            >
              {value.categoryName}
            </CategoryBtn>
          );
        })
      )}
      <FlexContainer>
        <CategoryAddBtn onClick={handleModal}>
          <AddCategoryIcon />
        </CategoryAddBtn>
      </FlexContainer>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={handleModal}
        name={categoryName}
        color={categoryColor}
        categoryId={categoryId}
      />
    </CategoryAddList>
  );
};

export default CategoryList;
