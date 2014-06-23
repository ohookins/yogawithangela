/*** FooterView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');

    // Constructor function for our FooterView class
    function FooterView() {
        // Applies View's constructor function to FooterView class
        View.apply(this, arguments);

        this.add(new Surface({
            size: [undefined, 35],
            content: "Copyright © 2014, Angela Collins",
            classes: ["black-bg"],
            properties: {
                lineHeight: "35px",
                textAlign: "center"
            }
        }));
    }

    // Establishes prototype chain for FooterView class to inherit from View
    FooterView.prototype = Object.create(View.prototype);
    FooterView.prototype.constructor = FooterView;

    // Default options for FooterView class
    FooterView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = FooterView;
});