/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var RenderController = require('famous/views/RenderController');

    // Image data
    var SlideData = require('data/SlideData');

    // Individual element class
    var SlideView = require('views/SlideView');

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
        var container = new ContainerSurface({
                size: [1024, 300],
                properties: {
                    overflow: 'hidden'
                }
            }),
            renderController = new RenderController();

        // Black background behind photos
        this.add(new Surface({
            size: [undefined, undefined],
            classes: ["black-bg"]
        }));

        // Add the image to the viewport container
        var slideView = new SlideView(SlideData.imageURLs[3]);
        container.add(slideView);

        this.add(new Modifier({
            transform: Transform.translate(0,0,1),
            origin: [0.5,0.5]
        })).add(container);
    }

    module.exports = SlideshowView;
});