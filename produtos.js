function comprarProduto() {
    alert("Produto comprado! Obrigado pela compra.");
}

let currentImageIndex = 0;

function showImage(index) {
    const images = document.querySelector('.product-images');
    const totalImages = images.children.length;

    if (index < 0) {
        currentImageIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }

    const transformValue = -currentImageIndex * 100 + '%';
    images.style.transform = 'translateX(' + transformValue + ')';
}

function mudarImagem(direction) {
    showImage(currentImageIndex + direction);
}

function mudarImagemProduto(index, direction) {
    const productDetails = document.querySelectorAll('.product-details');
    const currentProduct = productDetails[index];
    const images = currentProduct.querySelector('.product-images');
    const totalImages = images.children.length;

    let currentImageIndex = parseInt(images.getAttribute('data-current-index')) || 0;

    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    } else {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }

    images.setAttribute('data-current-index', currentImageIndex);

    const transformValue = -currentImageIndex * 100 + '%';
    images.style.transform = 'translateX(' + transformValue + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-button');
    const prevButtons = document.querySelectorAll('.prev-button');

    nextButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            mudarImagemProduto(index, 'next');
        });
    });

    prevButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            mudarImagemProduto(index, 'prev');
        });
    });
});