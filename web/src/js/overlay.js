const overlayManage = () => {

    const overlay = document.querySelector(".modal-overlay");

    const menus = document.querySelectorAll(".menu");

    overlay.onclick = () => {

        menus.forEach(function(menu) {

            const button = menu.getElementsByClassName("open-menu")[0];
            const content = menu.getElementsByClassName("menu-content")[0];
            
            if (content.classList.contains("show")) {
                content.classList.remove("show");
                button.setAttribute("aria-expanded", "false");
                overlay.classList.remove("show");
            }

        });
    }

}

document.ready = overlayManage();