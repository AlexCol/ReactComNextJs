import { useContext, useEffect, useRef } from "react"
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/action";

function Posts() {
  const isMounted = useRef(true);
  const { postsState, postDispatch } = useContext(PostsContext);
  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postDispatch).then(dispatch => {
      if (isMounted.current) {
        dispatch();
      }
    });

    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, [postDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter: {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter: {counterState.counter}-</button>
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