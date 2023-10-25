const attachedDocuments = () => {
    const attachedDocuments = document.querySelectorAll(".document");

    attachedDocuments.forEach(function(attached){
        const link = attached.getElementsByClassName("doc-link")[0];
        const a11yText = attached.getElementsByClassName("document-a11y")[0];

        link.onclick = () => {
            attached.classList.toggle("active");

            if (link.getAttribute("aria-expanded") == "false") {
                link.setAttribute("aria-expanded", "true");
                a11yText.innerText = ": Tancar panell descarrega";
            } else {
                link.setAttribute("aria-expanded", "false");
                a11yText.innerText = ": Obrir panell descarrega";
            }
        }
    });



}

document.ready = attachedDocuments();