const overlayManage = () => {

    const overlays = document.querySelectorAll(".modal-overlay");

    const menus = document.querySelectorAll(".menu");

    overlays.forEach(function(overlay){
        overlay.onclick = () => {

            menus.forEach(function(menu) {

                const button = menu.getElementsByClassName("open-menu")[0];
                const content = menu.getElementsByClassName("menu-content")[0];
            
                if (content.classList.contains("show")) {
                    // manageHeader("close");
                    manageBodyOverflow("close");
                    content.classList.remove("show");
                    button.setAttribute("aria-expanded", "false");
                    overlays.forEach(function(overlay){
                        overlay.classList.remove("show");
                    })
                    button.removeAttribute("aria-hidden");
                    button.removeAttribute("tabindex");
                }

            });
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

document.ready = overlayManage();