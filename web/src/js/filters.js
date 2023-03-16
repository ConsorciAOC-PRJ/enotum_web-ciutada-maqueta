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

const applyFilter = (filterId) => {

    const filterToApply = document.getElementById(filterId);
    const content = filterToApply.getElementsByClassName("filter-content")[0];
    const radioButtons = filterToApply.getElementsByClassName("custom-rb"); 
    const button = filterToApply.getElementsByClassName("btn-filter")[0];
    const buttonContainer = filterToApply.getElementsByClassName("btn-container")[0];
    let checked;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].innerText == "radio_button_checked") {
            checked = radioButtons[i].nextElementSibling.innerText;
        }
    }

    button.innerHTML = "<span>" + checked + "</span>";

    content.classList.remove("show");
    button.setAttribute("aria-expanded", "false");

    buttonContainer.innerHTML += "<button class='filter-remove' onclick=\"removeFilter(\'" + filterId + "\')\"><span class='material-icons' aria-hidden='true'>clear</span><span class='sr-only'>Eliminar filtre</span></button>";

    filterToggle();
}

const removeFilter = (filterId) => {
    const filter = document.getElementById(filterId);
    const content = filter.getElementsByClassName("filter-content")[0];
    const button = filter.getElementsByClassName("btn-filter")[0];
    const removeButton = filter.getElementsByClassName("filter-remove")[0];
    const title = filter.getElementsByClassName("filter-header")[0].getElementsByTagName('h2')[0].innerText;
    button.onclick = () => {}; // Stop event listener of the whole button
    
    removeButton.remove();
    button.innerHTML = "<span>" + title + "</span>";
    button.innerHTML += "<span class='material-icons filter-icon' aria-hidden='true'>expand_more</span>";

    if (!content.classList.contains("show")) {
        //
    } else {
        content.classList.remove("show");
        button.setAttribute("aria-expanded", "false");
        icon.innerText = "expand_more";
    }

    filterToggle();
}

document.ready = filterToggle();