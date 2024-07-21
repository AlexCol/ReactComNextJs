import { useEffect, useState } from 'react'
import './App.css'
import PostRequestHook from './Axios/PostRequestHook';
import AlbumRequestHook from './Axios/AlbumRequestHook copy';

function App() {
  const [count, setCount] = useState(0);
  const { err, posts, requestPosts } = PostRequestHook();
  const { requestAlbums } = AlbumRequestHook();

  useEffect(() => {
    const aguarda = async () => {
      //!assim cada requisição só é executada quando a anterior for finalizada
      // await requestPosts();
      // await requestAlbums();

      //!assim ambas as requisições são executadas ao mesmo tempo
      const allPromisses = Promise.all([
        requestPosts(),
        requestAlbums()
      ]);
      await allPromisses;
    }
    aguarda();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        {err && <p>Deu ruim</p>}
        {posts && posts.map((post) =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
          </div>
        )}
      </div>
    </>
  )
}

export default App