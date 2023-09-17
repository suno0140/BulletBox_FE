import React, { useEffect, useState } from 'react';
import { CategoryModal } from './CategoryModal';
import {
  CategoryListContainer,
  FlexContainer,
} from '@components/atoms/Container';
import { CategoryBtn } from '@components/atoms/Button';
import { AddCategoryIcon, CategoryAddBtn } from '@components/atoms/Icon';
import { MypageAddSpan } from '@components/atoms/Span';
import { getCategoryApi } from '@api/CategoryApi';
import { useRequest } from '@hooks/useRequest';

const CategoryList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryColor, setCategoryColor] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [reload, setReload] = useState(false);

  const { data: categories, request: getCategories } = useRequest({
    apiFunc: getCategoryApi,
    reduxKey: 'categories',
  });

  const handleModal = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      const value = e.currentTarget;
      setCategoryName(value.getAttribute('name'));
      setCategoryColor(value.getAttribute('color'));
      setCategoryId(value.getAttribute('id'));
    }
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    getCategories();
  }, [reload]);

  return (
    <CategoryListContainer>
      {categories ? (
        Object.entries(categories)?.map(
          ([categoryId, categoryItem]: [string, any]) => {
            return (
              <CategoryBtn
                key={categoryId}
                id={categoryId}
                name={categoryItem.categoryName}
                color={categoryItem.categoryColor}
                $backgroundColor={categoryItem.categoryColor}
                onClick={(e) => {
                  handleModal(e);
                }}
              >
                {categoryItem.categoryName}
              </CategoryBtn>
            );
          },
        )
      ) : (
        <MypageAddSpan>내 카테고리를 추가해주세요</MypageAddSpan>
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
