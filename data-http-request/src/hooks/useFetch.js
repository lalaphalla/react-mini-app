import { useState } from "react";

function useFetch(fetchFn, initailValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initailValue);
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const data = await fetchFn();
        setFetchedData = data;
      } catch (error) {
        setError({ message: error.message || "Fail to fetch data" });
      }
      setIsFetching(false);
      // setAvailablePlace(resData.places);
    };
    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    error,
  };
}
