import { getPosts } from "../api/posts/get.mjs";
import { renderPostList } from "../templates/postTemplate.mjs";
import { renderAllPosts } from "../templates/renderPosts.mjs";

export async function filterPosts(seletedValue) {
    const filterSelect = document.querySelector("#filterSelect");
    const postsContainer = document.querySelector("#posts");
    const posts = await getPosts();

    filterSelect.addEventListener("change", () => {
        const seletedValue = filterSelect.value;

        let filteredPosts;
        switch (seletedValue) {
            case "date":
                filteredPosts = posts.slice().sort((a, b) => 
                new Date(a.created) - 
                new Date(b.created));
                break;
            case "comments":
                filteredPosts = posts.sort((a, b) => 
                (a.comments.length || 0) - 
                (b.comments.length || 0));
                break;
            case "reactions":
                filteredPosts = posts.sort((a, b) => 
                (a._count.reactions.likes || 0) - 
                (b._count.reactions.length || 0));
                break;
            default:
                filteredPosts = posts;
                console.log(typeof posts)
        }
    renderAllPosts(filteredPosts, postsContainer)
    });
}