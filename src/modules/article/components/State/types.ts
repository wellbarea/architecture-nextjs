import { StateEnum } from "@/entities/Article";

export type Props = {
    setState: (_enum: StateEnum) => void;
    state: StateEnum;
}