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
      singlePostContainer.appendchild(postCard(singlePost))
    } else {
      console.error("This ID was not found:", postId)
    }
  } catch (error) {
    console.error("Failed fetching ID")
  
  }

} 