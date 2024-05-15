import * as postActions from "../api/posts/index.mjs";
import * as handler from "./index.mjs";

import { renderPostList } from "../templates/postTemplate.mjs";

export async function renderAllPosts() {
    const posts = await postActions.getPosts();
    const container = document.querySelector("#posts");
    renderPostList(posts, container);
    handler.filterByDate(posts, container);
    handler.filterByMedia(posts, container);
    handler.searchPost("posts");
        //console.log(posts);
};
  