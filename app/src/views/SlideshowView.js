/*** SlideshowView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view
    var View = require('famous/core/View');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    var Utility = require('famous/utilities/Utility');
    var jquery = require('jquery');

    // Individual element class
    var TexttitleView = require('views/TexttitleView');

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

    // Define your helper functions and prototype methods here
    function _createImages() {
        this.container = new ContainerSurface({
            size: [1024, 300],
            properties: {
                overflow: 'hidden'
            }
        });

        // Surface for Bootstrap carousel
        this.carousel = new Surface({
            size: [1024, 300],
            content: ''
        });
        this.container.add(this.carousel);

        // Text position with modifier
        this.container.add(new Modifier({
            transform: Transform.translate(0, 50)
        })).add(new TexttitleView());

        // Deferred loading of content
        var url = '/content/text/carousel.html';
        Utility.loadURL(url, function(data) {
            this.carousel.setContent(data);

            // FIXME: This is the mother of all awful hacks
            var i = window.setInterval(function(){
                document.getElementsByClassName('right')[0].click();
            }, 5000);
            window.setTimeout(function() {
                window.clearInterval(i);
            }, 30000);
        }.bind(this));

        this.add(new Modifier({
            transform: Transform.translate(0,0,2),
            origin: [0.5,0.5]
        })).add(this.container);
    }

    module.exports = SlideshowView;
});
