import React, { useState, useEffect } from 'react';
import { FireAuth } from '@core/Firebase';
import { AuthContext } from '@core/AuthContext';
import { User } from 'firebase/auth';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = FireAuth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
