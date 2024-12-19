import { useEffect, useState } from "react";
import { Post } from "../Types/Post";

/* criando hook personalizado, seria em outro aquivo */
const useFetch = (url: RequestInfo | URL, options?: RequestInit): [Post[], boolean] => {
  const [result, setResult] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    console.log('useEffect disparado');

    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const response = await fetch(url, { ...options, signal });
        if (response.status != 200) {
          return undefined;
        }
        const data = await response.json() as Post[];
        const normalizedData = Array.isArray(data) ? data : [data];
        setResult(normalizedData);
      } catch (error) {
        if (error instanceof DOMException) {
          console.warn('Requisição cancelada: ', error);
        }
        console.log('Erro na requisição:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort("Leaving page"); //aborta a requisição caso o componente seja desmontado
    }
  }, [url, options]);

  return [result, loading];
}

export default useFetch;