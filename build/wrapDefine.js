/**
 * Wraps the build output in the proper wrapper, making sure to remove
 * any internal define() calls and replacing them with def() calls that
 * just pass in the jQuery object.
 */
var fs = require( 'fs' ),
	path = require( 'path' ),
	buildDir = __dirname,
	start = fs.readFileSync( path.join( buildDir, 'wrap.start' ), 'utf8' ),
	end = fs.readFileSync( path.join( buildDir, 'wrap.end' ), 'utf8' ),
	defineRegExp = /define\([^\{]*function/g;

function wrapDefine( contents ) {
	return start + contents.replace( defineRegExp, 'def(function' ) + end;    
}

module.exports = wrapDefine;
