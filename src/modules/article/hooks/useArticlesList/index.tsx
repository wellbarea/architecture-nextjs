import { useArticles } from "@/services/article"
import { ArticleListParams } from "./types";

export const useArticlesList = (params: ArticleListParams) => {
    const { data, isLoading, refetch, fetchNextPage, isFetchingNextPage } = useArticles(params, {
        onError: (error) => console.error(`useArticles`, error),
    });

    return {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        refetch
    }
}