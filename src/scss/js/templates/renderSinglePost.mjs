import { getPost } from "../api/posts/get.mjs";
import { postCard } from "./postTemplate.mjs";

//Render a single post
export async function renderSinglePostCard() {
  console.log("Single post page");
  const url = new URL(location.href);
  const postId = url.searchParams.get("id");
  try {
    const singlePost = await getPost(postId);
    if (singlePost) {
      const singlePostContainer = document.querySelector("#singlePost");
      singlePostContainer.classList.add("border", "mw-75", "my-5")
      singlePostContainer.style.maxWidth = "700px";
      const backBtnSection = document.createElement("div")
      const backBtn = document.createElement("li");
      backBtn.innerHTML = `<button class="btn btn-primary d-flex fs-3 mt-3 mb-5 text-uppercase m-auto text-center border-light" onclick="history.back()">Cancel</button>`;
 
      backBtnSection.appendChild(backBtn);
      singlePostContainer.appendChild(postCard(singlePost), backBtnSection)
    } else {
      console.error("This ID was not found:", postId)
    }
  } catch (error) {
    console.error("Failed fetching ID")
  }
} 

