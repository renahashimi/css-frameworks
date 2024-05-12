
// const commentsContainer = document.createElement("div");
// commentsContainer.classList.add("commentContainer", "hidden");
// const comment = document.createElement("div");
// comment.classList.add("comment", "ms-3");
// const commentHeader = document.createElement("div");
// commentHeader.classList.add("commentHeader", "d-flex");
// const commentHead = document.createElement("div");
// commentHead.classList.add("d-block");
        

// if (postData.comments && postData.comments.length > 0) {
//     postData.comments.forEach(commentData => { 
//         const commentImg = document.createElement("img");
//         commentImg.src = postData.author.avatar;
//         commentImg.alt = `Profile image of ${postData.author.name}`;
//         commentImg.style.maxWidth = "50px";
//         commentImg.style.maxHeight = "50px";
//         commentImg.classList.add("rounded-circle");
//         commentHeader.append(commentImg);
                
//         const commentAuthorUrl = document.createElement("a");
//         const commentAuthor = document.createElement("h3");
//         commentAuthor.textContent = postData.author.name;
//         commentAuthorUrl.href = `/profile/?name=${postData.author.name}`;
//         commentAuthorUrl.append(commentAuthor);
//         commentHead.append(commentAuthorUrl);

        
//         const commentDate = document.createElement("time");
//         commentDate.innerHTML = `${commentData.created}`;
//         commentHead.append(commentDate);

//         const commentBody = document.createElement("p");
//         commentBody.textContent = commentData.value;
//         comment.append(commentBody);

//         comment.append(commentHeader)