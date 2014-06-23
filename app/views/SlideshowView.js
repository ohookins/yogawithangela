/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Scrollview = require('famous/views/Scrollview');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require("famous/transitions/Transitionable");
    var TransitionableTransform = require ('famous/transitions/TransitionableTransform');
    var Transform = require('famous/core/Transform');

    // Image data
    var SlideData = require('data/SlideData');

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
        // Black background behind photos
        this.add(new Surface({
            size: [undefined, undefined],
            classes: ["black-bg"]
        }));

        // Image creation for the scrollview
        var surfaces = [];
        for (var i = 0; i < SlideData.imageURLs.length; i++) {
            // Load the image into a surface
            var imageSurface = new ImageSurface({
                size: [SlideData.imageWidth, SlideData.imageHeight]
            })
            imageSurface.setContent(SlideData.imageURLs[i]);

            surfaces.push(imageSurface);
        }

        // Create the scrollview
        scrollview = new Scrollview({direction:0});
        scrollview.sequenceFrom(surfaces);

        // Set up the scrolling
        var time = (new Date).getTime();
        scrollview._scroller.positionFrom(function(){
            var position = (((new Date).getTime() - time) / 70.0) % ((SlideData.imageURLs.length*SlideData.imageWidth) - this.getSize()[0] - 220);
            return position;
        });
        this.add(scrollview);
    }

    module.exports = SlideshowView;
});