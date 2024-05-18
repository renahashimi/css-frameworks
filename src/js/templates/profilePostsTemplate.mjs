import * as postActions from "../api/posts/index.mjs";
import * as storage from "../storage/index.mjs";

//POSTCARD FOR PROFILE POSTS
export function profilePostCard(postData) {
    const profile = storage.load("profile");
    const post = document.createElement("div");
    post.classList.add("profile-post-content", "bg-light", "rounded", "m-auto", "my-3", "w-100", "justify-content-center", "border", "border-3", "border-secondary", "backShadow");
    const postsHead = document.createElement("div");
    postsHead.classList.add("container-fluid", "d-flex", "border-bottom", "border-1", "border-primary", "p-1", "justify-content-start");
    const postText = document.createElement("div");
    postText.classList.add("d-block", "w-100");
    const postContent = document.createElement("div");
    postContent.classList.add("border-bottom", "d-block", "d-lg-flex");
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postInfo = document.createElement("div");
    postInfo.classList.add("d-block", "ms-3");

    //USERIMAGE
    const userImage = document.createElement("img");
    userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
    userImage.src = profile.avatar || "../../../images/moon.avif";
    userImage.alt = `Avatar Name ${postData.title}`;
    userImage.style.width = "60px";
    userImage.style.height = "60px";
    postLogo.appendChild(userImage);

    // USERNAME
    const userName = document.createElement("h2");
    userName.innerHTML = `${profile.name}`;
    userName.classList.add("fs-4", "fw-bolder", "mt-2");
    postInfo.append(userName)


    // USERNAME-ID
    const userNameId = document.createElement("h3");
    userNameId.innerHTML = `@${postData.id}`;
    userNameId.classList.add("fs-6", "mt-n1", "text-secondary");
    postInfo.append(userNameId)

    //DELETE and EDIT BUTTON || DROPDOWN MENU
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown", "container", "d-flex", "bg-light", "m-auto", "justify-content-end", "float-end");

    const dropdownToggle = document.createElement("button");
    dropdownToggle.classList.add("dropdown-toggle", "btn", "btn-sm", "btn-light", "fs-2", "float-end");
    dropdownToggle.setAttribute("type", "button");
    dropdownToggle.setAttribute("id", "dropdownMenuButton");
    dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
    dropdownToggle.setAttribute("aria-expended", "false");
    //dropdownToggle.innerHTML = `<i class="bi bi-three-dots"></i>`;
    //Icon
    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-three-dots-vertical");
    icon.setAttribute("aria-hidden", "true")
    dropdownToggle.appendChild(icon);

    const dropdownMenu = document.createElement("li");
    dropdownMenu.classList.add("dropdown-menu", "p-2");
    dropdownMenu.setAttribute("aria-labelledby", "dropdownMenubuttun");

    // const buttonContainer = document.createElement("div");
    // buttonContainer.classList.add("container", "d-flex", "bg-light", "border-2", "justify-content-end");

    //Edit-button
    const editBtn = document.createElement("li");
    //editBtn.classList.add("editButton", "fs-6", "rounded-circle", "bg-light", "border-2", "h-50", "mt-3", "me-2");
    editBtn.innerHTML = `<button class="dropdown-item" type="button"><i class="bi bi-pencil"></i> Edit post</button>`;
    editBtn.dataset.postId = postData.id;
    editBtn.addEventListener("click", async function() {
        const postId = this.dataset.postId;
        if (postId) {
            window.location.href = `/feed/post/edit/?id=${postId}`
        } else {
        //console.error("Missing post ID:", error);
        alert("Failed to delete post! Missing post ID")
        }
    });    
    dropdownMenu.append(editBtn);

    //Delete-button
    const deleteBtn = document.createElement("li");
    // deleteBtn.classList.add("deleteButton", "fs-6", "rounded-circle", "bg-light", "border-2", "h-50", "mt-3", "me-2");
    deleteBtn.innerHTML = `<button class="dropdown-item" type="button"><i class="bi bi-archive"></i> Delete</button>`;
    deleteBtn.dataset.postId = postData.id;
    deleteBtn.addEventListener("click", async function() {
        const postId = this.dataset.postId;
        if (postId) {
            if (confirm("Are you sure you want to delete this post?")) {
                try {
                    await postActions.removePost(postId)
                    alert("Your post is now deleted successfully. N.B.: Updating the page is recommended!");
                    const postElement = this.closest(".post");
                    if (postElement) {
                        postElement.remove();
                    }
                } catch (error) {
                    console.error("Error deleting post:", error);
                }
            }
        } else {
        //console.error("Missing post ID:", error);
        alert("Failed to delete post! Missing post ID")
        }
    });    
    dropdownMenu.append(deleteBtn);

    // TIME
    const time = document.createElement("time");
    time.setAttribute("date", postData.created);
    time.classList.add("ms-2", "fs-7", "fst-italic");
    time.innerHTML =  `${postData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
    postText.append(time);

    // Title
    const title = document.createElement("h3");
    title.classList.add("fw-bolder", "fs-4", "m-2");
    title.innerHTML = postData.title;
    postText.append(title);

    // TEXT 
    const contentText = document.createElement("p");
    contentText.classList.add("m-2", "fs-5");
    contentText.innerHTML = postData.body;
    postText.append(contentText);

    // TAGS 
    if (Array.isArray(postData.tags) && postData.tags.length > 0) {
        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("d-flex", "ms-1");
        postData.tags.forEach(tag => {
            const individualTags = tag.split(",").map(tag => `#${tag.trim()}`);
            const tagText = individualTags.join(', ');
            const tagElement = document.createElement("p");
            tagElement.classList.add("fs-7", "px-1");
            tagElement.textContent = tagText;
            tagsContainer.append(tagElement);
        });
        postText.append(tagsContainer);
    }
    postContent.append(postText)

    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("d-block", "m-auto", "justify-content-center", "w-100", "p-2");
        img.style.maxWidth = "100%";
        img.style.maxHeight = "350px";
        img.style.objectFit = "cover";
        img.src = postData.media || "../../../../images/404-error.jpeg";
        img.alt = `Image title ${postData.title}`;
        postContent.append(img);
    } 

    const postsCount = postData.posts;

    if (postsCount === 0) {
        const postContainer = document.querySelector("#profilePosts")

        const noPostsText = document.createElement("p");
        noPostsText.textContent = "No posts yet. Create your first post!"    
        console.log(noPostsText)
        postContainer.append(noPostsText);
    }       

    dropdown.append(dropdownToggle, dropdownMenu)
    postsHead.append(postLogo, postInfo, dropdown)
    post.append(postsHead, postContent)
    
    return post;
}



