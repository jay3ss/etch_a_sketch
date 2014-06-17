$(document).ready(function() {
	GRID_LIMIT = 63;
	function genDivs(num) {
		
		var valid = checkInput(num, GRID_LIMIT);
		
		if (valid) {
			alert('Go ahead and draw.');
			for(var i =0; i < num; i++) {
				$('#canvas').append('<div class="row">');
				for(var j = 0; j <num; j++) {
					$('.row').last().append('<div class="pixel"></div>');
				}
				$('#canvas').append('</div>');
			}
			console.log('Grid created');
		} else {
			alert('Grid is too large. Please try again.');
		}
	}
	
	$('div').on('mouseenter', '.pixel', function(){
		console.log('Mouse entered');
		$(this).css('background-color', 'black');
	});

	$('#button').click(function() {
		var size = $('input[name=input]').val();
		genDivs(size);
	});
	
	function checkInput(input, num) {
		if(input > num) {
			return false;
		} else {
			return true;
		}
	}
});