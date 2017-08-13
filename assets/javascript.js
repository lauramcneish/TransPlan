
$(document).ready(function() {

	$('select').niceSelect();

	//estimator-------------------------


	var iPeople;
	var iDays;
	var sOption;
	var sOptionName;

	$('#show-transport').on('click',function(e){
		e.preventDefault();

		$('#step_2>div').addClass('disabled');

		iPeople = parseInt($('[name=people]').val());
		iDays = parseInt($('[name=days]').val());

		// console.log(iPeople);
		// console.log(iDays);

		//small cars
		if((iPeople>=1) && (iPeople<=2) && (iDays>=1) && (iDays<=10)){

			//remove disabled for small car
			$('#small_car').removeClass('disabled');
		}

		//motorcycle
		if((iPeople==1) && (iDays>=1) && (iDays<=5)){

			//remove disabled for small car
			$('#motorcycle').removeClass('disabled');
		}
			//large car
		if((iPeople>=1) && (iPeople<=5) && (iDays>=3) && (iDays<=10)){

			//remove disabled for small car
			$('#large_car').removeClass('disabled');
		}
			//Motor Home
		if((iPeople>=2) && (iPeople<=6) && (iDays>=2) && (iDays<=15)){

			//remove disabled for small car
			$('#large_car').removeClass('disabled');
		}


		///select transport

		$('.transport_option').not('.disabled').on('click',function(){

			$('.transport_option').not(this).removeClass('selected');
			$(this).addClass('selected');
			$('#add_distance').prop('disabled',false);

			sOption = $(this).attr('id');
			sOptionName = $(this).data('name');

			//Calculation
			$('.calculate').on('click',function(e){
				e.preventDefault();
				console.log('hi')
					var iPeople = parseInt($('[name=people]').val());
					var iDays = parseInt($('[name=days]').val());

					var iMotorcycleCost = iDays * 109;
					var iSmallCarCost = iDays * 129;
					var iLargeCarCost = iDays * 144;
					var iMotorhome = iDays * 200;

					var iDistances = parseInt($('.distances').not('.hidden').val());

					var iMotorcycleFuel = (iDistances * 0.037) * 1.86;
					var iSmallCarFuel = (iDistances * 0.085) * 1.86;
					var iLargeCarFuel = (iDistances * 0.097) * 1.86;
					var iMotorhomeFuel = (iDistances * 0.17) * 1.86;

					var iMotorcycleTotal = iMotorcycleCost + iMotorcycleFuel;
					var iSmallCarTotal = iSmallCarCost + iSmallCarFuel;
					var iLargeCarTotal = iLargeCarCost + iLargeCarFuel;
					var iMotorhomeTotal = iMotorhome + iMotorhomeFuel;

					console.log(iSmallCarTotal);
					console.log(sOption);

					var iTotalCost
					if(sOption == 'motorcycle'){
						iTotalCost = iMotorcycleTotal;
					}
					if(sOption == 'small_car'){
						iTotalCost = iSmallCarTotal;
					}
					if(sOption == 'large_car'){
						iTotalCost = iLargeCarTotal;
					}
					if(sOption == 'motorhome'){
						iTotalCost = iMotorhomeTotal;
					}


					$('#final-transport').html(sOptionName);
					$('#final-distance').html(iDistances + ' km');
					$('#final-cost').html('$' + iTotalCost.toFixed(2));
					

			});



		});

		//City - Destination Activator

		var sCity
		var iDestination

		$('[name=city]').on('change',function(){
			sCity = $(this).val();

			$('.distances').next().addClass('hidden');

			$('[name='+sCity+']').next().removeClass('hidden');
			console.log($('[name='+sCity+']'));


		});



	});

	//pagination----------------------
	$('#start_button').on('click',function(){
		$('.wrap').css('left','-100vw');
		
	});

	$('.section2 .fa').on('click',function(){
		$('.wrap').css('left','0');
		
		
	});

	$('#show-transport').on('click',function(){
		$('.wrap').css('left','-200vw');
	});
	$('.section3 .fa').on('click',function(){
		$('.wrap').css('left','-100vw');
	});

	$('#submit_2').on('click',function(){
		$('.wrap').css('left','-300vw');
	});

	$('.section4 .fa').on('click',function(){
		$('.wrap').css('left','-200vw');
	});

	$('.calculate').on('click',function(){
		$('.wrap').css('left','-400vw');
	});



	$('#start_button1').on('click',function(){
		$('.wrap').css('left','-100vw');
	});

	$('.section5 .fa').on('click',function(){
		$('.wrap').css('left','-300vw');
	});

	
});














