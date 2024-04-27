import { createPost } from "../api/posts/index.mjs";



export function setCreatePostListener() {
    const form = document.querySelector("#createPost");
    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());

            post.tags = post.tags.split(",").map((tag) => tag.trim());

            createPost(post);
            console.log(post)
        });
    }
}