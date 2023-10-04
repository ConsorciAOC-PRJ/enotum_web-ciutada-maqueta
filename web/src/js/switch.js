const switchToggle = () => {
    const toggle = document.querySelector('.switch');

    toggle.onclick = () => {
        if (toggle.getAttribute('aria-pressed') == 'false') {
            toggle.setAttribute('aria-pressed', 'true');
            toggle.classList.toggle('on');
        }
        else {
            toggle.setAttribute('aria-pressed', 'false');
            toggle.classList.toggle('on');
        }

    }
}

document.ready = switchToggle();