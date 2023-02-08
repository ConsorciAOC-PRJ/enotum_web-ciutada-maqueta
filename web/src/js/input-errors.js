const inputErrors = () => {

    const input = document.getElementById("name");
    const errorContainer = document.getElementById("error-name");

    document.addEventListener("input", (event) => {
        if (input.value != "Correcte") {
            input.setAttribute("aria-invalid", "true");
            errorContainer.innerText = "Això és un error";
        }
        else {
            input.setAttribute("aria-invalid", "false");
            errorContainer.innerText = "";
        }
    });

};

document.ready = inputErrors();