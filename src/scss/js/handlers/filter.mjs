import { getPosts } from "../api/posts/get.mjs";
import { renderPostList } from "../templates/postTemplate.mjs";
import { renderAllPosts } from "../templates/renderPosts.mjs";

export async function filterPosts() {
    const filterSelect = document.querySelector("#filterSelect");
    const postsContainer = document.querySelector("#posts");
    const posts = await getPosts();
    console.log(typeof posts)

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
                filteredPosts = posts.filter(post => post.comments.length > 0);
                break;
            case "reactions":
                filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
                break;
            default:
                filteredPosts = posts;
        }
    renderPostList(filteredPosts, postsContainer)
    });
// } let filteredPosts;
// if (seletedValue === "date") {
//     filteredPosts = posts.slice().sort((a, b) => 
//     new Date(a.id) - 
//     new Date(b.id));
// } else if (seletedValue === "comments") {
//     filteredPosts = posts.filter(post => post.comments.length > 0);
// } else if (seletedValue === "reactions"){
//     filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
//     return filteredPosts;
// } else {
//     filteredPosts = posts;

}