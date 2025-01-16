import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do Zero.',
  description: 'Aprenda Next JS do Zero.',
  openGraph: {
    title: 'Home - Aula Next JS do Zero.',
    description: 'Aprenda Next JS do Zero.',
    //images: []
  },
  //robots: 'index,follow',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
}

export const revalidate = 5;
function Home() {
  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Home</h1>
      <p>Numero gerado randomicamente: {randomNumber}</p>
    </div>
  )
}

export default Home