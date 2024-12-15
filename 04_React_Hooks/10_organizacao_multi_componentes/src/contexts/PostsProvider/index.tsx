import { ReactNode, useReducer } from "react";
import { PostsContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [postsState, postDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postDispatch }}>
      {children}
    </PostsContext.Provider>
  );
}