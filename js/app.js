window.addEventListener('DOMContentLoaded' , () => {
    const nav = document.querySelector('nav'),
    open = nav.querySelector('.line'),
    plus = open.querySelector('.last-img'),
    minus = open.querySelector('.first-img'),
    menuLinkName = nav.querySelectorAll('nav ul li span ,.logo span'),
    information = nav.querySelectorAll('.information');

    open.onclick = () => {
        nav.classList.toggle('active');
        plus.classList.toggle('active');
        minus.classList.toggle('active');
        menuLinkName.forEach(item => {
            item.classList.toggle('active')
        });
        information.forEach(items => {
            items.classList.toggle('active')
        });
        document.body.classList.toggle('active')
    }
});