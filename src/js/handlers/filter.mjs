import { getPosts } from "../api/posts/get.mjs";
import { renderPostList } from "../templates/postTemplate.mjs";
import { renderAllPosts } from "./index.mjs";

export async function filterPosts() {
    const posts = await getPosts();
 
    const filterAllFeeds = document.getElementById("allFeeds");
    const filterByDate = document.getElementById("byDate");
    const filterByMedia = document.getElementById("byMedia");
    
    
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

   filterAllFeeds.addEventListener("change", async () => {
        if (filterAllFeeds.checked) {
            renderPostList(posts, postsContainer);
            filterByDate.checked = false;
            filterByMedia.checked = false;
        }
    });
    filterByDate.addEventListener("change", () => {
        if (filterByDate.checked) {
           posts.sort((a, b) => new Date(a.created) - new Date(b.created));
            console.log("DATE", posts)
            renderPostList(posts, postsContainer);   
            filterAllFeeds.checked = false;
            filterByMedia.checked = false;
        }
    });
    filterByMedia.addEventListener("change", () => {
        if (filterByMedia.checked) {
            const mediaPosts = posts.filter(post => post.media);
            renderPostList(mediaPosts, postsContainer);
            filterAllFeeds.checked = false;
            filterByDate.checked = false;
            console.log("MEDIA", mediaPosts);
        }
    });

    if (!filterAllFeeds.checked,
        !filterByDate.checked, 
        !filterByMedia.checked) {
            renderAllPosts();
        }

}

document.addEventListener("DOMContentLoaded", () => {
    filterPosts();
});