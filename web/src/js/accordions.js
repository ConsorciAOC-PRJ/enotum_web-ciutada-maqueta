// This script is very similar to the one for dropdowns. 
//It is on a separate file to make it easier to use componentes independently.

const accordionToggle = () => {
   
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const button = accordion.getElementsByClassName("accordion-button")[0];
        const content = accordion.getElementsByClassName("accordion-content")[0];
        const icon = accordion.getElementsByClassName("material-icons")[0];

        button.onclick = () => {
            if (!content.classList.contains("show")) {
                content.classList.add("show");
                content.classList.add("aoc-border");
                button.classList.remove("aoc-border");
                button.setAttribute("aria-expanded", "true");
                icon.innerText = "expand_less";
            } else {
                content.classList.remove("show");
                content.classList.remove("aoc-border");
                button.setAttribute("aria-expanded", "false");
                button.classList.add("aoc-border");
                icon.innerText = "expand_more";
            }
        }
       
    });
}

document.ready = accordionToggle();