import Link from 'next/link'
import React from 'react'

export function Header() {
  return (
    <header className='flex px-2 py-4 bg-zinc-900 text-white'>
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <div>
          <Link href={'/'}>NextJS</Link>
        </div>

        <nav>
          <ul className='flex items-center justify-center gap-2'>
            <li className='hover:text-blue-500'>
              <Link href={"/contatos"}>Contatos</Link>
            </li>
            <li className='hover:text-blue-500'>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li className='hover:text-blue-500'>
              <Link href={"/posts"}>Posts</Link>
            </li>
            <li className='hover:text-blue-500'>
              <Link href={"/posts-client-side"}>Posts Client Side</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}