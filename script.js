jQuery(function(){

	//Анимация цветов кнопки в шапке сайта купить и продать сейчас

	let ButtonBuyNow = $('.ButtonBuyNow');
	ButtonBuyNow.on('mouseenter', function(){
			ButtonBuyNow.css({'background-color':'#061e37'});
			$('.ButtonBuyNow a').css({'color':'white'});
	});
	ButtonBuyNow.on('mouseleave', function(){
			ButtonBuyNow.css({'background-color':'white'});
			$('.ButtonBuyNow a').css({'color':'black'});
	});


	let ButtonTryForFree = $('.TryForFree');
	ButtonTryForFree.on('mouseenter', function(){
			ButtonTryForFree.css({'background-color':'#061e37'});
			$('.TryForFree a').css({'color':'white'});
	});
	ButtonTryForFree.on('mouseleave', function(){
			ButtonTryForFree.css({'background-color':'white'});
			$('.TryForFree a').css({'color':'black'});
	});

	let GetStartedCustomers = $('.GetStartedCustomers'); 
	GetStartedCustomers.on('mouseenter', function(){
			GetStartedCustomers.css({'background-color':'#061e37'});
			$('.GetStartedCustomers a').css({'color':'white'});
	});
	GetStartedCustomers.on('mouseleave', function(){
			GetStartedCustomers.css({'background-color':'white'});
			$('.GetStartedCustomers a').css({'color':'black'});
	});
	// Анимация для скрывающегося списка 

	$('.Stasistics').on('click', function(){
		if (!$(this).hasClass('clicked')) { // если класса нет
    		$(this).addClass('clicked'); // добавляем класс
    	 	$(this).animate({
				height: "240",
				duration: "4000"
			});
    	 	$('#Statisticshidetext').fadeIn(300);
    	 	$('#Statisticimgaroundtext').fadeIn(300);
  		} else { // если есть
    		$(this).removeClass('clicked'); // убираем класс
    		$(this).animate({
				height: "45",
				duration: "7000"
			});
			$('#Statisticshidetext').fadeOut(300);
			$('#Statisticimgaroundtext').fadeOut(300);

  		}
	});
	$('.Inbox').on('click', function(){
		if (!$(this).hasClass('clicked')) { // если класса нет
    		$(this).addClass('clicked'); // добавляем класс
    	 	$(this).animate({
				height: "240",
				duration: "4000"
			});
    	 	$('#INBOXhidetext').fadeIn(300);
    	 	$('#INBOXimgaroundtext').fadeIn(300);
  		} else { // если есть
    		$(this).removeClass('clicked'); // убираем класс
    		$(this).animate({
				height: "45",
				duration: "7000"
			});
			$('#INBOXhidetext').fadeOut(300);
			$('#INBOXimgaroundtext').fadeOut(300);

  		}
	});
	$('.Team').on('click', function(){
		if (!$(this).hasClass('clicked')) { // если класса нет
    		$(this).addClass('clicked'); // добавляем класс
    	 	$(this).animate({
				height: "240",
				duration: "4000"
			});
    	 	$('#TEAMhidetext').fadeIn(300);
    	 	$('#TEAMimgaroundtext').fadeIn(300);
  		} else { // если есть
    		$(this).removeClass('clicked'); // убираем класс
    		$(this).animate({
				height: "45",
				duration: "7000"
			});
			$('#TEAMhidetext').fadeOut(300);
			$('#TEAMimgaroundtext').fadeOut(300);
  		}
	});

	//Анимация слайдера
	

	var IndexNow=1;
	var IndexCount=$('.custommers__main-row').children('.customers__row').length;
	var TransformWidth=0;	
	var arrowdown = $('.customers__arrow-down');
	var arrowup = $('.customers__arrow-up');



	arrowup.on('click', function(){
		if (IndexNow==1){
			TransformWidth=-241*(IndexCount);				
			$('.custommers__main-row').css({
				'transform':'translateY(' + TransformWidth + 'px)',
				'transition':'1s'	
			});	
			IndexNow=IndexCount;
		}
		if (IndexNow>1 && IndexNow<=IndexCount){			
			IndexNow--;
			TransformWidth=-241*(IndexNow-1);				
			$('.custommers__main-row').css({
				'transform':'translateY(' + TransformWidth + 'px)',
				'transition':'1s'	
			});
			if (IndexNow<=0){
				IndexNow=1;
			}				
		}		
	});	
	arrowdown.on('click', function(){
		if(IndexNow==IndexCount-1){
			TransformWidth=0;	
			$('.custommers__main-row').css({
				'transform':'translateY(' + TransformWidth + 'px)',
				'transition':'1s'	
			});
			IndexNow=1;
			return;
		}
		if (IndexNow>=1 && IndexNow<IndexCount){
			TransformWidth=-241*(IndexNow);	
			$('.custommers__main-row').css({
				'transform':'translateY(' + TransformWidth + 'px)',
				'transition':'1s'	
			});
			IndexNow++;
		}
	});	

	//Комментарии

	var FirstImage = $('.first-image');
	var SecondImage = $('.second-image');
	var ThirdImage = $('.third-image');

	FirstImage.on('click', function(){
		$('.first-image').css({
			'width':'196px',
			'height': '179px',
			'opacity':'1',
			'transition':'1s',
			'margin-top':'0px'
		});
		SecondImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		ThirdImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		$('.Our-Team__text-bottom-2').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-3').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-1').css({
			'opacity':'1', 
			'transition': '1s'
		});		
	});	


	SecondImage.on('click', function(){
		$('.second-image').css({
			'width':'196px',
			'height': '179px',
			'opacity':'1',
			'transition':'1s',
			'margin-top':'0px'
		});
		FirstImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		ThirdImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		$('.Our-Team__text-bottom-1').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-3').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-2').css({
			'opacity':'1', 
			'transition': '1s'
		});		
	});	


	ThirdImage.on('click', function(){
		$('.third-image').css({
			'width':'196px',
			'height': '179px',
			'opacity':'1',
			'transition':'1s',
			'margin-top':'0px'
		});
		FirstImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		SecondImage.css({
			'width':'116px',
			'height': '115px',
			'opacity':'0.4',
			'transition':'1s',
			'margin-top':'41px'
		});
		$('.Our-Team__text-bottom-1').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-2').css({
			'opacity': '0',
		});
		$('.Our-Team__text-bottom-3').css({
			'opacity':'1', 
			'transition': '1s'
		});		
	});		
});

	