export function setLogOutListener() {
    const logOut = document.querySelector("#logout");
    
    if (logOut) {
        logOut.addEventListener("click", function () {
            if (confirm("Are you sure you want to sign out?")) {
                localStorage.clear();
                window.location.href = "/profile/login/";
            }
        });
    }
}