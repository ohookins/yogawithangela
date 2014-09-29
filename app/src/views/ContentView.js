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
            size: [768, undefined],
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
            this.contentSurface.setSize([768, undefined]);

        // Deferred loading of content
        var url = '/content/text/' + TextData[section] + '.html';
        Utility.loadURL(url, function(data) {
            this.contentSurface.setContent(data);

            // Activate Twitter feed
            // FIXME: This is inherently shit and broken, noticeable if you
            // click away from the contact page and then click to it again.
            // Should put all info tabs in separate renderables that are
            // swapped to the front and back but never removed from the DOM.
            if (TextData[section] === 'contact')
                this.activateTwitterFeed();
        }.bind(this));
    };

    ContentView.prototype.activateTwitterFeed = function() {
        // This is just copied and pasted from Twitter's widget generator,
        // and un-minified a bit for readability.
        function twitter(d,s,id) {
            var js;
            var p = /^http:/.test(d.location) ? 'http' : 'https';

            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p+'://platform.twitter.com/widgets.js';
                document.head.appendChild(js);
            }
        }
        twitter(document,'script','twitter-wjs');
    };

    module.exports = ContentView;
});
