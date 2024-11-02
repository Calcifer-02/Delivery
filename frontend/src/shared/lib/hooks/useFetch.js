import { useState } from 'react';

export const useFetch = (requestCallback) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      await requestCallback();
    } catch (error) {
      setError(true);
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, isLoading, isError];
};
