'use client';

import { PostProps } from "@/app/posts/page";
import { useState } from "react";

interface ButtonProps {
  posts: PostProps[];
}

export function ClientSideComponent({ posts }: ButtonProps) {
  const tailwindButton = 'bg-blue-500 hover:bg-red-700 text-white font-bold px-4 roundedtransition duration-500';

  const [nome, setNome] = useState('Alexandre');
  const [clientPosts, setClientPosts] = useState<PostProps[]>(posts);

  function alterarNome() {
    if (nome === 'Alexandre') {
      setNome('Bernard');
    } else {
      setNome('Alexandre');
    }
  }

  const handlePosts = () => {
    console.log("oi")
    setClientPosts(clientPosts.filter((posts, index) => index !== 0));
  }

  return (
    <div className="mt-5 mb-5 text-center bg-gray-200 p-4 rounded-md">
      <p>Hello. Im a client side component.</p>
      <button
        onClick={alterarNome}
        className={`${tailwindButton} py-2`}
      >Alterar nome: {nome}</button>
      <p>Total de posts: {posts.length}</p>
      <p>Total de posts on client: {clientPosts.length}</p>
      <button
        className={tailwindButton}
        onClick={handlePosts}
      >Remove Post (works only on my, a client component</button>
    </div>
  )
}