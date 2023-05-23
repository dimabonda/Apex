import { openOverlay, showInfoMobile } from "./overlay.js";

window.addEventListener("DOMContentLoaded", () => {
    const detailsLinks = document.querySelectorAll('.item-info-link');
    const closeButtons = document.querySelectorAll('.details-container-close img');

    const closeDetails = () => {
        const activeElem = document.querySelector('.events-info-item_active');
        activeElem?.classList.remove('events-info-item_active');
    }
    const showDetails = (elem) => {
        if(!elem.classList.contains('events-info-item_active')) closeDetails();
        elem.classList.toggle('events-info-item_active');
    }

    const openDetailsByHash = () => {
        const hash = window.location.hash;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(hash){
            if(screenWidth >= 575){
                const selector = hash.slice(1);
                const targetElement = document.querySelector("." + selector);
                if(!targetElement.classList.contains("events-info-item_active")){
                    showDetails(targetElement)
                }
            } else {
                let selector = hash.replace("#", "#card_mobile-");
                let targetCard = document.querySelector(selector);
                openOverlay();
                showInfoMobile(targetCard)
            }
        }
    }

    window.addEventListener("hashchange", (e) => {
        openDetailsByHash()
    })
    openDetailsByHash()

    closeButtons.forEach(item => {
        item.addEventListener("click", (e) => {
            closeDetails()
        })
    })

    detailsLinks.forEach( item => {
        item.addEventListener("click", (e) => {
            const targetElement = item.parentElement.parentElement.parentElement;
            showDetails(targetElement);
        })
    })

    
})