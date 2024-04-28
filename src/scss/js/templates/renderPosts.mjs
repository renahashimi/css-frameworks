import { postCard } from "./postTemplate.mjs";
import * as postActions from "../api/posts/index.mjs";


// Render all posts
function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard));
};

export async function renderAllPosts() {
    const posts = await postActions.getPosts();
    const container = document.querySelector("#posts");
    renderPostList(posts, container);
    console.log(posts);
};
  