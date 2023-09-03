// Import getItem from your local storage utilities
import { DB_URL } from '@core/api';
import { uid } from '@core/localStorage';
import axios from 'axios';

export type CategoryData = {
  id?: string;
  categoryName?: string;
  categoryColor?: string;
};

export const addCategoryApi = async ({
  categoryName,
  categoryColor,
}: CategoryData) => {
  const dbURL = `https://${DB_URL}/users/${uid}/categories.json`;

  await axios.post(dbURL, {
    categoryName,
    categoryColor,
  });
};

export const getCategoryApi = async () => {
  const dbURL = `https://${DB_URL}/users/${uid}/categories.json`;

  const response = await axios.get(dbURL);
  if (response.status === 200 && response.data) {
    return response.data;
  }
};

export const deleteCategoryApi = async ({ id }: CategoryData) => {
  const dbURL = `https://${DB_URL}/users/${uid}/categories/${id}.json`;

  await axios.delete(dbURL);
};

export const updateCategoryApi = async ({
  categoryName,
  categoryColor,
  id,
}: CategoryData) => {
  const dbURL = `https://${DB_URL}/users/${uid}/categories/${id}.json`;

  await axios.put(dbURL, {
    categoryName,
    categoryColor,
  });
};
