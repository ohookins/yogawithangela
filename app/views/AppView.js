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

        this.layout = new HeaderFooterLayout({
            headerSize: 300,
            footerSize: 35
        });

        this.layout.header.add(new SlideshowView());
        this.layout.content.add(new ContentView());
        this.layout.footer.add(new FooterView());

        this.buttons = new ButtonView();
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    module.exports = AppView;
});