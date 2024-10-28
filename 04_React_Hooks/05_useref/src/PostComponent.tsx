export interface iPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostClick {
  onClick: () => void;
}

function PostComponent({ post, onClick }: { post: iPosts, onClick: () => void }) {
  console.log('Post renderizado');
  return <div className='post'>
    <h1 onClick={onClick}>{post.title}</h1>
    <p>{post.body}</p>
  </div>
}

export default PostComponent