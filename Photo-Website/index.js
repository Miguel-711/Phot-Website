let image = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random() * image.length);
    document.querySelector('.main-pic').src = `./Photos/${image[random]}`;
}, 1000);
