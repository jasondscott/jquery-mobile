//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Adds class to make elements hidden to A grade browsers
//>>label: “nojs” Classes

define( [ "jquery" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");

$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='nojs')", e.target ).addClass( "ui-nojs" );
	
});

//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
