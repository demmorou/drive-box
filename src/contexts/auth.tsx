import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
  signed: boolean;
  signIn(email: string): void;
  signOut(): void;
  email: string;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const storagedEmail = await AsyncStorage.getItem('@DriveBox:email');

      if (storagedEmail) {
        setEmail(storagedEmail);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const signIn = async (emailInfo: string) => {
    await AsyncStorage.setItem('@DriveBox:email', emailInfo);

    setEmail(emailInfo);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setEmail('');
    });
  };

  return (
    <AuthContext.Provider
      value={{ loading, email, signIn, signOut, signed: !!email }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
