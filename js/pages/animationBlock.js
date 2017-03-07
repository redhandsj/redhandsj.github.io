/**
 * 透明にしながら折りたたむ
 */
$(document).on('click', "[id^=animate-title]" , function(){
    $('#animate-block' + $(this).attr("id").slice(-2)).animate( { height: 'toggle', opacity: 'toggle' }, 'slow' );
    //alert($('#animate-block' + $(this).attr("id").slice(-2)).is(':visible'));
});
/*
$( function() {
  //alert('test_annimationBlock($(function()))');
//  $( '#animate-title' ) . click( function() {
//    $( '#animate-block' ) . animate( { height: 'toggle', opacity: 'toggle' }, 'slow' );
//  });
  //$( "[id^=animate-block]" ).hide();
  //$(this).queue([]);      // queueを空にする
  //alert($( '#animate-block01' ).is(':visible'));
  if ($('#animate-title01')[0]) {
	    alert('Exist');
	} else {
	    alert('No exist');
	}
  $( "[id^=animate-title]" ).click( function() {
	//alert($(this).attr("id"));
	//alert('#animate-block' + $(this).attr("id").slice(-2));
    $('#animate-block' + $(this).attr("id").slice(-2)).animate( { height: 'toggle', opacity: 'toggle' }, 'slow' );
    alert($('#animate-block' + $(this).attr("id").slice(-2)).is(':visible'));
  });
});
*/