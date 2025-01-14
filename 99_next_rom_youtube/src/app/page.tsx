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

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home