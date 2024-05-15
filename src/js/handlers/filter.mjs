import { getPosts } from "../api/posts/get.mjs";
import { renderAllPosts } from "./index.mjs";


const postsContainer = document.querySelector("#posts");

export async function filterPosts() {
    let posts = await getPosts();
 
    const filterAllFeeds = document.getElementById("allFeeds");
    const filterByDate = document.getElementById("byDate");
    const filterByMedia = document.getElementById("byMedia");
    postsContainer.innerHTML = "";

   filterAllFeeds.addEventListener("change", async () => {
        if (filterAllFeeds.checked) {
            renderAllPosts(posts, postsContainer);
        }
    })
    filterByDate.addEventListener("change", () => {
        if (filterByDate.checked) {
            postsContainer
           posts.sort((a, b) => new Date(a.created) - new Date(b.created));
            console.log("DATE", posts)
            renderAllPosts(posts, postsContainer);   
        }
    })
    filterByMedia.addEventListener("change", () => {
        if (filterByMedia.checked) {
            postsContainer.innerHTML = ""; 
            const mediaPosts = posts.filter(post => post.media);
            renderAllPosts(mediaPosts, postsContainer);
            console.log("MEDIA", mediaPosts);
        }
    });

}
//     renderAllPosts(posts);
// }
//export async function filterPosts() {
// export function filterByDate(posts, container) {
//     const byDate = document.getElementById("byDate");
//     byDate.addEventListener("change", () => {
//         postsContainer.innerHTML = "";
//         if (byDate.checked) {
//             const postFilterByDate = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
//             renderAllPosts(postFilterByDate, container);  
//         } else {
//             renderAllPosts(posts, container)
//         }
//     })
// }

// export function filterByMedia(posts, container) {
//     const byMedia = document.getElementById("byMedia");
//     postsContainer.innerHTML = "";
//     byMedia.addEventListener("change", () => {
//         if (byMedia.checked) {
//             const postFilterByMedia = posts.filter(post => post.media);
//             renderAllPosts(postFilterByMedia, container); 
//             console.log(postFilterByMedia) 
//         } else {
//             renderAllPosts(posts, container)
//         }
//     })
// }


// function filterByComments(posts) {
//     const postFilterByComments = posts.filter(post => post.comments && post.comments.length > 0);
//     return postFilterByComments;
// }

// function filterByReaction(posts) {
//     const postFilterByReaction = posts.filter(post => post.reactions && post.reactions.length > 0);
//     return postFilterByReaction;
// }


    // const renderFilterPosts = (filteredPosts) => {
    //     postsContainer.innerHTML = ""; 
    //     renderAllPosts(filteredPosts, postsContainer)
    // };

    // checkboxes.forEach(checkbox => {
    //     checkbox.addEventListener("change", async () => {
    //         if(checkbox.checked) {
    //             switch (checkbox.id) {
    //                 case "allFeeds":
    //                     posts = await getPosts();
//     //                     break;
//     //                 case "byDate":

//     //                     posts.sort((a, b) => new Date(a.created) - new Date(b.created));                        
//     //                     console.log("date", posts)  

//     //                     renderAllPosts(posts)

//     //                     break;
//     //                 case "byMedia":
//     //                 posts.filter((post) => post.media !== "" && post.media !== null);
//     //                 break;
//     //                 default:
//     //                     break;
                    
//     //             }
//     //             renderFilterPosts(posts)
//     //         }

//     //     })


//     // })
//     // //let filteredPosts;
    
        
        
//     //     case "reactions":
//     //         filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
//     //         break;
//     //     default:
//     //         filteredPosts = posts;
//     // }
//    // renderPostList(filteredPosts, postsContainer)
       
//    filterAllFeeds.addEventListener("change", async () => {
//         if (filterAllFeeds.checked) {
//             posts = await getPosts();
//             renderFilterPosts();            
//         }
//     })
//     filterByDate.addEventListener("change", () => {
//         if (filterByDate.checked) {
//             posts.sort((a, b) => new Date(a.created) - new Date(b.created));
//             console.log("DATE", posts)

//             renderAllPosts(posts);   
//         }
//     })
//     filterByMedia.addEventListener("change", () => {
//         if (filterByMedia.checked) {
//             postsContainer.innerHTML = ""; 

//             const mediaPosts = posts.filter(post => post.media);
//             renderAllPosts(mediaPosts, postsContainer);
//             console.log("MEDIA", mediaPosts);
//         }
//     })
   


    


//else if (seletedValue === "comments") {
    //     filteredPosts = posts.filter(post => post.comments.length > 0);
    // } else if (seletedValue === "reactions"){
    //     filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
    //     return filteredPosts;
    // } else {
    //     filteredPosts = posts;
    // }



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




// function filterByMedia(posts) {
//     const postFilterByMedia = posts.filter(post => post.media);
//     return postFilterByMedia;   
// }

// export function filterByDate(posts) {
//     const postFilterByDate = posts.sort((a, b) => 
//     new Date(a.created) - 
//     new Date(b.created));
//     console.log(postFilterByDate)
//     return postFilterByDate;   
// }

// function filterByComments(posts) {
//     const postFilterByComments = posts.filter(post => post.comments && post.comments.length > 0);
//     return postFilterByComments;
// }

// function filterByReaction(posts) {
//     const postFilterByReaction = posts.filter(post => post.reactions && post.reactions.length > 0);
//     return postFilterByReaction;
// }



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



let filteredPosts;
switch (seletedValue) {
    case "date":
        filteredPosts = posts.slice().sort((a, b) => 
        new Date(a.created) - 
        new Date(b.created));
        renderAllPosts(filteredPosts, container)
        break;
    case "comments":
        filteredPosts = posts.filter(post => post.comments.length > 0);
        break;
    case "reactions":
        filteredPosts = posts.filter(post => post.reactions && post.reactions.length > 0);
        break;
    default:
        filteredPosts = posts;
}
renderPostList(filteredPosts, postsContainer)*/