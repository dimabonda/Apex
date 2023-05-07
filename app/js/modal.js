window.addEventListener("DOMContentLoaded", () => {
    const bookingPartyButtons = document.querySelectorAll('.booking-party_btn');
    const modal = document.querySelector('.modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const locationItems = document.querySelectorAll('.location-item');
    const locationBtns = document.querySelectorAll('.location_btn');

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
///booking modal
    bookingPartyButtons.forEach(item => item.addEventListener("click", () => {
        openModal('.book-modal');
    }));

    
///////////location modal
    locationBtns.forEach(item => item.addEventListener("click", () => {
        openModal('.location-modal');
    }))

    /////

    closeModalBtns.forEach(item => item.addEventListener("click", () => {
        closeModal()
    }));
    
    modal.addEventListener("click", (e) => {
        if(e.target.classList.contains('modal')){
            closeModal()
        }
    })

    //////////////////location modal input radio
    
    locationItems.forEach((item) => {
        item.addEventListener("click",(e) => {
            locationItems.forEach(i => {
                i.classList.remove("checked");
            })
            item.classList.add("checked");
        })
    })

})