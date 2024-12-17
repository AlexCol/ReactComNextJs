import { useEffect, useMemo, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/* criando hook personalizado, seria em outro aquivo */
const useFetch = (url: RequestInfo | URL, options?: RequestInit): [Post[], boolean] => {
  const [result, setResult] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  // useMemo é usado para garantir que o objeto de options tenha uma referência estável dentro do hook, 
  // evitando que o useEffect seja disparado desnecessariamente caso options não mude.
  const stableOptions = useMemo(() => options, [options]);
  const stableUrl = useMemo(() => url, [url]);

  useEffect(() => {
    console.log('useEffect disparado');

    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const response = await fetch(stableUrl, stableOptions);
        if (response.status != 200) {
          return undefined;
        }
        const data = await response.json() as Post[];
        const normalizedData = Array.isArray(data) ? data : [data];
        setResult(normalizedData);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return [result, loading];
}

function Home() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const options: RequestInit = {
    method: 'GET',
    headers: {
      abc: '1'
    }
  };
  const [result, loading] = useFetch(url, options);

  if (loading) {
    return <div>Loading...</div>
  }

  if (result.length === 0) {
    return <div>No posts</div>
  }

  console.log('result', result);

  return (
    <div>
      {result.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home