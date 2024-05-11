import { renderPostList } from "../templates/postTemplate.mjs";

export function filterPosts() {
    const filterSelect = document.querySelector(".filterSelect");
    const postsContainer = document.querySelector("#posts");

    filterSelect.addEventListener("change", () => {
        const seletedValue = filterSelect.value;

        let filteredPosts;
        switch (seletedValue) {
            case "date":
                filteredPosts = posts.slice().sort((a, b) => new Date(a.created) - new Date(b.created));
                break;
            case "comments":
                filteredPosts = posts.slice().sort((a, b) => (a.comments.length || 0) - (b.comments.length || 0));
                break;
            case "reactions":
                filteredPosts = posts.slice().sort((a, b) => (a.reactions.likes || 0) - (b.reactions.length || 0));
                break;
            default:
                filteredPosts = posts;
        }
    renderPostList(filteredPosts, postsContainer)
    });
}