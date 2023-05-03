window.addEventListener("DOMContentLoaded", () => {
    const bookingPartyButtons = document.querySelectorAll('.booking-party_btn');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-modal');

    let currentModal;
    
    const openModal = (selector) => {
        currentModal = document.querySelector(selector);
        modal.style.display = 'block';
        currentModal.style.display = 'block';
    }

    const closeModal = () => {
        modal.style.display = 'none';
        currentModal.style.display = 'none';
    }

    bookingPartyButtons.forEach(item => item.addEventListener("click", () => {
        openModal('.book-modal');
    }));

    closeModalBtn.addEventListener("click", () => {
        closeModal()
    });

    modal.addEventListener("click", (e) => {
        if(e.target.classList.contains('modal')){
            closeModal()
        }
    })
})