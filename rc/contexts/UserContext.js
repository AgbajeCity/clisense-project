import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '../data/mockData';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in using localStorage
    const savedUser = localStorage.getItem('clisense_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would be an API call
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('clisense_user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    
    return { 
      success: false, 
      error: 'Invalid email or password'
    };
  };

  const register = (userData) => {
    // In a real app, this would be an API call
    const existingUser = mockUsers.find(u => u.email === userData.email);
    
    if (existingUser) {
      return { 
        success: false, 
        error: 'Email already in use'
      };
    }
    
    // Create a new user object with an ID
    const newUser = {
      id: `user_${Date.now()}`,
      ...userData,
      farms: []
    };
    
    const { password, ...userWithoutPassword } = newUser;
    
    // In a real app, we would save to a database
    mockUsers.push(newUser);
    
    // Set the current user and save to localStorage
    setCurrentUser(userWithoutPassword);
    localStorage.setItem('clisense_user', JSON.stringify(userWithoutPassword));
    
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('clisense_user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    localStorage.setItem('clisense_user', JSON.stringify(updatedUser));
    return { success: true };
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
