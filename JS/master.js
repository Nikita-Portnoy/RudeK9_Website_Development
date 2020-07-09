document.addEventListener("DOMContentLoaded", () => {
    const MenuBtn = document.getElementById("MenuBtn");
    const NavActions = document.getElementsByClassName("NavActions");

    MenuBtn.addEventListener("click", () => {
        MenuBtn.classList.toggle("Open");
        NavActions[0].classList.toggle("Open");
    })

    document.getElementsByTagName('main')[0].addEventListener("click", () => {
        if (MenuBtn.classList.contains("Open")) {
            MenuBtn.classList.remove("Open");
            NavActions[0].classList.remove("Open");
        }
    })
})