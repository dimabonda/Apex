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
    const worktime = document.querySelector('.header-worktime');
    const worktimeDropList = document.querySelector('.header-worktime-drop');
    const lastNavItem = document.querySelector('.nav-item:last-child');

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
            logoSearchIcon.src = './images/icons/close.svg'
        } else {
            logoSearchIcon.src = './images/icons/search.svg';
        }

        isFocus && window.setTimeout(() => {searchInputMobile.focus()},0)
        
        searchMobileWrapper.classList.toggle('search-mobile_active');
        headerMobile.classList.toggle('header-mobile_active');
        body.classList.toggle('hidden');
    }

    searchIcon.addEventListener("click", () => {
        searchIcon.classList.toggle("search-icon_active");
        if (searchIcon.classList.contains("search-icon_active")){
            searchInput.style.display = "block";

            worktime.style.display = "none";
            worktimeDropList.style.display = "block";
            lastNavItem.style.display = "none";
        } else {
            searchInput.style.display = "none";

            worktime.style.display = "block";
            worktimeDropList.style.display = "none";
            lastNavItem.style.display = "block";
        }
    })

    hamburger.addEventListener("click", () => {
        openMobileMenu()
    })

    logoSearchIcon.addEventListener("click", () => {
        openMobileMenu(true)
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