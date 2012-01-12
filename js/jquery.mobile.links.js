//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Simple class additions for links.
//>>label: Link Classes

define( [ "jquery" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");

$( document ).bind( "pagecreate create", function( e ){
	
	//links within content areas
	$( e.target )
		.find( "a" )
		.not( ".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')" )
		.addClass( "ui-link" );

});

//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
