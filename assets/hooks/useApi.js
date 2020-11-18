import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    

    if (!response.ok) return setError(true);
    setError(false);
    setData(response.data);
    
    setLoading(false);
  };

  return { data, error, loading, request };
};

//const {data,error,loading,request} = useApi();
