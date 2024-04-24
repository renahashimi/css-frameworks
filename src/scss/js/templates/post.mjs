export function postCard(postData) {

    const post = document.createElement("div");
    post.classList.add("post");

    // Title
    const title = document.createElement("h2")
    title.classList.add("userTitle");
    title.innerHTML = postData.title;
    
    // USERNAME
    const userName = document.createElement("h3");
    userName.innerHTML = `@${postData.id}`;
    userName.classList.add("userTime")

    // TIME
    const time = document.createElement("h4")
    time.innerHTML = postData.created;


    // IMAGE
    if (postData.media) {
        const img = document.createElement("img");
        img.classList.add("postImg");
        img.src = postData.media;
        img.alt = `Image Name ${postData.title}`;
        post.appendChild(img);
    } 

    // TEXT 
    const contentText = document.createElement("h2");
    contentText.classList.add("contentText");
    contentText.innerHTML = postData.body;

    // TAGS 
    if (postData.tags && postData.tags.lenght > 0) {
       const tags = document.createElement("div")
       tags.classList.add("tags");
       postData.tags.foreach(tag => {
        const tagElement = document.createElement("p");
        tagElement.innerHTML = tag;
       })
       tags.appendChild(tagElement);
       post.appendChild(tags);
    }

    post.append(title, userName, time, contentText)

    // const button = document.createElement("button");
    // post.append(button);
    // button.addEventListener("click", () => console.log(postData))

    return post;
  
    
}
