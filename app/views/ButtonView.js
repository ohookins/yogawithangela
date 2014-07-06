/*** ButtonView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require('famous/transitions/Transitionable');

    // Constructor function for our ButtonView class
    function ButtonView() {

        // Applies View's constructor function to ButtonView class
        View.apply(this, arguments);

        this.horizOffset     = -400;
        this.offsetIncrement = 200;
        this.vertOffset      = 15;

        for (var i = 0; i < 5; i++) {
            _createButton.call(this, i);
        }
    }

    // Establishes prototype chain for ButtonView class to inherit from View
    ButtonView.prototype = Object.create(View.prototype);
    ButtonView.prototype.constructor = ButtonView;

    // Default options for ButtonView class
    ButtonView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here
    function _createButton(buttonID) {
        var buttonHorizOffset = this.horizOffset + buttonID*this.offsetIncrement,
            initialVertOffset = -buttonID*100 - 200,
            finalVertOffset   = this.vertOffset;

        var transitionable = new Transitionable(initialVertOffset);
        transitionable.set(
            finalVertOffset,
            {
                duration: 3000,
                curve: 'easeInOut'
            }
        );

        var modifier = new Modifier({
            origin: [0.5, 0.5],
            transform: function() { return Transform.translate(buttonHorizOffset, transitionable.get()); }
        });

        var button = new Surface({
            content: "button " + buttonID,
            size: [100, 100],
            classes: ["black-bg"],
            properties: {
                textAlign: "center"
            }
        });

        this.add(modifier).add(button);
    }

    module.exports = ButtonView;
});