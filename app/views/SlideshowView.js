/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require("famous/transitions/Transitionable");
    var TransitionableTransform = require ('famous/transitions/TransitionableTransform');
    var Transform = require('famous/core/Transform');

    // Constructor function for our SlideshowView class
    function SlideshowView() {
        // Applies View's constructor function to SlideshowView class
        View.apply(this, arguments);

        _createImages.call(this);
    }

    // Establishes prototype chain for SlideshowView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    // Default options for SlideshowView class
    SlideshowView.DEFAULT_OPTIONS = {};

    // Private functions
    function _createImages() {
        var images = [
            "img/9065-web.jpg",
            "img/9078-web.jpg",
            "img/9081-web.jpg",
            "img/9083-web.jpg",
            "img/9089-web.jpg"
            ],
            imageWidth = 500,
            imageHeight = 350;

        // Black background behind photos
        this.add(new Surface({
            size: [undefined, undefined],
            classes: ["black-bg"]
        }));

        // Image creation and positioning
        for (var i = 0; i < images.length; i++) {
            // Load the image into a surface
            var imageSurface = new ImageSurface({
                size: [imageWidth, imageHeight]
            })
            imageSurface.setContent(images[i]);

            // Set up a smooth transition left along the x-axis
            var slideLeftWithShift = new TransitionableTransform();
            slideLeftWithShift.setTranslate(
                [-imageWidth*2, 0, 0],
                {duration: 60000}
            );
            var slideModifier = new Modifier({
                transform: slideLeftWithShift
            });

            // Set up its initial placement on the x-axis
            var posModifier = new Modifier({
                transform: Transform.translate(i*imageWidth, 0, 0)
            });

            this.add(posModifier).add(slideModifier).add(imageSurface);
        }
    }

    module.exports = SlideshowView;
});