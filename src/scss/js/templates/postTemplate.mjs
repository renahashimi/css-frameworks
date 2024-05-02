import { removePost } from "../api/posts/delete.mjs";

export function postCard(postData) {

    const post = document.createElement("div");
    post.classList.add("bg-light", "rounded", "my-3", "mx-3", "pb-3");
    const postsHead = document.createElement("div");
    postsHead.classList.add("d-flex", "border-bottom", "border-3", "border-primary", "p-1");
    const postContent = document.createElement("div");
    postContent.classList.add("postContent");
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postInfo = document.createElement("div");
    postInfo.classList.add("d-block", "ms-3");
    
    //USERIMAGE
    const userImage = document.createElement("img");
    userImage.classList.add("rounded-circle", "object-fit-cover", "m-1");        
    userImage.src = postData.author.avatar ? postData.author.avatar: "../../../../images/moon.avif";
    userImage.alt = `Avatar Name ${postData.title}`;
    userImage.style.width = "60px";
    userImage.style.height = "60px";
    postLogo.appendChild(userImage);

    // USERNAME
    const userName = document.createElement("h2");
    userName.innerHTML = `${postData.author.name}`;
    userName.classList.add("fs-4", "fw-bolder", "mt-2");
    postInfo.append(userName)


    // USERNAME-ID
    const userNameId = document.createElement("h3");
    userNameId.innerHTML = `@${postData.id}`;
    userNameId.classList.add("fs-6", "mt-n1", "text-secondary");
    postInfo.append(userNameId)

    //DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteButton", "fs-1");
    deleteBtn.innerHTML = `<i class="bi bi-archive"></i>`;

    deleteBtn.addEventListener("click", function(e) {
        if (e.target.classList.contains("deleteButton")) {
            const postId = e.target.dataset.postId;
            alert("Your post is now deleted");
            removePost(postId);
        }
    });
    postInfo.append(deleteBtn)

    // TIME
    const time = document.createElement("time");
    time.setAttribute("date", postData.created);
    time.classList.add("ms-2", "fs-7", "fst-italic");
    time.innerHTML =  `${postData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
    
    // Title
    const title = document.createElement("h3");
    title.classList.add("fw-bolder", "fs-4", "m-2");
    title.innerHTML = postData.title;

    // TEXT 
    const contentText = document.createElement("h4");
    contentText.classList.add("m-2", "fs-5");
    contentText.innerHTML = postData.body;
  
    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("d-block", "m-auto", "justify-content-center", "p-2");
        img.style.maxWidth = "98%";
        img.style.maxHeight = "300px";
        img.src = postData.media ? postData.media: "../../../../images/geometrical.jpeg";
        img.style.backgroundColor = "$black";
        img.alt = `Image title ${postData.title}`;
        postContent.append(img);
    } 

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
    
    postsHead.append(postLogo, postInfo)
    postContent.append(time, title, contentText);
    post.append(postsHead, postContent)

    // const button = document.createElement("button");
    // post.append(button);
    // button.addEventListener("click", () => console.log(postData))
    
    return post;
}

// Render all posts
export function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard));
};

