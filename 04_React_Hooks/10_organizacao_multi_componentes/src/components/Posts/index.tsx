import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";

function Posts() {
  const isMounted = useRef(true);
  const { postsState, postDispatch } = useContext(PostsContext);

  useEffect(() => {
    loadPosts(postDispatch).then(dispatch => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    }
  }, [postDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && <p>Loading...</p>}

      {postsState.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts