/*** SlideView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require("famous/transitions/Transitionable");

    // Constructor function for our SlideView class
    function SlideView(image) {

        // Applies View's constructor function to SlideView class
        View.apply(this, arguments);

        // Constants
        this.imageURL           = image.url;
        this.startOffset        = image.startOffset;
        this.endOffset          = image.endOffset;
        this.fadeInDuration     = 1000;
        this.slideDuration      = 5000;
        this.fadeOutDuration    = 1000;
        

        _createImage.call(this);
    }

    // Establishes prototype chain for SlideView class to inherit from View
    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    // Default options for SlideView class
    SlideView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here
    SlideView.prototype.fadeIn = function() {
        var faderTrans = new Transitionable(0.0);
        faderTrans.set(
            1.0,
            {
                duration: this.fadeInDuration
            },
            this.slide.bind(this)
        );

        this.dynamicModifier.opacityFrom(function() {
            return faderTrans.get();
        });
    };

    SlideView.prototype.slide = function() {
        var slideTrans = new Transitionable(0);
        slideTrans.set(
            this.endOffset - this.startOffset,
            {
                duration: this.slideDuration,
                curve: 'easeInOut'
            },
            function() { this._eventOutput.emit('slideDone', this.imageName) }.bind(this)
        );

        this.dynamicModifier.transformFrom(function() {
            return Transform.translate(0, slideTrans.get(), 0);
        });
    };

    SlideView.prototype.fadeOut = function() {
        var faderTrans = new Transitionable(1.0);
        faderTrans.set(
            0.0,
            {
                duration: this.fadeOutDuration
            },
            function() { this._eventOutput.emit('fadeOutDone', this.imageName) }.bind(this)
        );

        this.dynamicModifier.opacityFrom(function() {
            return faderTrans.get();
        });
    };

    function _createImage() {
        var imageSurface = new ImageSurface({
                size: [1024, 700]
            });
        imageSurface.setContent(this.imageURL);

        // Initial translation from which later transitions take place
        var posModifier = new Modifier({
            transform: Transform.translate(0, this.startOffset, 0)
        });

        this.dynamicModifier = new Modifier();
        this.add(posModifier).add(this.dynamicModifier).add(imageSurface);
        this.fadeIn();
    };

    module.exports = SlideView;
});