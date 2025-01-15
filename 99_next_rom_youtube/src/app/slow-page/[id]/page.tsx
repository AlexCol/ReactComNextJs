import React, { Suspense } from 'react'
import { PostInfo } from './_components/post';

async function SlowPage(
  { params }: { params: Promise<{ id: string }> } //https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
) {
  const { id } = await params;

  return (
    <div>
      <h1 className='text-center mt-5 mb-2 cont-bold text-3x1'>Detalhes do post: {id}</h1>
      {/* o suspense é um componente que permite que você suspenda a renderização de um componente até que todas as promessas sejam resolvidas */}
      {/*com isso os demais compomentes que não precisam esperaram rodam normalmente*/}
      {/* se remover o suspense, vai ser travada a pagina toda até terminar (o que vai invocar o componente de loagin)*/}
      <Suspense>
        <PostInfo id={id} />
      </Suspense>
    </div>
  )
}

export default SlowPage