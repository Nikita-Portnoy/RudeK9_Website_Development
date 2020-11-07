document.addEventListener("DOMContentLoaded", () => {
    // Toggle Buttons Change Style
    document.querySelectorAll("button.toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        })
    })

    // Mobile Nav Menu Button - Expands Mobile Nav Menu
    document.getElementById("nav-toggle").addEventListener("click", () => {
        document.getElementsByClassName("nav-menu")[0].classList.toggle("active");
    })
    // Main onClick - Closes Expanded Mobile Menu
    document.getElementsByTagName('main')[0].addEventListener("click", () => {
        const MobileMenu = document.getElementsByClassName("nav-menu")[0];
        if (MobileMenu.classList.contains("active")) {
            document.getElementById("nav-toggle").classList.remove("active");
            MobileMenu.classList.remove("active");
        }
    })
})