const rbCheck = () => {

    const filters = document.querySelectorAll(".filter-container");

    filters.forEach((filter) => {
        const inputs = filter.querySelectorAll("input[type='radio']");
        const radioBtns = filter.querySelectorAll(".custom-rb");

        inputs.forEach((input) => {
            const inputId = input.getAttribute('id');
            const label = document.querySelector("label[for='"+ inputId + "']");
            const labelRadio = label.querySelector(".custom-rb");
        
            input.onclick = () => {
                radioBtns.forEach((radio) => {
                    radio.innerText = "radio_button_unchecked";
                });
                
                labelRadio.innerText = "radio_button_checked";
            }
        });

    });
}

document.ready = rbCheck();