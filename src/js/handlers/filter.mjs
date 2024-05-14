import { getPosts } from "../api/posts/get.mjs";
import { renderPostList } from "../templates/postTemplate.mjs";
import { renderAllPosts } from "../templates/renderPosts.mjs";

export async function filterPosts(posts) {
    const container = document.querySelector("#posts");

    const filterByDate = document.getElementById("byDate")

    filterByDate.addEventListener("change", () => {
        container.innerHTML = ''; 
        
    if (filterByDate.checked) {
        const filteredDate =  filterByDate(posts);
        renderAllPosts(filteredDate, container);

    } 



    
//else if (seletedValue === "comments") {
    //     filteredPosts = posts.filter(post => post.comments.length > 0);
    // } else if (seletedValue === "reactions"){
    //     filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
    //     return filteredPosts;
    // } else {
    //     filteredPosts = posts;
    // }
    });

}


    // const filterSelect = document.querySelector("#filterSelect");
    // const postsContainer = document.querySelector("#posts");
    // const posts = await getPosts();
    // console.log(typeof posts)





// }export async function renderAllPostsByDate() {
//     const posts = await postActions.getPosts();
//     const container = document.querySelector("#posts");
//     handler.searchPost("posts");
    
//     const postFilterByDate = posts.sort((a, b) => 
//         new Date(a.created) - 
//         new Date(b.created));

//     renderPostList(postFilterByDate, container);

// };




function filterByMedia(posts) {
    const postFilterByMedia = posts.filter(post => post.media);
    return postFilterByMedia;   
}

export function filterByDate(posts) {
    const postFilterByDate = posts.sort((a, b) => 
    new Date(a.created) - 
    new Date(b.created));
    console.log(postFilterByDate)
    return postFilterByDate;   
}

function filterByComments(posts) {
    const postFilterByComments = posts.filter(post => post.comments && post.comments.length > 0);
    return postFilterByComments;
}

function filterByReaction(posts) {
    const postFilterByReaction = posts.filter(post => post.reactions && post.reactions.length > 0);
    return postFilterByReaction;
}



/*
<input class="form-check-input border-light" type="checkbox" role="switch" id="allFeeds" checked>
<label class="form-check-label" for="allFeeds">
All feeds
</label>
</div>
<div class="form-check mx-1">
<input class="form-check-input border-light" type="checkbox" role="switch" id="byDate">
<label class="form-check-label" for="byDate">
Date
</label>
</div>
<div class="form-check mx-1">
<input class="form-check-input border-light" type="checkbox" role="switch" id="byMedia">
<label class="form-check-label" for="byMedia">
Media
</label>
</div>
</div>
</div>



// let filteredPosts;
// switch (seletedValue) {
//     case "date":
//         filteredPosts = posts.slice().sort((a, b) => 
//         new Date(a.created) - 
//         new Date(b.created));
//         renderAllPosts(filteredPosts, container)
//         break;
//     case "comments":
//         filteredPosts = posts.filter(post => post.comments.length > 0);
//         break;
//     case "reactions":
//         filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
//         break;
//     default:
//         filteredPosts = posts;
// }
// renderPostList(filteredPosts, postsContainer)*/