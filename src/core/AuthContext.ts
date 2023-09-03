import React from 'react';
import { User } from '@firebase/auth';

export const AuthContext = React.createContext<{
  user: User | null;
}>({ user: null });
