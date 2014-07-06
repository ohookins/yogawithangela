define(function(require, exports, module) {
    var SlideData = {};

    SlideData.imageURLs = [
        { url: "img/9065-web.jpg",
          startOffset: -150,
          endOffset: -300
        },
        { url: "img/9078-web.jpg",
          startOffset: -100,
          endOffset: -270
        },
        { url: "img/9081-web.jpg",
          startOffset: -150,
          endOffset: -320
        },
        { url: "img/9083-web.jpg",
          startOffset: -50,
          endOffset: -380
        },
        { url: "img/9089-web.jpg",
          startOffset: -80,
          endOffset: -330,
        }
    ];
    SlideData.imageHeight = 350;
    SlideData.imageWidth = 500;

    module.exports = SlideData;
});