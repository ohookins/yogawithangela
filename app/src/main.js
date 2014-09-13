/*** main.js ***/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var AppView = require('views/AppView');
	var mainContext = Engine.createContext();

	// Set a black background for everything
	mainContext.add(new Surface({
		classes: ['main']
	}));

    // instantiates AppView
    var appView = new AppView();
    mainContext.add(appView.layout);
    mainContext.add(appView.buttonView);
});
