export function profileContent(profileData) {
    
    const profileContainer = document.createElement("div");
     console.log(profileContainer)

    //PAGE NAME
    const pageName = document.createElement("h1");
    pageName.classList.add("text-uppercase", "m-auto");
    pageName.innerHTML = "My Profile";

    const myProfile = document.createElement("div");
    
    //NAME
    const myName = document.createElement("h2");
    pageName.classList.add("text-uppercase", "m-auto");
    pageName.textContent = `Name: ${profileData.name}`;
    console.log(profileData.name)
    
    //EMAIL
    const myEmail = document.createElement("h2");
    myEmail.classList.add("myInfo");
    myEmail.innerHTML =`Email: ${profileData.email}`;

    // //BANNER / BACKGROUND
    // const bannerImg = document.createElement("img");
    // bannerImg.classList.add("profileBackImg");
    // if (profileData.banner) {
    //     bannerImg.src = profileData.banner;
    //     bannerImg.alt = `Banner of: ${profileData.name}`;
    // } else {
    //     return [];
    // }

    // //AVATAR
    // const avatarImg = document.createElement("img")
    // avatarImg.classList.add("avatarImg");
    // if (profileData.avatar){
    //     avatarImg.src = profileData.avatar;
    //     avatarImg.alt = `Avatar of: ${profileData.name}`;
    // } else {
    //     img.src = "/images/moon.avif"
    // }

    myProfile.append(myName, myEmail);
    profileContainer.append(pageName, myProfile);
    console.log(profileContainer);

    //return profileContainer;

}
