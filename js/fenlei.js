$(function(){
	$('#li3').click(function(){
		$('.head-u2').toggle( function () {
		    $(this).addClass("selected");
		  },
		  function () {
		    $(this).removeClass("selected");
		  }
);
	});
});