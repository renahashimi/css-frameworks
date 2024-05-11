export function setLogOutListener() {
    const logOut = document.querySelector("#logout");
    const logOut2 = document.querySelector("#logOut");
    if ((logOut) && (logOut2)) {
        logOut.addEventListener("click", function () {
            if (confirm("Are you sure you want to sign out?")) {
                localStorage.clear();
                window.location.href = "/profile/login/";
            }
        });
    }
}