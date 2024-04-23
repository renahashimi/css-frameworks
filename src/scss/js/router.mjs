import * as listeners from "./handlers/index.mjs";
import * as postActions from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";


export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/register/":
          listeners.registerFormListener();
          break;
        case "/profile/login/":
          listeners.loginFormListener();
          break;
        case "/pages/posts/index.html":
          templates.renderAllPosts();
          break;
        case "/pages/post/":
          // post.getPosts();
          // post.getPost();
          // post.createPost();
          // post.updatePost();
          // post.removePost();
          break;
    }

  }

// post.getPost(11847).then(console.log);
// post.getPosts().then(console.log);

// async function testTemplate() {
//   const posts = await postActions.getPosts();
//   const post = posts[45]; 
//   const container = document.querySelector("#post");
//   templates.postCard(post, container);
// }

//testTemplate();

console.log("Yeey")