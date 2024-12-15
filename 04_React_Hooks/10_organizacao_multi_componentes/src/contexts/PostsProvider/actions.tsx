import { Post, PostActions, PostActionTypes } from "./types";

export const loadPosts = async (dispatch: ({ type, payload }: PostActions) => void) => {
  dispatch({ type: PostActionTypes.POST_LOADING });
  const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRaw.json() as Post[];
  return () => dispatch({ type: PostActionTypes.POST_SUCCESS, payload: posts });
}