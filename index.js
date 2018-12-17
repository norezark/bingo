let size = 10;
$(() => {
	let numbers = [];
	
	$('#table').addClass('table');
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			$('<div>', {
				class: 'cell',
				text: i * 10 + j
			}).appendTo('.table').css('visibility', 'hidden');
			
			numbers.push(i * 10 + j);
		}
	}
	for (let i = numbers.length - 1; i > 0; i--) {
		const r = Math.floor(Math.random() * (i + 1));
		const tmp = numbers[i];
		numbers[i] = numbers[r];
		numbers[r] = tmp;
	}
	
	$('#number').addClass('number').html('0');
	
	let enChusen = false;
	window.addEventListener('keypress', (e) => {
		if (e.keyCode === 32 && !enChusen) {
			enChusen = true;
			$('#text').hide();
			const timer = setInterval(() => {
				$('.number').html(Math.floor(Math.random() * 100));
			}, 20);
			setTimeout(() => {
				clearInterval(timer);
				let num;
				if (numbers.length === 0) {
					num = -1;
				}
				else {
					num = numbers.pop();
				}
				$('.number').html(num);
				$('.table > .cell:nth-child(' + (num + 1) + ')').css('visibility', 'unset');
				enChusen = false;
			}, 1000);
		}
	});
});
