document.addEventListener("DOMContentLoaded", () => {
    // Init ClipboardJS
    new ClipboardJS('.clipboard-copy');

    // Location Button - Animate onClick
        document.getElementById('address-orange').addEventListener("click", () => {
            let Btn = document.getElementById('address-orange');
            Btn.classList.remove("animate");
            void Btn.offsetHeight;
            Btn.classList.add("animate");
        })
})