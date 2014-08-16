define(function(require, exports, module) {
    var SlideData = {};

    SlideData.imageURLs = [
        { url: "/content/images/9065-web.jpg",
          startOffset: -150,
          endOffset: -300
        },
        { url: "/content/images/9078-web.jpg",
          startOffset: -100,
          endOffset: -270
        },
        { url: "/content/images/9081-web.jpg",
          startOffset: -150,
          endOffset: -320
        },
        { url: "/content/images/9083-web.jpg",
          startOffset: -50,
          endOffset: -380
        },
        { url: "/content/images/9089-web.jpg",
          startOffset: -80,
          endOffset: -330,
        }
    ];
    SlideData.imageHeight = 350;
    SlideData.imageWidth = 500;

    module.exports = SlideData;
});