$( document ).ready( function() {
    FrameSize();


    $ ( '.screen' ).mCustomScrollbar( {
	mouseWheel:true,
	scrollButtons:{
	    enable:false
	},
	advanced:{
	    updateOnBrowserResize:true,
	    updateOnContentResize:true
	}
    } );

  

} );

$( window ).resize( function() {
    FrameSize();

} );


function FrameSize() {
    iWindowHeight = $( window ).height();
    iFrameBorderTopHeight = $ ( '.frame' ).css( 'padding-top' ).replace('px','');
    iFrameBorderBottomHeight = $ ( '.frame' ).css( 'padding-bottom' ).replace('px','');
    ScreenSizeHeight =  iWindowHeight - iFrameBorderTopHeight - iFrameBorderBottomHeight;

    $ ( '.screen, .screen__inner' ).height ( ScreenSizeHeight  - 34 );

    $ ( '.panel' ).height ( ScreenSizeHeight  - 34 );

    var navHeight =  $( '.nav' ).height();
    $( '.nav' ).css ('margin-top', - (navHeight /2 ));


}






