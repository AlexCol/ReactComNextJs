import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center font-bold mt-9 text-6xl'>
        404 - Página não encontrada
      </h1>
      <p>Essta página que tentou acessar não existe!</p>

      <Link href={'/'}>Voltar para página Home</Link>

    </div>
  )
}

export default NotFound