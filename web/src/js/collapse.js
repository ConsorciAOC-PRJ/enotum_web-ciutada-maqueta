const collapse = () => {
    const close = document.querySelector('.panel-close-link');
    const sidebar = document.querySelector('.notification-info');
    const noContent = document.querySelector('.notification-no-content');
    const content = document.querySelector('.notification-content');

    close.onclick = () => {

        if (sidebar.classList.contains('hide')) {
            sidebar.classList.remove('hide');

            if (content) {
                content.classList.remove('col-sm-12');
                content.classList.add('col-sm-8');
            } 
            else if (noContent) {
                noContent.classList.remove('col-sm-12');
                noContent.classList.add('col-sm-8');
            }

            close.setAttribute('aria-expanded', 'true');
        } 
        else {
            sidebar.classList.add('hide');

            if (content) {
                content.classList.remove('col-sm-8');
                content.classList.add('col-sm-12');
            } 
            else if (noContent) {
                noContent.classList.remove('col-sm-8');
                noContent.classList.add('col-sm-12');
            }

            close.setAttribute('aria-expanded', 'false');
        }
    }
}

document.ready = collapse();