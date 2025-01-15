import { ResponseProps } from '@/app/posts-mixed/page';
import { useParams } from 'next/navigation'
import React from 'react'
import { PostProps } from '../page';

async function PostById(
  { params }: { params: Promise<{ id: string }> } //https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
) {
  //const { id } = useParams(); //isso vai exigir que seja client side
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const posts: PostProps = await response.json();
  console.log(posts);

  return (
    <div>
      <h1 className='text-center mt-5 mb-2 cont-bold text-3x1'>Post por ID!!</h1>
      <div className='flex flex-col gap-4 mx-2'>
        {posts && (
          <div key={posts.id} className='bg-gray-200 p-4 rounded-md'>
            <h2 className='font-bold'>{posts.title}</h2>
            <p>{posts.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostById