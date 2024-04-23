import { postCard } from "./post.mjs";
import * as postActions from "./api/posts/index.mjs";

// Render all post / list
export function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard))
};

export async function renderAllPosts() {
    const posts = await postActions.getPosts();
    const container = document.querySelector("#posts");
    templates.renderPostList(posts, container);
}