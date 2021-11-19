import { RootState } from "./rootReducer";
import { Post } from "../utils/interface";


export const postsSelector = (state: RootState): (Post | null)[] => state.posts;
export const isPortalOpenSelector = (state: RootState): boolean => state.isPostPortalOpen;
