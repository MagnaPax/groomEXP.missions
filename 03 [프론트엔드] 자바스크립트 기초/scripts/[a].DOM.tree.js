const navItems = document.getElementsByClassName('navigation__item');
const picItems = document.querySelectorAll('.gallery div');
const txt = document.querySelector('article');



function handleEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);

    if (e.type === 'click') {
        e.target.classList.toggle('red');
        e.target.style.backgroundColor = 'red';
    }
}



for (let item of navItems) {
    item.addEventListener('click', handleEvent);
}

for (let pic of picItems) {
    pic.addEventListener('click', handleEvent);
}

txt.addEventListener('click', handleEvent);



