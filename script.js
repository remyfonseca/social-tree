const switchButton = document.getElementById('switch-button');

switchButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
});
