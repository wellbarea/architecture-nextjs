import { IArticle } from "@/entities/Article";
import { UseInfiniteQueryOptions, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { createArticleListKey, createTagistKey } from "./keys";
import { api } from "@/libs/axios";
import { ArticleParams } from "./types";
import { AxiosError, AxiosResponse } from "axios";
import { ITag } from "@/entities/Tag";

export const useArticles = ({ state, tags = [], username = '' }: ArticleParams, options?: UseInfiniteQueryOptions<AxiosResponse<IArticle[], AxiosError>>) => {
    const LIMIT = 20;

    return useInfiniteQuery(
        createArticleListKey(state, tags, username),
        ({ pageParam = 1 }) => api.get<IArticle[]>(`/articles`, { params: { per_page: LIMIT, page: pageParam, state: state, tag: tags?.join(`,`), username: username } }),
        {
            getNextPageParam: (_, pages) => pages.length + 1,
            ...options,
        },
    );
}

export function useTagsQuery() {
    return useQuery(
        createTagistKey(),
        async () => {
            const { data } = await api.get<ITag[]>(`/tags`);
            return data;
        }
    );
  }
  