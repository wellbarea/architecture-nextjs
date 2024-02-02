import { ITag } from "@/entities/Tag";

export type Props = {
    tags: ITag[]; 
    selectedTags: String[];
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}