$(function(){
	$('.produce .produce-ul li .iconfont').click(function(){
		$('.produce').hide();
	});
	$("#click a").click(function(){
		$(".cont-d12").delay(3000).css('display','block');
		$("#click").css('display','none');
	});
	$(window).scroll(function(){
		var tp=$(document).scrollTop();
		var hg=$('.content-imglb').height();
		if(tp>hg){
			$('.content-container').addClass('div-bg');
		}else{
			$('.content-container').removeClass('div-bg');
		}
	});
});
