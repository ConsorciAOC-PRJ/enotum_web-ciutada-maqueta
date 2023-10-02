const collapse = () => {
    const close = document.querySelector('.panel-close-link');
    const sidebar = document.querySelector('.notification-info');
    
    let noContent = document.getElementsByClassName('notification-no-content')[0];
    if (noContent) {
        noContent = noContent.parentElement;
    }

    let content = document.getElementsByClassName('notification-content')[0];
    if (content) {
        content = content.parentElement;
    }

    close.onclick = () => {

        if (sidebar.classList.contains('hide')) {
            sidebar.classList.remove('hide');

            if (content) {
                content.classList.add('col-md-7', 'col-lg-8');
            } 
            else if (noContent) {
                noContent.classList.add('col-md-7', 'col-lg-8');
            }

            close.setAttribute('aria-expanded', 'true');
        } 
        else {
            sidebar.classList.add('hide');

            if (content) {
                content.classList.remove('col-md-7', 'col-lg-8');
            } 
            else if (noContent) {
                noContent.classList.remove('col-md-7', 'col-lg-8');
            }

            close.setAttribute('aria-expanded', 'false');
        }
    }
}

document.ready = collapse();