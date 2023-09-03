import axios from 'axios';
import { tokenId, uid } from '@core/localStorage';
import { DB_URL } from '@core/api';

export type DiaryType = {
  date?: string;
  emotion?: string;
  contents?: string;
  id?: string;
};

export const addDiaryApi = async (diary: DiaryType) => {
  const dbURL = `https://${DB_URL}/users/${uid}/diaries.json`;
  await axios.put(dbURL, diary);
};

export const getDiaryApi = async () => {
  const dbURL = `https://${DB_URL}/users/${uid}/diaries.json?auth=${tokenId}`;

  const response = await axios.get(dbURL);
  if (response.status === 200 && response.data) {
    return response.data;
  }
  return null;
};
