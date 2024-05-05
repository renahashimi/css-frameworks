import { getPosts } from "../api/posts/get.mjs";
import { renderPostList } from "./postTemplate.mjs";

//RENDER MY PROFILE-POSTS
export async function renderProfilePosts(profileName) {

    const profilePostCntainer = document.querySelector("#profilePosts");

    //const posts = await postActions.getPost(id);
    profilePostCntainer.innerHTML = "";
    
    try {
        const postsData = await getPosts();
        const postsByProfile = postsData.filter(post => post.author === profileName);
        postsByProfile.foreach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            const postContent = document.createElement("p");
            postContent.textContent = post.condent;

            profilePostCntainer.appendChild(profileData.name)
        });

    } catch (error) {
        console.error("Error fetching posts", error)

    }
    //renderPostList(posts, container);
    //console.log(posts);
};