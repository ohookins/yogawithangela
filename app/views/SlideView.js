/*** SlideView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transitionable = require("famous/transitions/Transitionable");

    // Constructor function for our SlideView class
    function SlideView(image) {

        // Applies View's constructor function to SlideView class
        View.apply(this, arguments);

        _createImage.call(this, image);
    }

    // Establishes prototype chain for SlideView class to inherit from View
    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    // Default options for SlideView class
    SlideView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here
    SlideView.prototype.transitionComplete = function() {
        window.console.log("transition complete");
        var faderTrans = new Transitionable(1.0);
        faderTrans.set(0.0, {
            duration: 1000
        });

        this.faderModifier.opacityFrom(function() {
            return faderTrans.get();
        });
    };

    function _createImage(image) {
        var startOffset = -150,
            endOffset = -350,
            imageSurface = new ImageSurface({
                size: [1024, 700]
            });
        imageSurface.setContent(image);

        // Set up the fade-in transition and modifier
        var faderTrans = new Transitionable(0.0);
        faderTrans.set(1.0, {
            duration: 2000
        });
        this.faderModifier = new Modifier();
        this.faderModifier.opacityFrom(function() {
            return faderTrans.get();
        });
        
        // Set up the position state modifier so we can add a call back to the
        // end of the transition.
        var posModifier = new StateModifier();
        posModifier.setTransform(
            Transform.translate(0, endOffset, 0),
            {
                curve: 'easeInOut',
                duration: 10000
            },
            this.transitionComplete.bind(this)
        );

        this.add(this.faderModifier).add(posModifier).add(imageSurface);
    };

    module.exports = SlideView;
});