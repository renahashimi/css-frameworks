import { postReacts } from "../api/posts/react.mjs";
import * as storage from "../storage/index.mjs";
//import { save, remove } from "../storage/index.mjs";

export function postCard(postData) {

    const post = document.createElement("div");
    post.classList.add("bg-light", "rounded", "mx-2", "my-3", "pb-3");
    const postsHead = document.createElement("div");
    postsHead.classList.add("d-flex", "border-bottom", "border-1", "border-primary", "p-1");
    const postContent = document.createElement("div");
    postContent.classList.add("border-bottom");
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postInfo = document.createElement("div");
    postInfo.classList.add("d-block", "ms-3");
    const postReCo = document.createElement("div");
    postReCo.classList.add("d-block", "ms-3");
    
    //USERIMAGE
    if (postData.name && postData.avatar) {
        const userImage = document.createElement("img");
        userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
        userImage.src = postData.avatar ? postData.avatar: "../../../../images/moon.avif";
        userImage.alt = `Avatar Name ${postData.title}`;
        userImage.style.width = "60px";
        userImage.style.height = "60px";
        postLogo.appendChild(userImage);

        // USERNAME
        const userName = document.createElement("h2");
        //userName.href = `/profile/?name=${postData.author.name}`;
        userName.innerHTML = `${postData.name}`;
        userName.classList.add("fs-4", "fw-bolder", "mt-2");
        postInfo.append(userName)

    } else if (postData.author) {
        const userImage = document.createElement("img");
        userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
        userImage.src = postData.author && postData.author.avatar ? postData.author.avatar: "../../../../images/moon.avif";
        userImage.alt = `Avatar Name ${postData.title}`;
        userImage.style.width = "60px";
        userImage.style.height = "60px";
        postLogo.appendChild(userImage);
    
        // USERNAME
        const userName = document.createElement("h2");
        //userName.href = `/profile/?name=${postData.author.name}`;
        userName.innerHTML = `${postData.author.name}`;
        userName.classList.add("fs-4", "fw-bolder", "mt-2");
        postInfo.append(userName)
    }

    // USERNAME-ID
    const userNameId = document.createElement("h3");
    userNameId.innerHTML = `@${postData.id}`;
    userNameId.classList.add("fs-6", "mt-n1", "text-secondary");
    postInfo.append(userNameId);

    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("d-block", "m-auto", "justify-content-center", "p-2");
        img.style.maxWidth = "98%";
        img.style.maxHeight = "300px";
        img.src = postData.media ? postData.media: "../../../../images/404-error.jpeg";
        img.style.backgroundColor = "$black";
        img.alt = `Image title ${postData.title}`;
        postContent.append(img);
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
    reactionContainer.classList.add("reactioncontainer", "mt-n2");
 
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("reactionbtn", "like-button", "border-0", "fs-2", "bg-white", "ms-2");
    likeBtn.innerHTML = `<i class="bi bi-star"></i>`;

    const likeCount = document.createElement("span");
    likeCount.classList.add("reactioncount");
    likeCount.textContent = `${postData.reactions && postData.reactions.likes ? postData.reactions.likes : 0} Stars`;

    likeBtn.addEventListener("click", async () => {
    try {
        const reactionData = await postReacts(postData, "like");
        console.log("Reaction Successfully:", reactionData);

    } catch (error) {
        console.error("Failed to react to post", error)

    }
});

    

    // const postId = postData.id;

    // let isLiked = storage.load(`liked_${postId}`) === true;
    // if (isLiked) {
    //     likeBtn.classList.add("liked");
    // }
    // if (isLiked === null) {
    //     isLiked = false;
    // }
    
    // const likedBtn = document.createElement("button");
    // likedBtn.classList.add("reactionbtn", "liked-button", "border-0", "fs-2", "bg-white", "ms-2", "me-1");

    // likeBtn.addEventListener("click", () => {
    //     if (!isLiked) {
    //         postData.reactions = postData.reactions || {};
    //         postData.reactions.likes = (postData.reactions.likes || 0) + 1;
    //         likeCount.textContent = `${postData.reactions.likes} stars`;
    //         reactionContainer.replaceChild(likedBtn, likeBtn);
    //         postData.reactions.liked = true;
    //         likeBtn.classList.add("liked");
    //         likedBtn.innerHTML = `<i class="bi bi-star-fill"></i>`;
    //         storage.save(`liked_${postId}`, true);
    //         isLiked = true;
    //     } else {
    //         postData.reactions.likes = Math.max(0, (postData.reactions.likes || 0) -1);
    //         likeCount.textContent = `${postData.reactions.likes} stars`;
    //         reactionContainer.replaceChild(likeBtn, likedBtn);
    //         likedBtn.innerHTML = `<i class="bi bi-star"></i>`;
    //         likeBtn.innerHTML = `<i class="bi bi-star"></i>`;
    //         storage.remove(`liked_${postId}`);
    //         isLiked = false;
    //     }
    //  });
    // // likedBtn.addEventListener("click", () => {
    // //     if (isLiked) {
    // //         postData.reactions.likes = Math.max(0, (postData.reactions.likes || 0) -1);
    // //         likeCount.textContent = `${postData.reactions.likes} stars`;
    // //         reactionContainer.replaceChild(likeBtn, likedBtn);
    // //         likedBtn.innerHTML = `<i class="bi bi-star"></i>`;
    // //         storage.remove(`liked_${postId}`);
    // //         isLiked = false;
    // //     }
    // // });

    // likedBtn.classList.toggle("clicked");
    reactionContainer.append(likeBtn, likeCount)

    //COMMENTS
    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("commentContainer", "hidden");
    // const commentsContent = document.createElement("div");
    // commentsContent.classList.add("d-block", "hidden")
    if (postData.comments && postData.comments.length > 0) {
        postData.comments.forEach(commentData => {
            const comment = document.createElement("div");
            comment.classList.add("comment");

            const commentAuthor = document.createElement("li");
            commentAuthor.textContent = commentData.author;
            commentsContainer.appendChild(commentAuthor)

            const commentBody = document.createElement("p");
            commentBody.textContent = commentData.body;
            commentsContainer.appendChild(commentBody)
        })
    } else {
        const noComments = document.createElement("p");
        noComments.classList.add("m-2", "fw-bolder", "text-uppercase") 
        noComments.textContent = "No comments yet.";
        commentsContainer.appendChild(noComments);
    }
    
    const openCommentsBtn = document.createElement("button");
    openCommentsBtn.classList.add("border-0", "text-underline", "m-2", "fs-4")
    openCommentsBtn.innerHTML = `Comments ${postData._count.comments} <i class="bi bi-arrow-down-short"></i>`;
    openCommentsBtn.addEventListener("click", () => {
        commentsContainer.classList.remove("hidden")
    })



    //POST ID LINK
    const postlink = document.createElement("a");
    postlink.href = `/feed/post/?id=${postData.id}`;
    postlink.classList.add("text-decoration-none", "bg-light", "mx-2", "my-2");

    postsHead.append(postLogo, postInfo)
    postlink.append(postsHead, postContent)
    post.append(postlink, reactionContainer, openCommentsBtn, commentsContainer)


    return post;
}

// RENDER ALL POSTS
export function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard));
};


