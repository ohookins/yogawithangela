/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        'famous-sizeconstraint': '../lib/famous-sizeconstraint/SizeConstraint'
    },
    packages: [

    ]
});
require(['main']);
