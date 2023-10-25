const attachedDocuments = () => {
    const attachedDocuments = document.querySelectorAll(".document");

    attachedDocuments.forEach(function(attached){
        const link = attached.getElementsByClassName("doc-link")[0];

        link.onclick = () => {
            attached.classList.toggle("active");

            if (link.getAttribute("aria-expanded") == "false") {
                link.setAttribute("aria-expanded", "true");
            } else {
                link.setAttribute("aria-expanded", "false");
            }
        }
    });



}

document.ready = attachedDocuments();