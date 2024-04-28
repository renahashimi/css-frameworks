import * as listeners from "./handlers/index.mjs";
import * as template from "./templates/index.mjs";
import * as postActions from "./api/posts/index.mjs";

// import * as profile from "./pages/profile/index.mjs"

export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/register/":
          listeners.registerFormListener();
          break;
        case "/profile/login/":
          listeners.loginFormListener();
          break;
          case "/pages/profile/":
          // profile
          break;
        case "/feed/posts/":
          template.renderAllPosts();
          break;
        // case "/feed/post/":
        //   template.renderPostCard();
        //   break;
        case "/feed/post/edit/":
          listeners.setUpdatePostListener();
          break;
        case "/feed/post/create/":
          listeners.setCreatePostListener();
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



