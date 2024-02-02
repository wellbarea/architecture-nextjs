import { StateEnum } from "@/entities/Article";

export type ArticleListParams = {
    username?: string;
    tags?: string[];
    state?: StateEnum;
}