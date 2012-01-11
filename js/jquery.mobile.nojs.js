/*
* "nojs" plugin - class to make elements hidden to A grade browsers
*/

//>>description: Adds class to make elements hidden to A grade browsers
//>>label: “nojs” Classes
define( [ "jquery" ], function( $ ) {

$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='nojs')", e.target ).addClass( "ui-nojs" );
	
});

});
