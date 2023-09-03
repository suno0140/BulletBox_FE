export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

type TokenInfo = {
  displayName?: string;
  email?: string;
  idToken?: string;
  localId?: string;
};

const token: TokenInfo = getItem('token') || {};

export const localNickName = token?.displayName;
export const localEmail = token?.email;
export const tokenId = token?.idToken;
export const uid = token?.localId;
