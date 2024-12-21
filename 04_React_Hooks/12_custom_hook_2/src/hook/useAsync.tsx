import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction: any, shoudRun?: boolean) => {
  const [result, setResult] = useState<JSON | null>(null);
  const [error, setError] = useState<JSON | null>(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus("pending");

    return asyncFunction()
      .then(async (response: any) => {
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        setResult(response);
        setStatus("settled");
      })
      .catch(async (error: any) => {
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        if (error instanceof Error) {
          error = { message: error.message };
        }
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shoudRun) {
      run();
    }
  }, [shoudRun, run]);

  return { result, error, status, run };
}

export default useAsync;