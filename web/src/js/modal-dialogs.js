const modalManage = (openClass, closeClass) => {
    // #region Manage clicks outside the modal to close it
    const modalOverlay = document.getElementsByClassName('modal-overlay')[0];
    modalOverlay.addEventListener('click', function(){modalClose('login-modal')});
    //TODO: It would be better to not use the absolute id of the modal to manage clicks outside of it
    // #endregion

    // #region Get all modal dialogs and all buttons to close those modals and add an event listener for clicks
    const modalButtons = document.querySelectorAll(openClass);
    
    modalButtons.forEach(function(button){
        let buttonId = button.getAttribute('id');
        // Get modalId based on the modal being the button's next element in the DOM 
        let modalId = button.nextElementSibling.getAttribute('id');

        button.addEventListener("click", function(){modalOpen(buttonId, modalId)});
    });

    const closeButtons = document.querySelectorAll(closeClass);

    closeButtons.forEach(function(button){
        let buttonId = button.getAttribute('id');
        let modalId = button.parentNode.parentNode.getAttribute('id');

        button.addEventListener("click", function(){modalClose(modalId)});
    });

    // #endregion
    
    // #region Functions to manage the modal behaviour
    const modalClose = (modalId) => {
        let modal = document.getElementById(modalId);
        let openButton = modal.previousElementSibling;
        modal.classList.toggle('show');
        modal.setAttribute('aria-hidden', 'true');

        let tabIndexElements = modal.querySelectorAll('[tabindex="0"]');

        tabIndexElements.forEach(function(element) {
            element.setAttribute('tabindex', '-1');
        })

        modalOverlayToggle();

        openButton.focus();
    }

    const modalOpen = (buttonId, modalId) => { 
        const modal = document.getElementById(modalId);
        modal.classList.toggle('show');
        modal.setAttribute('aria-hidden', 'false');

        let tabIndexElements = modal.querySelectorAll('[tabindex="-1"]');

        tabIndexElements.forEach(function(element) {
            element.setAttribute('tabindex', '0');
        })


        modalOverlayToggle();
        
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modalClose(modalId);
            }
        });

        // Manage focus inside the modal
        const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; 
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // If shift key pressed for shift + tab combination
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus(); 
                }
            } 
            else { // If tab key is pressed
                if (document.activeElement === lastFocusableElement) {
                    /* If focus has reached to last focusable element then focus first 
                     *  focusable element after pressing tab */
                    firstFocusableElement.focus(); // Add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });

        firstFocusableElement.focus(); // Focus first focusable element by default
    }

    const modalOverlayToggle = () => {
        modalOverlay.classList.toggle('show');
    }
    // #endregion
}

document.ready = modalManage('.open-modal', '.close-modal');