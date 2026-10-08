import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState(() => {
    try {
      const local = localStorage.getItem('futureengineers_saved');
      return local ? JSON.parse(local) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('futureengineers_saved', JSON.stringify(savedItems));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedItems]);

  const toggleSave = (item) => {
    setSavedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isSaved = (id) => savedItems.some((i) => i.id === id);

  return (
    <SavedContext.Provider value={{ savedItems, toggleSave, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
