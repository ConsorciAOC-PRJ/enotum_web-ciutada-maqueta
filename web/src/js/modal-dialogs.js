const modalManage = (openClass, closeClass) => {
    // #region Get all modal dialogs and all buttons to close those modals and add an event listener for clicks
    const modalButtons = document.querySelectorAll(openClass);
    
    modalButtons.forEach(function(button){
        let buttonId = button.getAttribute('id');
        // Get modalId based on the aria-labelledby of the modal that contains the button id. 
        let modalId = document.querySelector('[aria-labelledby="' + buttonId + '"').getAttribute('id');

        button.addEventListener("click", function(){modalOpen(buttonId, modalId )});
    });

    const closeButtons = document.querySelectorAll(closeClass);

    closeButtons.forEach(function(button){
        let buttonId = button.getAttribute('id');
        let modalId = button.parentNode.getAttribute('id');

        button.addEventListener("click", function(){modalClose(modalId)});
    });

    // #endregion 

    const modalClose = (modalId) => {
        let modal = document.getElementById(modalId);
        modal.classList.toggle('show');
    }

    const modalOpen = (buttonId, modalId) => { 

        const modal = document.getElementById(modalId);
        modal.classList.toggle('show');
        
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
                    // If focus has reached to last focusable element then focus first focusable element after pressing tab
                    firstFocusableElement.focus(); // Add focus for the first focusable element
                    e.preventDefault();
                }
            }
        });

        firstFocusableElement.focus(); // Focus first focusable element by default
    }
}

document.ready = modalManage('.open-modal', '.close-modal');