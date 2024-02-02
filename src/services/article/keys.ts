import { StateEnum } from "@/entities/Article";
import { QueryKey } from "@tanstack/react-query";

export const createArticleListKey = (state: StateEnum | undefined, tags: string[], username: string): QueryKey => [`article`, `list`, state, tags, username];
export const createTagistKey = (): QueryKey => [`tag`, `list`];