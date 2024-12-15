import { Dispatch } from "react";

export enum PostActionTypes {
  POST_LOADING = 'POST_LOADING',
  POST_SUCCESS = 'POST_SUCCESS',
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostActions {
  type: PostActionTypes;
  payload?: Post[];
}

export interface PostState {
  posts: Post[];
  loading: boolean;
}

export interface PostsContextType {
  postsState: PostState;
  postDispatch: Dispatch<PostActions>;
}