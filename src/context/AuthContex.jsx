import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const userAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userToken')); // Assuming user token contains user info
    if (storedUser) {
      setLoggedUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
