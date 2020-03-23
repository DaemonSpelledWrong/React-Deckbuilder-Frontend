import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies, method, body) => {
  const [ fetchedData, setFetchedData ] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setFetchedData(data))
      .catch(err => {
        console.log(err);
      })
  }, [dependencies]);

  console.log(fetchedData);
  return [fetchedData];
};