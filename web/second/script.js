document.addEventListener('DOMContentLoaded', function () {
    const selector = document.querySelector('.quality-selector');
    const photoContainer = document.getElementById('photo-container');
    const currentPhoto = document.getElementById('current-photo');
    const backgroundMusic = document.getElementById('background-music');
    const startTime = 23;

    const playMusic = () => {
        backgroundMusic.currentTime = startTime;
        backgroundMusic.play().then(() => {
            console.log('Music is playing');
        }).catch(error => {
            console.error('Failed to play music:', error);
        });
    };

    const handleUserInteraction = () => {
        playMusic();
        localStorage.setItem('musicPlaying', 'true');
        selector.removeEventListener('click', handleUserInteraction);
        selector.removeEventListener('change', handleUserInteraction);
    };

    selector.addEventListener('click', handleUserInteraction);
    selector.addEventListener('change', handleUserInteraction);

    if (localStorage.getItem('musicPlaying')) {
        document.addEventListener('click', playMusic, { once: true });
    }

    selector.addEventListener('change', function () {
        const selectedQuality = this.value;
        if (selectedQuality) {
            currentPhoto.src = `images/photo${selectedQuality}.jpg`;
            photoContainer.style.display = 'block';
        }
    });
});
