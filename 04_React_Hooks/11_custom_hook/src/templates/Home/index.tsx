import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";

function Home() {
  const [postId, setPostId] = useState(0);
  const url = `https://jsonplaceholder.typicode.com/posts${postId === 0 ? '' : "/" + postId}`;

  const options: RequestInit = useMemo(() => ({ //necessário para não ficar criando o objeto toda vez que o componente renderiza, o que dispararia o useEffect do useFetch infinitas vezes
    method: 'GET',
    headers: {
      abc: '1'
    }
  }), []);

  const [result, loading] = useFetch(url, options);

  if (loading) {
    return <div>Loading...</div>
  }

  if (result.length === 0) {
    return <div>No posts</div>
  }

  console.log(postId);

  return (
    <div>
      {result.map(post => (
        <div key={post.id}>
          <h2 onClick={() => postId === 0 ? setPostId(post.id) : setPostId(0)}>{post.title}</h2>
          {postId !== 0 && <p>{post.body}</p>}
        </div>
      ))}
    </div>
  )
}

export default Home