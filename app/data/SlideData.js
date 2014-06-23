define(function(require, exports, module) {
    var SlideData = {};

    SlideData.imageURLs = [
        "img/9065-web.jpg",
        "img/9078-web.jpg",
        "img/9081-web.jpg",
        "img/9083-web.jpg",
        "img/9089-web.jpg",
        "img/9065-web.jpg", // Repeats to smooth the animation flow
        "img/9078-web.jpg",
        "img/9081-web.jpg"
    ];
    SlideData.imageHeight = 350;
    SlideData.imageWidth = 500;

    module.exports = SlideData;
});