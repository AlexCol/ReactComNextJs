import { PostActions, PostActionTypes, PostState } from "./types";

export const reducer = (state: PostState, action: PostActions) => {
  console.log(action.type);
  switch (action.type) {
    case PostActionTypes.POST_LOADING:
      return { ...state, loading: true };
    case PostActionTypes.POST_SUCCESS:
      return { ...state, posts: action.payload || [], loading: false };
    default:
      return { ...state };
  }
};