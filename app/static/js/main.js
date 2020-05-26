$(document).ready(() => {
    let frameWidth = $('.main-content-block').width();
    $('.main-content-block').css({
        height: parseInt(frameWidth * 0.5),
        visibility: 'visible'
    });
});