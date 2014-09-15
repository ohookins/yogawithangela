/*** ContentView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Utility = require('famous/utilities/Utility');

    var TextData = require('data/TextData');

    // Constructor function for our ContentView class
    function ContentView() {
        // Applies View's constructor function to ContentView class
        View.apply(this, arguments);

        // Backgrounds
        this.add(new StateModifier({
            origin: [0.5, 0.5]
        })).add(new Surface({
            size: [1024, undefined],
            classes: ['grey-bg']
        }));

        // Text
        this.contentSurface = new Surface({
            size: [512, undefined],
            classes: ['grey-bg', 'scrollable'],
            content: '',
            properties: {
                textAlign: 'center'
            }
        });
        this.contentSurface.originalCommit = this.contentSurface.commit;
        this.contentSurface.commit = function(context) {
            context.size = [context.size[0], context.size[1]-50];
            return this.originalCommit(context);
        };

        // Center it in the content view
        var centerModifier = new StateModifier({
            origin: [0.5, 1.0]
        });
        this.add(centerModifier).add(this.contentSurface);

        // Deferred loading of content
        var url = '/content/text/' + TextData['About Angela'] + '.html';
        Utility.loadURL(url, function(data) {
            this.contentSurface.setContent(data);
        }.bind(this));

    }

    // Establishes prototype chain for ContentView class to inherit from View
    ContentView.prototype = Object.create(View.prototype);
    ContentView.prototype.constructor = ContentView;

    // Default options for ContentView class
    ContentView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here
    ContentView.prototype.setContentFor = function(section) {
        // FIXME: Hacky workaround for schedule size
        this.contentSurface.setContent('');
        if (TextData[section] === 'schedule')
            this.contentSurface.setSize([1024, undefined]);
        else
            this.contentSurface.setSize([512, undefined]);

        // Deferred loading of content
        var url = '/content/text/' + TextData[section] + '.html';
        Utility.loadURL(url, function(data) {
            this.contentSurface.setContent(data);
        }.bind(this));
    };

    module.exports = ContentView;
});
