const filterToggle = () => {
   
    const filters = document.querySelectorAll(".filter-container");

   filters.forEach((filter) => {
        const button = filter.getElementsByClassName("btn-filter")[0];
        const content = filter.getElementsByClassName("filter-content")[0];
        const icon = filter.getElementsByClassName("filter-icon")[0];

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
       
        // Add event listener to document to close filter when clicking outside of it
        document.addEventListener('click', (event) => {
            const isClickInsideFilter = filter.contains(event.target);

            if (!isClickInsideFilter && (content && content.classList.contains('show'))) {
                content.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
                icon.innerText = 'expand_more';
            }
        });
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
    
    // Check if the "remove filter" button has already been added.
    if (!filterToApply.getElementsByClassName("filter-remove")[0]) {
        // Add the "remove filter" button to the button container.
        buttonContainer.innerHTML += "<button class='filter-remove' onclick=\"removeFilter(\'" + filterId + "\')\"><span class='material-icons' aria-hidden='true'>clear</span><span class='sr-only'>Eliminar filtre: "+ button.getElementsByTagName('span')[0].innerText +"</span></button>";
    }

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
        
    } else {
        content.classList.remove("show");
        button.setAttribute("aria-expanded", "false");
        icon.innerText = "expand_more";
    }
    button.focus();
    filterToggle();
}

document.ready = filterToggle();