import * as listeners from "./handlers/index.mjs";
import * as template from "./templates/index.mjs";
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
        case "/feed/post/edit/":
          listeners.setUpdatePostListener();
          break;
        case "/feed/post/create/":
          listeners.setCreatePostListener();
          break;
    }
}

