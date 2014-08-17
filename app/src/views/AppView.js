/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');

    var SlideshowView = require('views/SlideshowView');
    var ContentView = require('views/ContentView');
    var FooterView = require('views/FooterView');
    var ButtonView = require('views/ButtonView');

    function AppView() {
        View.apply(this, arguments);
        var contentView = new ContentView();

        this.layout = new HeaderFooterLayout({
            headerSize: 300,
            footerSize: 35
        });

        this.layout.header.add(new SlideshowView());
        this.layout.content.add(contentView);
        this.layout.footer.add(new FooterView());

        this.buttonView = new ButtonView();
        // Allow the content view to react to events from the ButtonView
        this.buttonView.on('activateContent', function(m) {
            contentView.setContentFor(m);
        });
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    module.exports = AppView;
});
