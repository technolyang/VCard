// JavaScript Document
$(function (){
//加载页面
	$("body").queryLoader2({
        barColor: "#ebebeb",
        backgroundColor: "#262626",
        percentage: true,
        barHeight: 20,
        completeAnimation: "grow",
        minimumTime: 1000
    });
	
//导航切换界面
	$('body>a').click(function (){
		if(!$('#layout').is(':animated')){
			$('.nav').removeClass('current');
			$(this).addClass('current');
			switch($(this).attr('href')){
				case '#profile':
				$('#layout').animate({left:'0',top:'0'},500);
				break;
				case '#portfolio':
				$('#layout').animate({left:'-100%',top:'0'},500);
				break;
				case '#resume':
				$('#layout').animate({left:'0',top:'-100%'},500);
				break;
				case '#contact':
				$('#layout').animate({left:'-100%',top:'-100%'},500);
				break;
			}
		}
		return false;
	});

//经历选项卡
	$('.resume a').click(function (){
		$('.resume a').removeClass('current');
		$(this).addClass('current')
		switch($(this).attr('href')){
			case '#edu':
			$('#work').css({display:'none'});
			$('#edu').css({display:'block'});
			break;
			case '#work':
			$('#edu').css({display:'none'});
			$('#work').css({display:'block'});
			break;
		}
		return false;
	});
	
//作品滚动条
	$('#scrollbar1').tinyscrollbar();

//作品分类变化
	var $data=$('.products').clone(); 
	$('.portfolio_nav a').click(function (){		
		var sId=$(this).attr('id');
		if(sId=='all'){
			var $source=$data.find('li');
		}else{
			var $source=$data.find('li[class='+sId+']');
		}
		$('.products').quicksand($source,{
			attribute:'id'
		},function (){
			$('#scrollbar1').tinyscrollbar_update();
		});
	});	
	
//太极层
	$('.taiji,.info,.info *').mouseover(function (){
		$('.taiji').css({transition:'all 1s ease-in-out',transform:'rotate(180deg)',opacity:'0',zIndex:'0'});
	});
	$('.info').mouseout(function (){
		$('.taiji').css({transition:'all 1s ease-in-out',transform:'rotate(0deg)',opacity:'1',zIndex:'3'});
	});


//社交提示
	$('.social .chinese').tipTip({ attribute:'alt',defaultPosition:'top'});
	$('.social .global').tipTip({ attribute:'alt'});
	
});