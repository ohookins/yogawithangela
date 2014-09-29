/*globals require*/
require.config({
    shim: {

    },
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        'famous-sizeconstraint': '../lib/famous-sizeconstraint/SizeConstraint',
        bootstrap: '../lib/bootstrap/dist/js/bootstrap'
    },
    packages: [

    ]
});
require(['main']);
