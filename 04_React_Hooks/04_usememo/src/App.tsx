import { useEffect, useMemo, useState } from 'react';
import './App.css';
import PostComponent, { iPosts } from './PostComponent';

function App() {
  console.log('App renderizado');

  // Estado para armazenar os posts
  const [posts, setPosts] = useState<iPosts[]>([]);

  // Estado para armazenar o valor do input de busca
  const [value, setValue] = useState<string>('');

  // useEffect para buscar dados da API quando o componente é montado
  useEffect(() => {
    const buscaDadosApi = async () => {
      // Simula um atraso de 3 segundos antes de buscar os dados
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setPosts(data); // Atualiza o estado com os dados recebidos
          });
      }, 3000);
    };

    buscaDadosApi();
  }, []); // Array de dependências vazio para garantir que o efeito só execute uma vez

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Atualiza o estado com o valor do input
        />
      </p>

      {
        //! useMemo memoriza o retorno da função e só renderiza novamente se o array de dependências (posts) for alterado
        useMemo(() => {
          return (
            posts.length > 0 && posts.map((post) => {
              return <PostComponent key={post.id} post={post} /> // Renderiza o componente PostComponent para cada post
            })
          );
        }, [posts])

        //! Alternativa: Renderiza o componente PostComponent toda vez que o componente App for renderizado
        // posts.length > 0 && posts.map((post) => {
        //   return <PostComponent key={post.id} post={post} />
        // })
      }

      {posts.length <= 0 && (
        <h1 className='loading'>
          Carregando... {/* Exibe mensagem de carregamento enquanto os posts estão sendo buscados */}
        </h1>
      )}
    </div>
  );
}

export default App;