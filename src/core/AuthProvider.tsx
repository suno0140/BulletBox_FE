import React, { useState, useEffect } from 'react';
import { FireAuth } from '@core/Firebase';
import { AuthContext } from '@core/AuthContext';
import { User } from 'firebase/auth';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    const subscribe = FireAuth.onAuthStateChanged((user) => {
      setUser(user);
      setUserDataLoading(false);
    });
    return subscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userDataLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
