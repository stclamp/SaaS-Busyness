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
        });
    });

    const modalClose = () => {
        modalWrapper.classList.add('hidden');
        overlay.classList.add('hidden');
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
});

