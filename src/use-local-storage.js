import { useState, useEffect } from "react";

export default function useLocalStorage(keyName, initialValue) {
  // Add your solution here
  const [value, setValue] = useState(() => {
    const localData = localStorage.getItem(keyName);
    
    if (localData !== null) {
      return JSON.parse(localData);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value])

  return [value, setValue];
};
