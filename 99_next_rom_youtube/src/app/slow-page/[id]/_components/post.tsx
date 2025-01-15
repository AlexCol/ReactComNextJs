import { ResponseProps } from '@/app/posts-mixed/page';
import { PostProps } from '@/app/posts/page';
import React from 'react'

export async function PostInfo({ id }: { id: string }) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: PostProps = await response.json();

  return (
    <div>
      <h1 className='text-center mt-5 mb-2 cont-bold text-3x1'>Todos os posts!!</h1>
      <div className='flex flex-col gap-4 mx-2'>
        {post && (
          <div key={post.id} className='bg-gray-200 p-4 rounded-md'>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}