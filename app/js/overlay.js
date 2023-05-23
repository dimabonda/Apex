const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay .content');
const cardsMobile = document.querySelectorAll(".card-mobile");
const wrapper = document.querySelector(".content-wrapper");
const body = document.querySelector("body");
const startMobileId = "#info-mobile-";


const findMatchedInfoCardMobile = (card) => {
    const infoCardId = startMobileId + card.id.split("-")[1];
    const infoCard = document.querySelector(infoCardId);
    return infoCard
}
const closeInfoMobile = () => {
    const info = document.querySelector(".info-mobile_active")
    info.classList.remove('info-mobile_active')
}

export const showInfoMobile = (card) => {
    const info = findMatchedInfoCardMobile(card);
    info.classList.add('info-mobile_active');
}


export const openOverlay = () => {
    overlay.style.display = "block";
    overlay.style.animationName = "showOverlay";
    setTimeout(() => {
        overlayContent.style.bottom = "0%";
    },10)
    body.classList.add("hidden");
}
const hideOverlay = () => {
    overlayContent.style.bottom = "-85%";
    overlay.style.animationName = "hideOverlay";
    setTimeout(() => {
        overlay.style.display = "none";
        closeInfoMobile()
    },600)
    body.classList.remove("hidden");
}
cardsMobile.forEach(item => {
    item.addEventListener("click", (event) => {
        openOverlay();
        let card = event.currentTarget;
        showInfoMobile(card)
    })
})
overlay.addEventListener("click", (event) => {
    if(event.target.classList.contains("overlay")){
       hideOverlay() 
    }
})

let clientY;
let deltaY;
let overlayContentHeight;

wrapper.addEventListener("touchmove", (event) => {
    if(!wrapper.scrollTop == 0){
        event.stopPropagation();
        clientY = event.touches[0].clientY; // подменяем clientY чтобы когда доскролили wrapper до верха stopPropagation перестанет срабатывать 
        // и включится overlayContent.addEventListener("touchmove") и продолжит вычился дельту
    } 
    
})

overlayContent.addEventListener("touchstart", (e) => {
    overlayContentHeight = overlayContent.offsetHeight;
    clientY = e.touches[0].clientY;
    overlayContent.style.transition = "all 0s ease";
});

overlayContent.addEventListener("touchmove", (e) => {
        deltaY = e.changedTouches[0].clientY - clientY;
        overlayContent.style.bottom = `-${deltaY}px`;
})

overlayContent.addEventListener("touchend", (e) => {
    if(deltaY>overlayContentHeight/2){
        hideOverlay() 
    } else {
        overlayContent.style.bottom = "0%";
    }
    overlayContent.style.transition = "all 0.5s ease"
});

