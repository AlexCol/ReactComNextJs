import { useEffect, useMemo, useState } from 'react';
import './App.css';
import PostComponent, { iPosts } from './PostComponent';

function App() {
  console.log('App renderizado');
  const [posts, setPosts] = useState<iPosts[]>([]);
  const [value, setValue] = useState<string>('');

  const handleClick = () => {

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
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </p>
      )}

      {
        useMemo(() => {
          return (
            posts.length > 0 && posts.map((post) => {
              return <PostComponent key={post.id} post={post} onClick={handleClick} />
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