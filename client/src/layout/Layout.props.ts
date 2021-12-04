import { ReactNode } from "react";

export interface LayoutProps {
	children: ReactNode;
}


//! TODO https://github.com/IlyaKirsanov/blog/commit/45a9dfd3e11f707a89a36145383d1e7db42e1a3c#r61108950

/**

@racc-oo-n 4 days ago Collaborator
Why do you need this type? React.FC already has children definition

 @IlyaKirsanov
IlyaKirsanov 4 days ago Author Owner
@racc-oo-n I thought that every prop should be typed if we use it in components, including children
Also, I find out now, that type ReactNode is too wide, almost equal to any, and its better to type as ReactChild`
 */
