import { removePost } from "../api/posts/delete.mjs";
import * as storage from "../storage/index.mjs";

export function profileTemplate(profileData) {
    
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("border-bottom", "border-3", "border-primary", "bg-white")

    //PAGE NAME
    const pageName = document.createElement("h1");
    pageName.classList.add("m-auto", "fs-5", "py-2", "ms-2", "font-righteous", "text-center");
    pageName.textContent = `Welcome to ${profileData.name}´s Profile`;

    const profileInfo = document.createElement("div");
    profileInfo.classList.add("bg-white")
    
    //NAME
    const myName = document.createElement("h1");
    myName.classList.add("d-flex", "fw-bolder", "justify-content-center");
    myName.textContent = `${profileData.name}`;
    
    //EMAIL
    const myEmail = document.createElement("h2");
    myEmail.classList.add("d-flex", "fs-6", "justify-content-center");
    myEmail.innerHTML = `${profileData.email}`;
    
    //POSTS COUNT
    const myPostCount = document.createElement("h2");
    myPostCount.classList.add("d-flex", "fs-6", "justify-content-center", "fw-bolder");
    myPostCount.innerHTML = `POSTS: ${profileData._count.posts}`;

    //BANNER / BACKGROUND
    
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("container-fluid", "object-fit-cover", "p-0");
    bannerImg.style.width = "100%";
    bannerImg.style.height = "125px";
    if (profileData.banner) {
        bannerImg.src = profileData.banner;
        bannerImg.alt = `Banner of: ${profileData.name}`;
    } else {
        return [];
    }

    //EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit profile";
    //const userName = JSON.parse(localStorage.getItem("profile")).name;
    //location.href = /post/edit/;
    editBtn.classList.add("btn", "fs-4", "top-1", "end-0", "p-2", "py-1", "m-2", "bg-white", "border-secondary", "position-absolute", "rounded-circle");
    editBtn.innerHTML = `<i class="bi bi-pencil-square"></i>`;

    editBtn.addEventListener("click", () => {
        window.location.href = `../../../../profile/edit/`;
    });

    const profileHead = document.createElement("div");
    profileHead.classList.add("d-flex", "m-auto", "justify-content-evenly", "bg-white", "mt-n3", "position-relative", "rounded-4")

    //FOLLOWERS
    const followersSectíon = document.createElement("div");
    followersSectíon.classList.add("d-block", "mt-2");

    const followersText = document.createElement("h3");
    followersText.innerHTML = "FOLLOWERS";
    followersText.classList.add("fs-7", "fw-bolder");
    const followersNumber = document.createElement("p");
    followersNumber.innerHTML = `${profileData._count.followers}`;
    followersNumber.classList.add("d-flex","fs-4", "mt-n2", "justify-content-center");
    followersSectíon.append(followersText, followersNumber);
    profileHead.append(followersSectíon);

    //AVATAR
    const avatarImg = document.createElement("img")
    avatarImg.classList.add("avatarImg", "object-fit-cover", "rounded-circle", "mt-n5", "border", "border-3", "border-white");
    avatarImg.style.width = "100px";
    avatarImg.style.height = "100px";
    if (profileData.avatar){
        avatarImg.src = profileData.avatar;
        avatarImg.alt = `Avatar of: ${profileData.name}`;
    } else {
        return [];
    }    
    profileHead.append(avatarImg)

    //FOLLOWING
    const followingSectíon = document.createElement("div");
    followingSectíon.classList.add("d-block", "mt-2");

    const followingText = document.createElement("h3");
    followingText.innerHTML = "FOLLOWING";
    followingText.classList.add("fs-7", "fw-bolder")
    const followingNumber = document.createElement("p");
    followingNumber.innerHTML = `${profileData._count.following}`;
    followingNumber.classList.add("d-flex","fs-4", "mt-n2", "justify-content-center");
    followingSectíon.append(followingText, followingNumber);
    profileHead.append(followingSectíon);

    //BUTTON
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-center", "py-3", "bg-light")
    
    //Follow
    const followBtn = document.createElement("button");
    followBtn.type = "button";
    followBtn.innerHTML = `FOLLOW <i class="bi bi-plus-lg"></i>`;
    followBtn.classList.add("me-1", "fs-6", "fw-bolder", "bg-white", "rounded");
    buttonContainer.append(followBtn)

    //Message  
    const messageBtn = document.createElement("button");
    messageBtn.type = "button";
    messageBtn.innerHTML = `MESSAGE <i class="bi bi-envelope-heart"></i>`;
    messageBtn.classList.add("ms-1", "fs-6", "fw-bolder", "bg-white", "rounded");
    buttonContainer.append(messageBtn)
    

    profileInfo.append(myName, myEmail, myPostCount);
   // profileBox.append(myInfo)
    profileContainer.append(pageName, bannerImg, editBtn, profileHead, profileInfo, buttonContainer);

    return profileContainer;

}

