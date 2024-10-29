export interface iPostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostClick {
  onClickHandler: (value: string) => void;
}

//function PostComponent({ post, onClick }: { post: iPosts, onClick: () => void }) {
function PostComponent({ post, onClickHandler }: { post: iPostsProps } & IPostClick) {
  console.log('Post renderizado');
  return <div className='post'>
    <h1
      style={{ cursor: 'pointer', fontSize: '15px' }}
      onClick={() => onClickHandler(post.title)}
    >{post.title}</h1>
    <p>{post.body}</p>
  </div>
}

export default PostComponent

/* forma passando tudo numa interface apenas */
/*
export interface iPostsProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  },
  onClick: () => void;
}

function PostComponent({ post, onClick }: iPostsProps) {
  console.log('Post renderizado');
  return <div className='post'>
    <h1 onClick={onClick}>{post.title}</h1>
    <p>{post.body}</p>
  </div>
}

export default PostComponent
*/