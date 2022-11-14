const dropdownToggle = () => {
   
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.getElementsByClassName("dropdown-button")[0];
        const content = dropdown.getElementsByClassName("dropdown-content")[0];

        button.onclick = () => {
            if (!content.classList.contains("show")) {
                content.classList.add("show");
                button.querySelector('.dropbtn').setAttribute("aria-expanded", "true");
            } else {
                content.classList.remove("show");
                button.querySelector('.dropbtn').setAttribute("aria-expanded", "false");
            }
        }
       
    });
}

document.ready = dropdownToggle();