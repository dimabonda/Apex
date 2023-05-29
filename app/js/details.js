import { openOverlay, showInfoMobile } from "./overlay.js";
window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const cards = document.querySelectorAll(".card");
    const closeButtons = document.querySelectorAll(".card-info-close");
    const startId = "#info-";
    const restrictionsBtn = document.querySelector(".button-restrictions");


    const getCurrentHash = () => {
        const hash = window.location.hash;
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        if (hash){
            if(screenWidth >= 575){
                let selector = hash.replace("#", "#card-");
                let targetCard = document.querySelector(selector);
                if(!targetCard.classList.contains("card-active")){
                    showInfo(targetCard);
                }
            } else{
                let selector = hash.replace("#", "#card_mobile-");
                let targetCard = document.querySelector(selector);
                openOverlay();
                showInfoMobile(targetCard)
            }
        }
    }

    const closeInfo = () => {
        const card = document.querySelector('.card-active');
        const info = document.querySelector('.card-info-active');
        card?.classList.toggle('card-active');
        info?.classList.toggle('card-info-active');
    }
    
    const showRestrictionsBtn = () => {
        const activeCard = document.querySelector('.card-active');
        if(activeCard){
            restrictionsBtn.style.display = "inline-flex";
        } else {
            restrictionsBtn.style.display = "none";
        }
    }
    const findMatchedInfoCard = (card) => {
        const infoCardId = startId + card.id.split("-")[1];
        const infoCard = document.querySelector(infoCardId);
        return infoCard
    }

    

    const showInfo = (card) => {
        if (!card.classList.contains('card-active')){
            closeInfo()
        }
        const info = findMatchedInfoCard(card)
        card.classList.toggle("card-active");
        info.classList.toggle("card-info-active");
        info.scrollIntoView({behavior: "smooth"})
        showRestrictionsBtn()
    } 

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (event) => {
            closeInfo();
        })
    })

    cards.forEach(item => {
        item.addEventListener("click", (event) => {
            let card = event.currentTarget;
            showInfo(card)
        })
    })

    
    
    ///////details mobile

    // const findMatchedInfoCardMobile = (card) => {
    //     const infoCardId = startMobileId + card.id.split("-")[1];
    //     const infoCard = document.querySelector(infoCardId);
    //     return infoCard
    // }
    // const closeInfoMobile = () => {
    //     const info = document.querySelector(".info-mobile_active")
    //     info.classList.remove('info-mobile_active')
    // }

    // const showInfoMobile = (card) => {
    //     const info = findMatchedInfoCardMobile(card);
    //     info.classList.add('info-mobile_active');
    // }


    // const openOverlay = () => {
    //     overlay.style.display = "block";
    //     overlay.style.animationName = "showOverlay";
    //     setTimeout(() => {
    //         overlayContent.style.bottom = "0%";
    //     },0)
    //     body.classList.add("hidden");
    // }
    // const hideOverlay = () => {
    //     overlayContent.style.bottom = "-85%";
    //     overlay.style.animationName = "hideOverlay";
    //     setTimeout(() => {
    //         overlay.style.display = "none";
    //         closeInfoMobile()
    //     },600)
    //     body.classList.remove("hidden");
    // }
    // cardsMobile.forEach(item => {
    //     item.addEventListener("click", (event) => {
    //         openOverlay();
    //         let card = event.currentTarget;
    //         showInfoMobile(card)
    //     })
    // })
    // overlay.addEventListener("click", (event) => {
    //     if(event.target.classList.contains("overlay")){
    //        hideOverlay() 
    //     }
    // })

    // let clientY;
    // let deltaY;
    // let overlayContentHeight;

    // wrapper.addEventListener("touchmove", (event) => {
    //     if(!wrapper.scrollTop == 0){
    //         event.stopPropagation();
    //         clientY = event.touches[0].clientY; // подменяем clientY чтобы когда доскролили wrapper до верха stopPropagation перестанет срабатывать 
    //         // и включится overlayContent.addEventListener("touchmove") и продолжит вычился дельту
    //         console.log("wrapper")
    //     } 
        
    // })

    // overlayContent.addEventListener("touchstart", (e) => {
    //     overlayContentHeight = overlayContent.offsetHeight;
    //     clientY = e.touches[0].clientY;
    //     overlayContent.style.transition = "all 0s ease";
    // });

    // overlayContent.addEventListener("touchmove", (e) => {
    //         deltaY = e.changedTouches[0].clientY - clientY;
    //         overlayContent.style.bottom = `-${deltaY}px`;
    // })

    // overlayContent.addEventListener("touchend", (e) => {
    //     if(deltaY>overlayContentHeight/2){
    //         hideOverlay() 
    //     } else {
    //         overlayContent.style.bottom = "0%";
    //     }
    //     overlayContent.style.transition = "all 0.5s ease"
    // });
    window.addEventListener("hashchange", (e) => {
        getCurrentHash()
    })
    getCurrentHash()
})