'use client';

import React, { useEffect, useState } from 'react'

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostClientSide() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: PostProps[] = await response.json();
      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <div>
      <h1 className='text-center mt-5 mb-2 font-bold text-3x1'>Pagina Client!!</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => alert('Hello World')}>Posso ter um botão</button>
      <div className='flex flex-col gap-4 mx-2'>
        {posts && posts.map((post) => (
          <div key={post.id} className='bg-gray-200 p-4 rounded-md'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostClientSide