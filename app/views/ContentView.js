/*** ContentView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // Constructor function for our ContentView class
    function ContentView() {
        // Applies View's constructor function to ContentView class
        View.apply(this, arguments);

        var content = "Endorphin Yoga: ";
        content += "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        // Background
        this.add(new Surface({
            size: [undefined, undefined],
            classes: ["grey-bg"]
        }));

        // Text
        var contentSurface = new Surface({
            size: [500, 100],
            classes: ["grey-bg"],
            content: content,
            properties: {
                textAlign: "center"
            }
        });

        // Center it in the content view
        var centerModifier = new StateModifier({
            origin: [0.5, 0.5]
        });
        this.add(centerModifier).add(contentSurface);
    }

    // Establishes prototype chain for ContentView class to inherit from View
    ContentView.prototype = Object.create(View.prototype);
    ContentView.prototype.constructor = ContentView;

    // Default options for ContentView class
    ContentView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = ContentView;
});