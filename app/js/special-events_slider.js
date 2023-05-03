window.addEventListener("DOMContentLoaded", (event) => {
    let sliderControlLeftBtn = document.querySelector('.slider-control-left');
    let sliderControlRightBtn = document.querySelector('.slider-control-right');
    let slider = document.querySelector('.slider');
    let cards = document.querySelectorAll('.special-events-wrap .card');

    let sliderControlMobileLeftBtn = document.querySelector('.special-events-mobile-wrap .slider-control-left');
    let sliderControlMobileRightBtn = document.querySelector('.special-events-mobile-wrap .slider-control-right');
    let sliderMobile = document.querySelector('.special-events-mobile-wrap .slider');
    let cardsMobile = document.querySelectorAll('.special-events-mobile-wrap .card');

    const showCard = (index, cards) => {
        cards.forEach((card) => {
            if(card.classList.contains('card_active')){
                card.classList.toggle('card_active')
            }
                cards[index].classList.add('card_active');
        })
    }

    const changeToBig = (element, isMobile) => {
        if(isMobile){
            element.style.left = '30%';
            element.style.width = '70%';
            element.style.aspectRatio = '485/645';
        } else {
            element.style.left = '173px';
            element.style.top = '-97px';
            element.style.width = '485px';
            element.style.height = '645px';
        }
    }

    const changeToMedium = (element, isMobile) => {
        if(isMobile){
            element.style.left = '15%';
            element.style.aspectRatio = '430/576';
            element.style.width = '60%';
        } else {
            element.style.left = '70px';
            element.style.top = '-68px';
            element.style.width = '430px';
            element.style.height = '576px';
        }

    }

    const changeToSmall = (element, isMobile) => {
        if(isMobile){
            element.style.left = '0%';
            element.style.aspectRatio = '376/504';
            element.style.width = '50%';
        } else {
            element.style.left = '0px';
            element.style.top = '-24px';
            element.style.width = '376px';
            element.style.height = '504px';
        }
    }

    sliderControlLeftBtn.addEventListener("click", (event) => {
        let firstElem = document.querySelector('.slider-item:nth-child(1)');
        showCard(+firstElem.getAttribute("cardId"), cards)
        let secondElem = document.querySelector('.slider-item:nth-child(2)');
        let thirdElem = document.querySelector('.slider-item:nth-child(3)');
        firstElem.style.opacity = 0
        changeToMedium(thirdElem);
        changeToSmall(secondElem);
        setTimeout(() => {
            firstElem.style.opacity = 1
        },800)
        changeToBig(firstElem);
        slider.appendChild(firstElem)
    })

    sliderControlRightBtn.addEventListener("click", (event) => {
        let firstElem = document.querySelector('.slider-item:nth-child(1)');
        let secondElem = document.querySelector('.slider-item:nth-child(2)');
        let thirdElem = document.querySelector('.slider-item:nth-child(3)');
        showCard(+secondElem.getAttribute("cardId"), cards);
        changeToBig(secondElem);
        changeToMedium(firstElem);
        changeToSmall(thirdElem)
        slider.prepend(thirdElem);
    })

    sliderControlMobileLeftBtn.addEventListener("click", () => {
        let firstElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(1)');
        showCard(+firstElem.getAttribute("cardId"), cardsMobile);
        let secondElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(2)');
        let thirdElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(3)');
        firstElem.style.opacity = 0
        changeToMedium(thirdElem, true);
        changeToSmall(secondElem, true);
        setTimeout(() => {
            firstElem.style.opacity = 1
        },800)
        changeToBig(firstElem, true);
        sliderMobile.appendChild(firstElem)
    })
    sliderControlMobileRightBtn.addEventListener("click", () => {
        let firstElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(1)');
        let secondElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(2)');
        let thirdElem = document.querySelector('.special-events-mobile-wrap .slider-item:nth-child(3)');
        showCard(+secondElem.getAttribute("cardId"), cardsMobile);
        changeToBig(secondElem, true);
        changeToMedium(firstElem, true);
        changeToSmall(thirdElem, true);
        sliderMobile.prepend(thirdElem);
    })
    
    
})

// window.addEventListener("DOMContentLoaded", (event) => {
    
//     const showCard = (index) => {
//         cardsMobile.forEach((card) => {
//             if(card.classList.contains('card_active')){
//                 card.classList.toggle('card_active')
//             }
//             cardsMobile[index].classList.add('card_active');
//         })
//     }
//     const changeToBig = (element) => {
//         element.style.left = '30%';
//         element.style.width = '70%';
//         element.style.aspectRatio = '485/645';
//     }

//     const changeToMedium = (element) => {
//         element.style.left = '15%';
//         element.style.aspectRatio = '430/576';
//         element.style.width = '60%';
//     }

//     const changeToSmall = (element) => {
//         element.style.left = '0%';
//         element.style.aspectRatio = '376/504';
//         element.style.width = '50%';
//     }

    
// })