//POSTCARD FOR PROFILE POSTS
export function profilePostCard(postData) {
    const profile = storage.load("profile");
    const post = document.createElement("div");
    post.classList.add("bg-light", "rounded", "my-3", "mx-3", "pb-3", "border", "border-3", "border-secondary");
    const postsHead = document.createElement("div");
    postsHead.classList.add("container-fluid", "d-flex", "border-bottom", "border-1", "border-primary", "p-1", "justify-content-start");
    const postContent = document.createElement("div");
    postContent.classList.add("border-bottom");
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postInfo = document.createElement("div");
    postInfo.classList.add("d-block", "ms-3");
    const postReCo = document.createElement("div");
    postReCo.classList.add("d-block", "ms-3");
    
    //USERIMAGE
    const userImage = document.createElement("img");
    userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
    userImage.src = profile.avatar ? profile.avatar: "../../../../images/moon.avif";
    console.log(profile.avatar)
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
                    await removePost(postId)
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



    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("d-block", "m-auto", "justify-content-center", "p-2");
        img.style.maxWidth = "98%";
        img.style.maxHeight = "300px";
        img.src = postData.media || "../../../../images/404-error.jpeg";
        img.style.backgroundColor = "$black";
        img.alt = `Image title ${postData.title}`;
        postContent.append(img);

        console.log(postData.media)
    } 

    // TIME
    const time = document.createElement("time");
    time.setAttribute("date", postData.created);
    time.classList.add("ms-2", "fs-7", "fst-italic");
    time.innerHTML =  `${postData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
    postContent.append(time);

    // Title
    const title = document.createElement("h3");
    title.classList.add("fw-bolder", "fs-4", "m-2");
    title.innerHTML = postData.title;
    postContent.append(title);

    // TEXT 
    const contentText = document.createElement("h4");
    contentText.classList.add("m-2", "fs-5");
    contentText.innerHTML = postData.body;
    postContent.append(contentText);

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
        postContent.append(tagsContainer);
    }
    

    //REACTIONS
    const reactionContainer = document.createElement("div");
    reactionContainer.classList.add("reactioncontainer");
 
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("reactionbtn", "like-button", "border-0", "fs-2", "bg-white", "ms-2");
    likeBtn.innerHTML = `<i class="bi bi-star"></i>`;

    const likeCount = document.createElement("span");
    likeCount.classList.add("reactioncount");
    likeCount.textContent = `${postData.reactions && postData.reactions.likes ? postData.reactions.likes : 0} Stars`;
    
    const postId = postData.id;

    let isLiked = storage.load(`liked_${postId}`) === "true";
    if (isLiked) {
        likeBtn.classList.add("liked");
    }
    if (isLiked === null) {
        isLiked = false;
    }
    
    const likedBtn = document.createElement("button");
    likedBtn.classList.add("reactionbtn", "liked-button", "border-0", "fs-2", "bg-white", "ms-2", "me-1");

    likeBtn.addEventListener("click", () => {
        if (!isLiked) {
            postData.reactions = postData.reactions || {};
            postData.reactions.likes = (postData.reactions.likes || 0) + 1;
            likeCount.textContent = `${postData.reactions.likes} stars`;
            reactionContainer.replaceChild(likedBtn, likeBtn);
            postData.reactions.liked = "true";
            likeBtn.classList.add("liked");
            likedBtn.innerHTML = `<i class="bi bi-star-fill"></i>`;
            storage.save(`liked_${postId}`, true);
            isLiked = true;
        } else {
            postData.reactions.likes = Math.max(0, (postData.reactions.likes || 0) -1);
            likeCount.textContent = `${postData.reactions.likes} stars`;
            likedBtn.innerHTML = `<i class="bi bi-star"></i>`;
            storage.remove(`liked_${postId}`);
            isLiked = false;
        }
    });
    console.log(`${isLiked}${postId}`)

    likedBtn.classList.toggle("clicked");
    reactionContainer.append(isLiked ? likedBtn : likeBtn, likeCount)

    dropdown.append(dropdownToggle, dropdownMenu)
    postsHead.append(postLogo, postInfo, dropdown)
    post.append(postsHead, postContent, reactionContainer)
    
    return post;
}



