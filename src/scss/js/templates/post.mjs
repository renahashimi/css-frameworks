export function postCard(postData) {

    const post = document.createElement("div");
    post.classList.add("postContainer");
    const postsHead = document.createElement("div");
    postsHead.classList.add("postHead");
    const postContent = document.createElement("div");
    postContent.classList.add("postContent");
    const postLogo = document.createElement("div");
    postLogo.classList.add("postLogo");
    const postInfo = document.createElement("div");
    postInfo.classList.add("postInfo");
    
    //USERIMAGE
    const userImage = document.createElement("img");
    if (postData.media) {
        userImage.classList.add("postUserImg");        
        userImage.src = postData.media;
        userImage.alt = `Image Name ${postData.title}`;
        postLogo.appendChild(userImage);
    } else {
        userImage.src = "../../../../images/abstract1.jpeg"
    }
    
    // USERNAME
    const userName = document.createElement("h3");
    userName.innerHTML = `@${postData.id}`;
    userName.classList.add("postNumber");


    // TIME
    const time = document.createElement("time");
    time.setAttribute("date", postData.created);
    time.classList.add("postTime");
    time.innerHTML =  `${postData.created.match(/^\d{4}-\d{2}-\d{2}/)}`;
    

    // Title
    const title = document.createElement("h2");
    title.classList.add("postTitle");
    title.innerHTML = postData.title;

    // TEXT 
    const contentText = document.createElement("h2");
    contentText.classList.add("postText");
    contentText.innerHTML = postData.body;
  
    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("postImg");
        img.src = postData.media;
        img.alt = `Image Name ${postData.title}`;
        postContent.appendChild(img);
    } 

    // TAGS 
    if (postData.tags && postData.tags.lenght > 0) {
        const tags = document.createElement("div")
        tags.classList.add("tags");
        postData.tags.foreach(tag => {
            const tagElement = document.createElement("p");
            tagElement.innerHTML = tag;
        })
        tags.appendChild(tagElement);
        postContent.appendChild(tags);
    }
    
    postInfo.append(userName, time)
    postsHead.append(postLogo, postInfo)
    postContent.append(title, contentText);
    post.append(postsHead, postContent)

    // const button = document.createElement("button");
    // post.append(button);
    // button.addEventListener("click", () => console.log(postData))
    
    return post;
  
    
}
