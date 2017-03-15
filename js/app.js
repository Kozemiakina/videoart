/**
 * Created by alisa on 15.03.2017.
 */
/**
 * Swiper main slider
 * @type {Swiper}
 */
var swiper = new Swiper('.my-swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true
});
/**
 * Swiper guid slider
 */
var swiper = new Swiper('.guid-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    loop: true
});

/**
 * Tabs
 */
$( function() {
    $( "#tabs" ).tabs();
} );