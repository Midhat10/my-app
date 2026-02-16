import React, { useEffect, useState } from "react";
import ky from "ky";

function useRequest(request) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    async function kyTodos() {
      try {
        const todos = await request().json();
        setData(todos);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(kyTodos, 1000);
  }, []);
  return [data, loading, error];
}

export default useRequest;
