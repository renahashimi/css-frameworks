import { postCard } from "./post.mjs";
import * as postActions from "./api/posts/index.mjs";

// Render all post / list
function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard))
};

export async function renderAllPosts() {
    const posts = await postActions.getPosts();
    const post = posts[45]; 
    const container = document.querySelector("#post");
    renderPostList(post, container);
  }