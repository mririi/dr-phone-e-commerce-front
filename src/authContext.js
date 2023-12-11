import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    console.log('login',isLoggedIn)
    setLoggedIn(true);
    console.log('login',isLoggedIn)
  };

  const logout = () => {
    setLoggedIn(false);
    console.log('lougout',isLoggedIn)

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};