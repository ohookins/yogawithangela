/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');

    // Image data
    var SlideData = require('data/SlideData');

    // Individual element class
    var SlideView = require('views/SlideView');

    // Constructor function for our SlideshowView class
    function SlideshowView() {
        // Applies View's constructor function to SlideshowView class
        View.apply(this, arguments);

        this.currentImage = 0;

        _createImages.call(this);
    }

    // Establishes prototype chain for SlideshowView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    // Default options for SlideshowView class
    SlideshowView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here
    SlideshowView.prototype.showSlide = function(slideIndex) {
        slideIndex = slideIndex % SlideData.imageURLs.length;
        var slideView = new SlideView(SlideData.imageURLs[slideIndex]);

        // Trigger the next slide in the slideshow
        slideView.on('done', function(event) {
            this.showSlide(slideIndex + 1)
        }.bind(this));
        this.renderNode.set(slideView);
    };

    function _createImages() {    
        var container = new ContainerSurface({
            size: [1024, 300],
            properties: {
                overflow: 'hidden'
            }
        });

        // Black background behind photos
        this.add(new Surface({
            size: [undefined, undefined],
            classes: ["black-bg"]
        }));

        // RenderNode for swapping content
        this.renderNode = new RenderNode();
        container.add(this.renderNode);

        this.showSlide(0);

        this.add(new Modifier({
            transform: Transform.translate(0,0,1),
            origin: [0.5,0.5]
        })).add(container);
    }

    module.exports = SlideshowView;
});