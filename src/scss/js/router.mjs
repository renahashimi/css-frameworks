import * as listeners from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs"

export default function router() {
    const path = location.pathname;

    switch (path) {
        case  "/profile/register/":
          listeners.setRegisterFormListener();
          break;
        case  "/profile/login/":
          listeners.setLoginFormListener();
          break;
        case  "/profile/post/":
          listeners.();
          break;
    }
}

