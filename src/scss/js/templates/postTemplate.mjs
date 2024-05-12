//import { authFetch } from "../api/authFetch.mjs";
import * as postActions from "../api/posts/index.mjs";
import * as storage from "../storage/index.mjs";

export function postCard(postData) {
    //POSTCARD CONTAINER
    const post = document.createElement("div");
    post.classList.add("post-content", "bg-light", "rounded", "m-auto", "my-3", "pb-3", "w-75", "justify-content-center");
    
    //POSTCARD IMAGE-LOGO/PROFILE-NAME
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postsHead = document.createElement("div");
    postsHead.classList.add("d-flex", "p-1", "border-bottom", "border-1", "border-primary");
    
    //POST ID LINK 
    const postlink = document.createElement("a");
    postlink.href = `/feed/post/?id=${postData.id}`;
    postlink.classList.add("d-block", "d-lg-flex", "text-decoration-none", "bg-light", "mx-2", "my-2", "border-bottom", "border-1", "border-primary");
    
    const postContent = document.createElement("div");
    postContent.classList.add("d-block", "border-bottom", "w-100");

    const postInfo = document.createElement("div");
    postInfo.classList.add("d-block", "ms-3");
   
   
    const postReCo = document.createElement("div");
    postReCo.classList.add("d-block", "ms-3");
    

    //SECTION 1/3

    //USERIMAGE
    if (postData.name && postData.avatar) {
        const userImage = document.createElement("img");
        userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
        userImage.src = postData.avatar ? postData.avatar: "../../../../images/moon.avif";
        userImage.alt = `Avatar Name ${postData.title}`;
        userImage.style.width = "60px";
        userImage.style.height = "60px";
        postLogo.append(userImage);

        // USERNAME
        const userName = document.createElement("h2");
        //userName.href = `/profile/?name=${postData.author.name}`;
        userName.innerHTML = `${postData.name}`;
        userName.classList.add("author-name", "fs-4", "fw-bolder", "mt-2");
        postInfo.append(userName)

    } else if (postData.author) {
        const userImage = document.createElement("img");
        userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
        userImage.src = postData.author && postData.author.avatar ? postData.author.avatar: "../../../../images/moon.avif";
        userImage.alt = `Avatar Name ${postData.title}`;
        userImage.style.width = "60px";
        userImage.style.height = "60px";
        postLogo.append(userImage);
    
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


    //SECTION 2/3

    // TITLE
    const title = document.createElement("h3");
    title.classList.add("fw-bolder", "fs-4", "m-1", "bg-secondary", "p-2");
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
    
    // TIME
    const time = document.createElement("time");
    time.setAttribute("date", postData.created);
    time.classList.add("ms-2", "fs-7", "fst-italic");
    time.innerHTML =  `${postData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
    postContent.append(time);
    
    postlink.append(postContent)

    // IMAGE
    if (postData.media) {
        const postImg = document.createElement("img");
        postImg.classList.add("postImg", "d-block", "m-auto", "justify-content-center", "p-2", "w-100");
        postImg.style.maxWidth = "100%";
        postImg.style.maxHeight = "250px";
        postImg.src = postData.media ? postData.media: "../../../../images/404-error.jpeg";
        postImg.style.backgroundColor = "$black";
        postImg.alt = `Image title ${postData.title}`;
        postlink.append(postImg);
    } 


    //SECTION 3/3

    //REACTIONS
    const reactionContainer = document.createElement("div");
    reactionContainer.classList.add("reactioncontainer");
 
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("reactionbtn", "like-button", "border-0", "fs-2", "bg-transparent", "ms-2");
    likeBtn.innerHTML = `<i class="bi bi-star"></i>`;

    const postId = postData.id;
    let isLiked = storage.load(`liked_${postId}`) === true;
    if (isLiked) {
        likeBtn.classList.add("liked");
    }

    const likeCount = document.createElement("span");
    likeCount.classList.add("reactioncount");
    let likeCountValue = isLiked ? postData._count.reactions + 1 : postData._count.reactions;
    likeCount.textContent = `${postData._count.reactions} Stars`;

    likeBtn.addEventListener("click", async () => {
        try {
            const reactionData = await postActions.postReacts("⭐", postId);
            console.log("Reaction added:", reactionData);
            if (!isLiked) {
                likeCountValue++;
                likeCount.textContent = `${likeCountValue + storage.load(`liked_${postId}`)} Stars`;
                likeBtn.classList.add("liked");
                likeBtn.innerHTML = `<i class="bi bi-star-fill"></i>`;
                postActions.postReacts("⭐", postData.id)
                storage.save(`liked_${postId}`, true);
                isLiked = true;
            } else if (isLiked) {
                likeCountValue--;
                likeCount.textContent = `${likeCountValue} Stars`;
                likeBtn.innerHTML = `<i class="bi bi-star"></i>`;
                likeBtn.classList.remove("liked")
                storage.remove(`liked_${postId}`);
                isLiked = false;
            }
        } catch (error) {
            console.error("Failed to react to post.", error);
        }

    });
    reactionContainer.append(likeBtn, likeCount)



    //COMMENTS


    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("commentsContainer", "hidden");
    const comment = document.createElement("div");
    comment.classList.add("comment", "d-block", "m-2", "border", "border-2", "border-secondary");
    const commentHeader = document.createElement("div");
    commentHeader.classList.add("commentHeader", "d-flex", "p-1", "border-bottom", "border-1", "border-secondary");
    const commentHead = document.createElement("div");
    commentHead.classList.add("d-block", "ms-1", "fs-7");
    const commentText = document.createElement("p");
    commentText.classList.add("d-block", "ms-1", "fs-7", "p-1");
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("commentContainer", "d-block");
  

    if (postData.comments && postData.comments.length > 0) {
        postData.comments.forEach(commentData => { 
            
            const commentImg = document.createElement("img");
            commentImg.src = postData.author.avatar;
            commentImg.alt = `Profile image of ${postData.author.name}`;
            commentImg.style.maxWidth = "40px";
            commentImg.style.maxHeight = "40px";
            commentImg.classList.add("rounded-circle");
                    
            const commentAuthorUrl = document.createElement("a");
            const commentAuthor = document.createElement("h3");
            commentAuthor.classList.add("fs-6", "mt-1")
            commentAuthor.textContent = postData.author.name;
            commentAuthorUrl.href = `/profile/?name=${postData.author.name}`;
            commentAuthorUrl.append(commentAuthor);
            commentHead.append(commentAuthorUrl);

            const commentDate = document.createElement("time");
            commentDate.classList.add("d-block", "mt-n2", "fs-7")
            commentDate.innerHTML = `${commentData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
            commentHead.append(commentDate)


            const commentBody = document.createElement("p");
            commentBody.classList.add("fs-4")
            commentBody.textContent = commentData.body;
            commentText.append(commentBody)
        
            commentHeader.append(commentImg, commentHead);
            comment.append(commentHeader, commentText)
            commentContainer.append(comment)

        }) 
    } else {

        const noComments = document.createElement("p");
        noComments.classList.add("d-flex", "m-2", "fw-bolder", "border", "py-3", "px-2") 
        noComments.textContent = `-No comments.`;
        comment.append(noComments);
    }

    


    
    
    //Comments - delete button
    const deleteButton = document.createElement("li");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "border-0");
    deleteBtn.textContent = "Delete comment";
    comment.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        postActions.removeComments(postData.id, postData.comments.id);
        comment.remove();
    });

    deleteButton.append(deleteBtn);





    //Comment-form
    function getProfileName() {
        const profile = storage.load("profile");
        console.log(profile)
        if (profile) {
            return profile.name;
        } else {
            return null;
        }
    }
    const commentsContent = document.createElement("div");
    commentsContent.classList.add("commentContent", "hidden")

    const commentForm = document.createElement("form");
    commentForm.classList.add("d-grid", "w-75", "ms-2")
    commentForm.id = "commentForm";

    const authorInput = document.createElement("input")
    authorInput.classList.add("my-1")
    authorInput.type = "text";
    authorInput.id = "author"
    authorInput.placeholder = "Your name";
    authorInput.readOnly = true;
    authorInput.disabled = true;
    authorInput.value = getProfileName();
    commentForm.append(authorInput);

    const commentTextarea = document.createElement("textarea");
    commentTextarea.classList.add("my-1")
    commentTextarea.id = "commentText";
    commentTextarea.placeholder = "Write your comment..";
    commentForm.append(commentTextarea);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn", "btn-secondary", "text-dark", "w-50", "my-1")
    submitBtn.id = "submit";
    submitBtn.innerHTML = "Submit";
    commentForm.append(submitBtn);

    commentForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const authorName = authorInput.value;
        const commentText = commentTextarea.value;
        const postId = postData.id;
 
        if (authorName.trim() === "" || commentText.trim() === "") {
            alert("Please fill all the fields");
            return;
        }
        const commentData = {
            author: authorName,
            body: commentText,
        }
        try {
            const response = await postActions.postComments(commentData, postId);
            console.log("Comment posted", response)
            commentTextarea.value = "";
        } catch (error) {
            console.error("Error posting comment", error)
        }
  
    }) 

    

    
    //Button / Toggle to open comments section
    const openCommentsBtn = document.createElement("button");
    openCommentsBtn.classList.add("border-0", "text-underline", "m-2", "fs-5")
    openCommentsBtn.innerHTML = `Comments ${postData._count.comments} <i class="bi bi-arrow-down-short"></i>`;
    openCommentsBtn.addEventListener("click", () => {
        commentsContainer.classList.toggle("hidden");
    }) 

    const openFormBtn = document.createElement("button");
    openFormBtn.classList.add("border-0", "fw-bold", "m-2", "fs-5", "bg-secondary")
    openFormBtn.innerHTML = `Add a comment <i class="bi bi-chat-right-quote"></i>`;
    openFormBtn.addEventListener("click", () => {
        commentsContent.classList.toggle("hidden");
    })

    commentsContent.append(commentForm)
    commentsContainer.append(openFormBtn, commentContainer, commentsContent);
    

  
    postsHead.append(postLogo, postInfo)
    post.append(postsHead, postlink, reactionContainer, openCommentsBtn, commentsContainer)


    return post;
}

// RENDER ALL POSTS
export function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard));
};


