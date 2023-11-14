const menuToggle = () => {

    const menus = document.querySelectorAll(".menu");
    const overlay = document.querySelector(".modal-overlay");

    menus.forEach((menu) => {
        const button = menu.getElementsByClassName("open-menu")[0];
        const content = menu.getElementsByClassName("menu-content")[0];
        const close = menu.getElementsByClassName("close-menu")[0];

        button.onclick = () => {
            manageHeader("open");
            content.classList.add("show");
            button.setAttribute("aria-expanded", "true");
            overlay.classList.add("show");
            button.setAttribute("aria-hidden", "true");
            button.setAttribute("tabindex", "-1");
            close.focus();
        }

        close.onclick = () => {
            manageHeader("close");
            content.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
            overlay.classList.remove("show");
            button.removeAttribute("aria-hidden");
            button.removeAttribute("tabindex");
            button.focus();
        }

    });

    const manageHeader = (action) => {
        const header = document.querySelector("header");

        if (action == "open") {
            header.style.position = "initial";
        }
        else if (action == "close") {
            header.style.position = "sticky";
        }
    }
}

    document.ready = menuToggle();