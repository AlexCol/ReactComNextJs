import { ClientSideComponent } from '@/components/client-side-component';
import Link from 'next/link';
import React from 'react'

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ResponseProps {
  posts: PostProps[];
}

async function Posts() {
  const response = await fetch('https://dummyjson.com/posts');
  const data: ResponseProps = await response.json();
  const posts = data.posts;

  async function handleClick() {
    'use server'; //faz com que o código seja executado no servidor, se comentar essa parte dá erro

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();
    const posts = data.posts;
    console.log(posts); //por ser use server, o console.log não será exibido no console do navegador
  }

  async function handleSearchUsers(formData: FormData) {
    'use server';
    console.log(`Buscando usuário... ${formData.get('userId')}`);
    const response = await fetch(`https://dummyjson.com/posts/user/${formData.get('userId')}`);
    const data: ResponseProps = await response.json();
    const posts = data.posts;
    console.log(posts);
  }

  return (
    <div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleClick}
      >
        Fetch Posts
      </button>

      <form
        action={handleSearchUsers}
      >
        <input
          type="text"
          placeholder="ID do usuário"
          className='border border-gray-400 p-2 rounded'
          name='userId'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Buscar usuário</button>
      </form>

      <ClientSideComponent posts={posts} />

      <h1 className='text-center mt-5 mb-2 cont-bold text-3x1'>Todos os posts!!</h1>
      <div className='flex flex-col gap-4 mx-2'>
        {posts && posts.map((post) => (
          <div key={post.id} className='bg-gray-200 p-4 rounded-md'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <div className='mt-2 text-right text-blue-500'>
              <Link href={`posts/${post.id}`}>Ver detalhes do post</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts