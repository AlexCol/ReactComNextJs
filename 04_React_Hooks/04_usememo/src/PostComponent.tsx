export interface iPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostComponent({ post }: { post: iPosts }) {
  console.log('Post renderizado');
  return <div className='post'>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
}

export default PostComponent