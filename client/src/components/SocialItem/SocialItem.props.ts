import {
	DetailedHTMLProps,
	HTMLAttributes
} from "react";

export interface SocialItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: string,
	title: string,
	link: string
}
