import { useState, useEffect } from "react";
import { getResult } from "../api/getResult";

const useResult = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const loadResult = async () => {
    const resultObj = await getResult();

    setResult(resultObj);
    setLoading(false);
  };

  useEffect(() => {
    loadResult();
  }, []);
  return [result, loading];
};

export { useResult };
