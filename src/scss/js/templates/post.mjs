export function postCard(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = postData.title;
    
    // const button = document.createElement("button");
    // post.append(button);
    // button.addEventListener("click", () => console.log(postData))
    
    return post;
}

