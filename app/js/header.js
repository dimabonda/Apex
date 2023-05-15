window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.header-wrap .search-input');
    const searchIcon = document.querySelector('.header-wrap .search-icon');
    const hamburger = document.querySelector('.header-mobile .hamburger');
    const headerMobile = document.querySelector('.header-mobile');
    const body = document.querySelector('body');
    const titles = document.querySelectorAll('.menu-mobile-item_title');
    const searchMobileWrapper = document.querySelector('.header-mobile .search-mobile');
    const logoSearchIcon = document.querySelector('.logo-container>img');
    const searchInputMobile = document.querySelector('.header-mobile .search-input');
    const worktimeDropList = document.querySelector('.header-worktime-drop');
    const dropListItems = document.querySelectorAll(".menu-mobile_drop-list > li");
    
    
    //only with arrows
    const filteredTitles = Array.from(titles).filter(item => item.lastElementChild.tagName === "IMG" );
    const closeSubLists = (index) => {
        filteredTitles.forEach((item,i) => {
            if(item.lastElementChild.classList.contains('arrow_active') && index !== i){
                item.lastElementChild.classList.toggle('arrow_active');
                item.nextElementSibling.classList.toggle('menu-mobile_drop-list_active');
            }
        })
    }

    const openMobileMenu = (isFocus) => {
        closeSubLists(-1)
        hamburger.classList.toggle('hamburger_hidden');
        if (logoSearchIcon.src.split('/')[logoSearchIcon.src.split('/').length - 1] == 'search.svg'){
            if(window.location.href.includes("pages")) {
                logoSearchIcon.src = './../../images/icons/close.svg' ;
            } else {
                logoSearchIcon.src = './images/icons/close.svg' ;
            }
        } else {
            if(window.location.href.includes("pages")){
                logoSearchIcon.src = './../../images/icons/search.svg';
            } else {
                logoSearchIcon.src = './images/icons/search.svg';
            }
        }

        isFocus && window.setTimeout(() => {searchInputMobile.focus()},0)
        
        searchMobileWrapper.classList.toggle('search-mobile_active');
        headerMobile.classList.toggle('header-mobile_active');
        body.classList.toggle('hidden');
    }

    searchIcon.addEventListener("click", (e) => {
        e.stopPropagation()
        searchIcon.classList.toggle("search-icon_active");
        if (searchIcon.classList.contains("search-icon_active")){
            searchInput.style.display = "block";
        } else {
            searchInput.style.display = "none";
            searchInput.value = "";
        }
    })
    body.addEventListener("click", (event) => {
        if(!event.target.classList.contains("search-input")){
            searchIcon.classList.remove("search-icon_active");
            searchInput.style.display = "none";
            searchInput.value = "";
        }
    })

    hamburger.addEventListener("click", () => {
        openMobileMenu()
    })

    logoSearchIcon.addEventListener("click", () => {
        openMobileMenu(true)
    })
    dropListItems.forEach(item => {
        item.addEventListener("click", () => {
            openMobileMenu()
        })
    })
    
    filteredTitles.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            closeSubLists(index)

            const title = event.currentTarget;
            title.lastElementChild.classList.toggle('arrow_active');
            title.nextElementSibling.classList.toggle('menu-mobile_drop-list_active');

        })
    })
})