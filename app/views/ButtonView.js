/*** ButtonView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require('famous/transitions/Transitionable');

    // Constructor function for our ButtonView class
    function ButtonView() {

        // Applies View's constructor function to ButtonView class
        View.apply(this, arguments);

        this.horizOffset     = -400;
        this.offsetIncrement = 200;
        this.vertOffset      = 315;
        this.buttonLabels    = [
            "About Angela",
            "About Endorphin",
            "Location",
            "Schedule",
            "Impressum"
        ];
        this.buttons = [];
        this.modifiers = [];

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
            initialVertOffset = 150 -buttonID*50,
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
            origin: [0.5, 0],
            transform: function() { return Transform.translate(buttonHorizOffset, transitionable.get()); }
        });
        this.modifiers.push(modifier);

        var button = new Surface({
            content: this.buttonLabels[buttonID],
            size: [195, 30],
            classes: ["button"],
            properties: {
                textAlign: "center"
            }
        });
        this.buttons.push(button);

        // Make the button look clicked, and unclick the others
        button.on('click', function() {
            // Reset opacity on all buttons
            this.modifiers.forEach(function(m) {
                m.opacityFrom(1.0);
            });
            // Remove clicked pointer type
            this.buttons.forEach(function(b) {
                b.removeClass("button-clicked");
            });

            // Now make the current button look clicked.
            modifier.opacityFrom(0.5);
            button.addClass("button-clicked");
        }.bind(this));

        this.add(modifier).add(button);

        // When the page is loaded, the first button is always clicked
        if (buttonID === 0) {
            button.emit('click');
        }
    }

    module.exports = ButtonView;
});