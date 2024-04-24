import { postCard } from "./post.mjs";
import * as postActions from "./api/posts/index.mjs";


// Render a post
export function renderPostCard(postData, parent) {
    parent.append(postCard(postData))
}

// Render all post / list
export function renderPostList(postListData, parent) {
    parent.append(...postListData.map(postCard));
}
export async function renderPosts() {
    const posts = await postActions.getPosts(id);
    const post = posts[23]; 
    const container = document.querySelector("#post");
    postCard(post, container);
  }