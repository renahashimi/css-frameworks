export function profileContent(profileData) {
    
    const profileContainer = document.querySelector("#profile");
    
    // //GET INFO FROM LOCALSTORAGE
    // let name = localStorage.getItem("name");
    // let email = localStorage.getItem("email");
    // let avatar = localStorage.getItem("avatar");
    // let banner = localStorage.getItem("banner");
    
    //PAGE NAME
    const pageName = document.createElement("h1");
    pageName.classList.add("text-uppercase", "m-auto");
    pageName.innerHTML = "My Profile";
    
    //NAME
    const myName = document.createElement("h2");
    pageName.classList.add("text-uppercase", "m-auto");
    pageName.innerHTML = profileData.name;
    
    //EMAIL
    const myEmail = document.createElement("h2");
    myEmail.classList.add("myInfo");
    //myEmail.innerHTML = ;

    //BANNER / BACKGROUND
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("profileBackImg");
    if (profileData.banner) {
        bannerImg.src = profileData.banner;
        bannerImg.alt = `Banner of: ${profileData.name}`;
    } else {
        return [];
    }

    //AVATAR
    const avatarImg = document.createElement("img")
    avatarImg.classList.add("avatarImg");
    if (profileData.avatar){
        avatarImg.src = profileData.avatar;
        avatarImg.alt = `Avatar of: ${profileData.name}`;
    } else {
        img.src = "/images/moon.avif"
    }

    profileContainer.append(pageName, myName, myEmail, bannerImg, avatarImg)
    
    return profileContainer;
}
