/*** TexttitleView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require('famous/transitions/Transitionable');

    // Constructor function for our TexttitleView class
    function TexttitleView() {

        // Applies View's constructor function to TexttitleView class
        View.apply(this, arguments);

        // Static position translation to put it in front
        var position = new Modifier({
            transform: Transform.translate(0, 0, 2)
        });

        // Smooth opacity transition
        var transitionable = new Transitionable(0.0);
        transitionable.set(0.8, {duration: 3000});
        var opacity = new Modifier();
        opacity.opacityFrom(transitionable);

        var surface = new Surface({
            size: [undefined, undefined],
            content: '<h1>Endorphin Yoga</h1>',
            classes: ['medium-grey'],
            properties: {
                textAlign: 'center'
            }
        });
        this.add(position).add(opacity).add(surface);
    }

    // Establishes prototype chain for TexttitleView class to inherit from View
    TexttitleView.prototype = Object.create(View.prototype);
    TexttitleView.prototype.constructor = TexttitleView;

    // Default options for TexttitleView class
    TexttitleView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = TexttitleView;
});
