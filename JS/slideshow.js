const container = document.querySelector('.container');

setInterval(() => {
    container.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        container.appendChild(container.firstElementChild);
        container.style.transform = 'translateX(0)';
    }, 500);
}, 3000); // Change d'image toutes les 3 secondes (ajustez selon vos besoins)