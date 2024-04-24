import * as listeners from "./handlers/index.mjs";
import * as postActions from "./api/posts/index.mjs";
import * as template from "./templates/index.mjs";
 

export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/register/":
          listeners.registerFormListener();
          break;
        case "/profile/login/":
          listeners.loginFormListener();
          break;
        case "/pages/posts/":
          // template.renderPostList();
          break;
        case "/pages/post/":
          break;
    }

  }


// post.getPost(11847).then(console.log);
// post.getPosts().then(console.log);

async function renderAllPosts() {
  const posts = await postActions.getPosts();
  const container = document.querySelector("#posts");
  template.renderPostList(posts, container);
console.log(posts)

}
renderAllPosts();



// async function testTemplate() {
//   const posts = await postActions.getPosts();
//   const post = posts[45]; 
//   const container = document.querySelector("#post");
//   templates.postCard(post, container);
// }

// testTemplate();

