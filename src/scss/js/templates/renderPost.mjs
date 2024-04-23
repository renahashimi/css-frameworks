import { postCard } from "./post.mjs";


// Render a post
export function renderPostCard(postData, parent) {
    parent.append(postCard(postData))
};


// async function testTemplate() {
//     const posts = await postActions.getPosts();
//     const post = posts[45]; 
//     const container = document.querySelector("#post");
//     templates.postCard(post, container);
//   }
  

