$('#addTodo')
.on('click', function(){
	const inputTodo = $('input').val();
	$('#todoList')
	.append('<li><input type="checkbox">' + inputTodo + '</li>');

	$('input').val('');
});

$(document)
.on('change', 'input[type=checkbox]', function(){
	if($(this).is(':checked')){
		$(this).parent().css({
			'text-decoration': 'underline',
			'background-color': '#ff0',
			'color': '#f00'
		});
	} else {
		$(this).parent().css({
			'text-decoration': 'none',
			'background-color': 'transparent',
			'color': '#000'
		});
	}
});