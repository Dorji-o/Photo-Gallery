document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { src: 'img/1.jpg', caption: 'Table Lamp and Scented candles' },
        { src: 'img/2.jpg', caption: 'Pink tulips on dressing mirror' },
        { src: 'img/3.jpg', caption: 'Wellness cafe' },
        { src: 'img/4.jpg', caption: 'Flower Boutique and cassie' },
        { src: 'img/5.jpg', caption: 'Affirmation' },
        { src: 'img/6.jpg', caption: 'Tulips and Books' },
        { src: 'img/7.jpg', caption: 'Spiritual Bath' },
        { src: 'img/8.jpg', caption: 'Tulips and acrylic wall' },
        { src: 'img/9.jpg', caption: 'Rose quartz and other crystal cleansing' },
        { src: 'img/10.jpg', caption: 'Crystal collection' }
    ];

    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    function showLightbox(index) {
        lightbox.style.display = 'flex';
        lightboxImg.src = photos[index].src;
        lightboxCaption.textContent = photos[index].caption;
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        showLightbox(currentIndex);
    }

    function showPrevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showLightbox(currentIndex);
    }

    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.addEventListener('click', () => showLightbox(index));
        gallery.appendChild(img);
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNextPhoto);
    prevBtn.addEventListener('click', showPrevPhoto);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});