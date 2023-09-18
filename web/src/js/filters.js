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

                if (icon){
                    icon.innerText = "expand_less";
                }
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

    if (button.getElementsByClassName("date-icon")[0]) {
        button.innerHTML = `<span class="date-icon material-icons-outlined" 
        aria-hidden="true">calendar_today</span><span>${checked}</span>`;
    } else {
        button.innerHTML = "<span>" + checked + "</span>";
    }

    content.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
    buttonContainer.classList.add('filter-border');
    
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
    const buttonContainer = filter.getElementsByClassName("btn-container")[0];
    const removeButton = filter.getElementsByClassName("filter-remove")[0];
    const title = filter.getElementsByClassName("filter-header")[0].getElementsByTagName('h2')[0].innerText;
    let dateIcon = false;
    button.onclick = () => {}; // Stop event listener of the whole button
    
    if (button.getElementsByClassName("date-icon")[0]){
        dateIcon = true;
    }

    removeButton.remove();
    buttonContainer.classList.remove('filter-border');
    if (dateIcon){
        button.innerHTML = '<span class="date-icon material-icons-outlined" aria-hidden="true">calendar_today</span>';
        button.innerHTML += "<span>" + title + "</span>";
    } else {
        button.innerHTML = "<span>" + title + "</span>";
    }
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

const readFilter = () => {
    const filter = document.querySelector(".read-filter");
    filter.onclick = () => {
        if (!filter.classList.contains("filter-border")) {
            filter.setAttribute("aria-pressed", "true");
            filter.classList.add("filter-border");
            filter.setAttribute("aria-label", "Deixa de filtrar les notificacions no llegides");
        } else {
            filter.setAttribute("aria-pressed", "false");
            filter.classList.remove("filter-border");
            filter.setAttribute("aria-label", "Filtra les notificacions no llegides");
        }
    }

}

document.ready = filterToggle(), readFilter();