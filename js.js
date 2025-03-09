let index = 0;
const images = document.querySelectorAll('.carousel img');
const thumbnails = document.querySelectorAll('.thumbnails img');

function changeSlide(direction) {
    images[index].classList.remove('active');
    thumbnails[index].classList.remove('active');
    index = (index + direction + images.length) % images.length;
    images[index].classList.add('active');
    thumbnails[index].classList.add('active');
    resetAutoSlide();
}

function jumpToSlide(slideIndex) {
    images[index].classList.remove('active');
    thumbnails[index].classList.remove('active');
    index = slideIndex;
    images[index].classList.add('active');
    thumbnails[index].classList.add('active');
    resetAutoSlide();
}

function autoSlide() {
    changeSlide(1);
}

let autoSlideInterval = setInterval(autoSlide, 3000);

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
}