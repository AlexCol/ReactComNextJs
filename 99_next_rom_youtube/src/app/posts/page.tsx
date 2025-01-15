import { ClientSideComponent } from '@/components/client-side-component';
import Link from 'next/link';
import React from 'react'

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ResponseProps {
  posts: PostProps[];
}

async function Posts() {
  const response = await fetch('https://dummyjson.com/posts');
  const data: ResponseProps = await response.json();
  const posts = data.posts;

  //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //const data: PostProps[] = await response.json();
  //const posts = data;

  return (
    <div>
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