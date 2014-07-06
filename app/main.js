/*** main.js ***/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var AppView = require('views/AppView');
	var mainContext = Engine.createContext();

    // instantiates AppView
    var appView = new AppView();
    mainContext.add(appView.layout);
    mainContext.add(appView.buttons);
});