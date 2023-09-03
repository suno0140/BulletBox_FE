import React, { useState } from 'react';
import { CategoryModal } from './CategoryModal';
import {
  CategoryListContainer,
  FlexContainer,
} from '@components/atoms/Container';
import { CategoryBtn } from '@components/atoms/Button';
import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
import { MypageAddSpan } from '@components/atoms/Span';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/config/configStore';

const CategoryList = ({ setReload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryColor, setCategoryColor] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );

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
    <CategoryListContainer>
      {categories && categories.length === 0 ? (
        <MypageAddSpan>내 카테고리를 추가해주세요</MypageAddSpan>
      ) : (
        categories?.map((value) => {
          return (
            <CategoryBtn
              key={value.id}
              id={value.id}
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
        id={categoryId}
        setReload={setReload}
      />
    </CategoryListContainer>
  );
};

export default CategoryList;
