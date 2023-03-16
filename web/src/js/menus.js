const menuToggle = () => {
   
    const menus = document.querySelectorAll(".menu");
    const overlay = document.querySelector(".modal-overlay");

    menus.forEach((menu) => {
        const button = menu.getElementsByClassName("open-menu")[0];
        const content = menu.getElementsByClassName("menu-content")[0];
        const close = menu.getElementsByClassName("close-menu")[0];

        button.onclick = () => {
            content.classList.add("show");
            button.setAttribute("aria-expanded", "true");
            overlay.classList.add("show");
        }

        close.onclick = () => {
            content.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
            overlay.classList.remove("show");
        }

        // overlay.onclick = () => {
        //     content.classList.remove("show");
        //     button.setAttribute("aria-expanded", "false");
        //     overlay.classList.remove("show");
        // }
       
    });
}

document.ready = menuToggle();