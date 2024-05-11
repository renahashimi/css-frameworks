import * as listeners from "./handlers/index.mjs";
import * as template from "./templates/index.mjs";
//import * as postActions from "./api/posts/index.mjs";

export default function router() {
    const path = location.pathname;
    switch (path) {
        case "/profile/register/":
          listeners.registerFormListener();
          break;
        case "/profile/login/":
          listeners.loginFormListener();
          break;
        case "/profile/":
          template.renderProfile();
          listeners.setLogOutListener();
          break;
          case "/profile/edit/":
          listeners.setUpdateProfileListener();
          listeners.setLogOutListener();
          break;
        case "/feed/posts/":
          template.renderAllPosts();
          listeners.setLogOutListener();
          listeners.searchPost();
          break;
        case "/feed/post/":
          template.renderSinglePostCard();
          break;
        case "/feed/post/create/":
          listeners.setCreatePostListener();
          listeners.setLogOutListener();
          break; 
        case "/feed/post/edit/":
          listeners.setUpdatePostListener();
          listeners.setLogOutListener();
          break;
    }
}



// // testing function //
// async function testTemplate() {
//   const posts = await postActions.getPosts();
//   const post = posts[11976]; 
//   const container = document.querySelector("#posts");
//   template.renderAllPosts(posts, container);
// }

// testTemplate();
// console.log(typeof id);



