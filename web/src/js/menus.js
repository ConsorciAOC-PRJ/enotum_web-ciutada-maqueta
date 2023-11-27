const menuToggle = () => {

    const menus = document.querySelectorAll(".menu");
    const overlays = document.querySelectorAll(".modal-overlay");

    menus.forEach((menu) => {
        const button = menu.getElementsByClassName("open-menu")[0];
        const content = menu.getElementsByClassName("menu-content")[0];
        const close = menu.getElementsByClassName("close-menu")[0];

        button.onclick = () => {
            manageBodyOverflow("open");
            content.classList.add("show");
            button.setAttribute("aria-expanded", "true");

            overlays.forEach(function (overlay) {
                overlay.classList.add("show");
            });

            button.setAttribute("aria-hidden", "true");
            button.setAttribute("tabindex", "-1");
            close.focus();
        }

        close.onclick = () => {
            // manageHeader("close");
            manageBodyOverflow("close");
            content.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
            overlays.forEach(function (overlay) {
                overlay.classList.remove("show");
            });
            button.removeAttribute("aria-hidden");
            button.removeAttribute("tabindex");
            button.focus();
        }

    });

    const manageBodyOverflow = (action) => {
        const body = document.querySelector("body");

        if (action == "open") {
            body.style.overflow = "hidden";
        }
        else if (action == "close") {
            body.style.overflow = "initial";
        }

    }
}

document.ready = menuToggle();