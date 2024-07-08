document.addEventListener('DOMContentLoaded', function () {
    const navigateButton = document.getElementById('navigate-button');

    navigateButton.addEventListener('click', function () {
        navigateButton.classList.add('clicked');

        setTimeout(function () {
            window.location.href = '../second/index.html';
        }, 300); 
    });

    navigateButton.addEventListener('animationend', function () {
        navigateButton.classList.remove('clicked');
    });
});
