import * as postActions from "../api/posts/index.mjs";
import { searchPost } from "../handlers/search.mjs";
import { renderPostList } from "./postTemplate.mjs";

export async function renderAllPosts() {
    const posts = await postActions.getPosts();
    const container = document.querySelector("#posts");
    renderPostList(posts, container);
    console.log(posts);
    searchPost("posts");
};
  