import { load } from "../storage/index.mjs";

export async function profileContent(profileData) {
    
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("border-bottom", "border-3", "border-primary")

    //PAGE NAME
    const pageName = document.createElement("h1");
    pageName.classList.add("text-uppercase", "m-auto");
    pageName.textContent = `${profileData.name} Profile`;

    const profileInfo = document.createElement("div");
    profileInfo.classList.add("bg-white")
    
    //NAME
    const myName = document.createElement("h1");
    myName.classList.add("d-flex", "fw-bolder", "justify-content-center");
    myName.textContent = `${profileData.name}`;
    
    //EMAIL
    const myEmail = document.createElement("h2");
    myEmail.classList.add("d-flex", "fs-6", "justify-content-center");
    myEmail.innerHTML = `${profileData.email}`;
    
    //POSTS COUNT
    const myPostCount = document.createElement("h2");
    myPostCount.classList.add("d-flex", "fs-6", "justify-content-center", "fw-bolder");
    myPostCount.innerHTML = `POSTS: ${profileData._count.posts}`;

    //BANNER / BACKGROUND
    
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("container-fluid", "object-fit-cover", "p-0");
    bannerImg.style.width = "100%";
    bannerImg.style.height = "125px";
    if (profileData.banner) {
        bannerImg.src = profileData.banner;
        bannerImg.alt = `Banner of: ${profileData.name}`;
    } else {
        return [];
    }

    //EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "Edit profile";
    //const userName = JSON.parse(localStorage.getItem("profile")).name;
    //location.href = /post/edit/;
    editBtn.classList.add("btn", "fs-4", "top-1", "end-0", "p-2", "py-1", "m-2", "bg-white", "border-secondary", "position-absolute", "rounded-circle");
    editBtn.innerHTML = `<i class="bi bi-pencil-square"></i>`;

    editBtn.addEventListener("click", () => {
        window.location.href = `../../../../profile/edit/`;
    });

    const profileHead = document.createElement("div");
    profileHead.classList.add("d-flex", "m-auto", "justify-content-evenly", "bg-white", "mt-n3", "position-relative", "rounded-4")

    //FOLLOWERS
    const followersSectíon = document.createElement("div");
    followersSectíon.classList.add("d-block", "mt-2");

    const followersText = document.createElement("h3");
    followersText.innerHTML = "FOLLOWERS";
    followersText.classList.add("fs-7", "fw-bolder");
    const followersNumber = document.createElement("p");
    followersNumber.innerHTML = `${profileData._count.followers}`;
    followersNumber.classList.add("d-flex","fs-4", "mt-n2", "justify-content-center");
    followersSectíon.append(followersText, followersNumber);
    profileHead.append(followersSectíon);

    //AVATAR
    const avatarImg = document.createElement("img")
    avatarImg.classList.add("avatarImg", "object-fit-cover", "rounded-circle", "mt-n5", "border", "border-3", "border-white");
    avatarImg.style.width = "100px";
    avatarImg.style.height = "100px";
    if (profileData.avatar){
        avatarImg.src = profileData.avatar;
        avatarImg.alt = `Avatar of: ${profileData.name}`;
    } else {
        return [];
    }    
    profileHead.append(avatarImg)

    //FOLLOWING
    const followingSectíon = document.createElement("div");
    followingSectíon.classList.add("d-block", "mt-2");

    const followingText = document.createElement("h3");
    followingText.innerHTML = "FOLLOWING";
    followingText.classList.add("fs-7", "fw-bolder")
    const followingNumber = document.createElement("p");
    followingNumber.innerHTML = `${profileData._count.following}`;
    followingNumber.classList.add("d-flex","fs-4", "mt-n2", "justify-content-center");
    followingSectíon.append(followingText, followingNumber);
    profileHead.append(followingSectíon);

    //BUTTON
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-center", "my-3")
    
    //Follow
    const followBtn = document.createElement("button");
    followBtn.type = "button";
    followBtn.innerHTML = `FOLLOW <i class="bi bi-plus-lg"></i>`;
    followBtn.classList.add("me-1", "fs-6", "fw-bolder", "bg-white", "rounded");
    buttonContainer.append(followBtn)

    //Message  
    const messageBtn = document.createElement("button");
    messageBtn.type = "button";
    messageBtn.innerHTML = `MESSAGE <i class="bi bi-envelope-heart"></i>`;
    messageBtn.classList.add("ms-1", "fs-6", "fw-bolder", "bg-white", "rounded");

    buttonContainer.append(messageBtn)
   
     
    //POSTS


    const postsContainer = document.querySelector("#profilePosts");
    const myPosts = profileData.posts;
    console.log(myPosts);



    

    profileInfo.append(myName, myEmail, myPostCount);
   // profileBox.append(myInfo)
    profileContainer.append(pageName, bannerImg, editBtn, profileHead, profileInfo, buttonContainer, postsContainer);

    return profileContainer;

}