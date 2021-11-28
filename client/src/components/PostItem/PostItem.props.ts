import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Post } from "../../utils/interface";

export interface PostItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: Post,
}
