import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = React.useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error reading key [${key}] from localStorage:`, error);
      return initialValue;
    }
  });

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // Simular un retraso de carga de 2 segundos
    // setTimeout(() => {
    setLoading(true);
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setError(false);
    } catch (error) {
      console.error(`Error setting key [${key}] to localStorage:`, error);
      setError(true);
    }
    setLoading(false); // Indicar que la carga ha terminado
    // }, 1000);
  }, [key, value]);

  return { value, setValue, loading, error };
};

export default useLocalStorage;
