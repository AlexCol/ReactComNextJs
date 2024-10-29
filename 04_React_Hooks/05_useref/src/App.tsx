import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import PostComponent, { iPostsProps } from './PostComponent';

function App() {
  console.log('App renderizado');
  const [posts, setPosts] = useState<iPostsProps[]>([]);
  const [value, setValue] = useState<string>('');
  const input = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = (value: string) => {
    setValue(value);
    input.current.focus();
  }

  useEffect(() => {
    const buscaDadosApi = async () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data));
    };

    buscaDadosApi();
  }, []);

  return (
    <div className="App">

      {posts.length > 0 && (
        <p>
          <input
            ref={input}
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </p>
      )}

      {
        useMemo(() => {
          return (
            posts.length > 0 && posts.map((post: iPostsProps) => {
              return <PostComponent key={post.id} post={post} onClickHandler={handleClick} />
            })
          );
        }, [posts])
      }

      {posts.length <= 0 && (
        <h1 className='loading'>
          Carregando...
        </h1>
      )}
    </div>
  );
}

export default App;