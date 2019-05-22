function addToCart(el) {
    $(el).closest('.catalog__item').toggleClass('catalog__item--selected');
}