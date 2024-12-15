import { createContext } from "react";
import { PostsContextType } from "./types";

export const CounterContext = createContext<PostsContextType>({} as PostsContextType);