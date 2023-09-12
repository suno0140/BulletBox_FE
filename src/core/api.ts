import axios from 'axios';

export const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;
export const DB_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
export const URL = `accounts:signInWithPassword?key=${API_KEY}`;

export const api = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const dbApi = axios.create({
  baseURL: `https://${process.env.REACT_APP_FIREBASE_DATABASE_URL}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
