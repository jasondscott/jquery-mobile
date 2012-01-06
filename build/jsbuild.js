var fs = require('fs'),
	requirejs = require( '../external/r.js/dist/r' ),
	wrapDefine = require( './wrapDefine' );
	out = process.argv[2];

requirejs.optimize({
	baseUrl: 'js',
	include: [ 'jquery.mobile', 'jquery.mobile.init' ],
	exclude: [ 'jquery','order' ],
	out: out,
	pragmasOnSave: {
		jqmBuildExclude: true
	},
	skipModuleInsertion: true,
	optimize: 'none',
	logLevel: 0
}, function ( buildResultText ) {    
	fs.writeFile( out, wrapDefine( fs.readFileSync( out, 'utf8' ) ), 'utf8' );
});

