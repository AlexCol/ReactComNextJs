'use client';

import { PostProps } from "@/app/posts/page";
import { useState } from "react";

interface ButtonProps {
  posts: PostProps[];
}

export function ClientSideComponent({ posts }: ButtonProps) {
  const [nome, setNome] = useState('Alexandre');

  function alterarNome() {
    if (nome === 'Alexandre') {
      setNome('Bernard');
    } else {
      setNome('Alexandre');
    }
  }

  return (
    <div className="mt-5 mb-5 text-center bg-gray-200 p-4 rounded-md">
      <p>Hello. Im a client side component.</p>
      <button
        onClick={alterarNome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Alterar nome: {nome}</button>
      <p>Total de posts: {posts.length}</p>
    </div>
  )
}