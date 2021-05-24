document.addEventListener('DOMContentLoaded', () => {

    const modalCLoseElem = document.querySelector('.modal-close');
    const overlay = document.querySelector('.overlay');
    const modalOpenElems = document.querySelectorAll('.main-btn');
    const modalWrapper = document.querySelector('.modal__wrapper');



    modalOpenElems.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
    
            modalWrapper.classList.remove('hidden');
            overlay.classList.remove('hidden');
            disableScroll();
        });
    });

    const modalClose = () => {
        modalWrapper.classList.add('hidden');
        overlay.classList.add('hidden');
        enableScroll();
    };

    overlay.addEventListener('click', modalClose);
    modalCLoseElem.addEventListener('click', modalClose);

    //TABS 

    const tabs = document.querySelectorAll('.prices__btn');
    const cards = document.querySelectorAll('.prices__cards');
    const tabsParent = document.querySelector('.prices__tabs');

    function hideTabContent() {
        cards.forEach(item => {
            item.classList.add('hidden');
        });

        tabs.forEach(item => {
            item.classList.remove('active-left');
            item.classList.remove('active-right');
        });
    }

    function showTabContent(i = 0) {
        cards[i].classList.remove('hidden');

        if (tabs[i].classList.contains('yearly')) {
            tabs[i].classList.add('active-left');
        } else if (tabs[i].classList.contains('monthly')) {
            tabs[i].classList.add('active-right');
        }
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('prices__btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // SMOOTH SCROLL 
    
    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // BLOCK SCROLL 
    const disableScroll = () => {
        document.body.dataset.scrollY = window.scrollY;
    
        const scrollWidth = window.innerWidth - document.body.offsetWidth;
    
        document.body.style.cssText = `
            position:fixed;
            top: -${window.scrollY}px;
            left: 0;
            width: 100%;
            overflow:hidden;
            height:100vh;
            padding-right: ${scrollWidth}px;
        `;
    };
    
    const enableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dataset.scrollY
        });
    };

    //BURGER 

    const burgerElem = document.querySelector('.burger_menu');
    const contentMenuElem = document.querySelector('.header__menu')

    burgerElem.addEventListener('click', () => {
        contentMenuElem.classList.toggle('header__menu-active');
    })
});

