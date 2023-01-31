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
    const radioButtons = filterToApply.getElementsByClassName("custom-rb"); 
    const button = filterToApply.getElementsByClassName("btn-filter")[0];
    let checked;

    console.log(radioButtons)

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].innerText == "radio_button_checked") {
            checked = radioButtons[i].nextElementSibling.innerText;
            console.log(checked)
        }
    }

    button.innerHTML = "<span>" + checked + "</span>";
    button.innerHTML += "<button onclick='removeFilter(" + filterId + ")'><span class='material-icons' aria-hidden='true'>clear</span><span class='sr-only'>Eliminar filtre</span></button>";
}

const removeFilter = (filterId) => {




}

document.ready = filterToggle();