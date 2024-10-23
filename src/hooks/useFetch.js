import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const result = response.json();

        setLoading(true);
        setData(result);
        setError(false);
      } catch {
        setLoading(true);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api]);

  return [data, loading, error];
};
