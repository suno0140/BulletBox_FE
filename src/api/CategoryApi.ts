import axios from 'axios';
import { User } from 'firebase/auth';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

export type CategoryData = {
  user: User;
  categoryId?: string;
  categoryName?: string;
  categoryColor?: string;
};

type CategoryListData = {
  user: User;
  setCategoryList?: React.Dispatch<React.SetStateAction<CategoryData[]>>;
};

export const addCategoryApi = async ({
  user,
  categoryName,
  categoryColor,
}: CategoryData) => {
  try {
    const db = getDatabase();
    const categoryRef = ref(db, `users/${user.uid}/categories`);
    const newCategoryRef = push(categoryRef);

    await set(newCategoryRef, {
      categoryName: categoryName,
      categoryColor: categoryColor,
      categoryId: newCategoryRef.key,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryApi = async ({
  user,
  setCategoryList,
}: CategoryListData) => {
  const URL = `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com/users/${user.uid}/categories.json`;

  try {
    const response = await axios.get(URL);
    const data = response.data as Record<string, CategoryData> | null;

    if (data) {
      setCategoryList(Object.values(data));
    } else {
      setCategoryList([]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategoryApi = async ({ user, categoryId }: CategoryData) => {
  try {
    const db = getDatabase();
    const categoryRef = ref(db, `users/${user.uid}/categories/${categoryId}`);
    await set(categoryRef, null);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategoryApi = async ({
  user,
  categoryName,
  categoryColor,
  categoryId,
}: CategoryData) => {
  try {
    const db = getDatabase();
    const categoryRef = ref(db, `users/${user.uid}/categories/${categoryId}`);
    await set(categoryRef, {
      categoryName: categoryName,
      categoryColor: categoryColor,
    });
  } catch (error) {
    console.log(error);
  }
};
