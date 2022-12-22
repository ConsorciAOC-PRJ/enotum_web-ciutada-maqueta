// This script is very similar to the one for dropdowns. 
//It is on a separate file to make it easier to use componentes independently.

const filterToggle = () => {
   
    const filters = document.querySelectorAll(".filter-container");

   filters.forEach((filter) => {
        const button = filter.getElementsByClassName("btn-filter")[0];
        const content = filter.getElementsByClassName("filter-content")[0];
        const icon = filter. getElementsByClassName("filter-icon")[0];

        button.onclick = () => {
            if (!content.classList.contains("show")) {
                content.classList.add("show");
                button.setAttribute("aria-expanded", "true");
                icon.innerText = "expand_less";
            } else {
                content.classList.remove("show");
                button.setAttribute("aria-expanded", "false");
                icon.innerText = "expand_more";
            }
        }
       
    });
}

document.ready = filterToggle();