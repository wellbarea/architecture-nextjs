import { StateEnum } from "@/entities/Article";

export type ArticleParams = {
    username?: string;
    tags?: string[];
    state?: StateEnum;
}
