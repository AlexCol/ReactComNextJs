import { useState } from "react";
import { Post } from "../Model/PostModel";
import myApiConsumer from "./config";

function PostRequestHook() {
  const [err, setErr] = useState("");
  const [posts, setPosts] = useState<Post[] | undefined>();

  const requestPosts = async () => {
    await myApiConsumer.get('/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        setErr(err);
      });
    console.log('terminou de processar');
  }

  return { err, posts, requestPosts }
}

export default PostRequestHook