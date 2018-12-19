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
	
	let enWait = true;
	let timer;
	window.addEventListener('keydown', (e) => {
			if(e.keyCode === 32){
				if (enWait) {
					enWait = false;
					$('#text').hide();
					timer = setInterval(() => {
						$('.number').html(Math.floor(Math.random() * 100));
					}, 20);
				} else {
					enWait = true;
					clearInterval(timer);
					let num;
					if (numbers.length === 0) {
						num = -1;
					} else {
						num = numbers.pop();
					}
					$('.number').html(num);
					$('.table > .cell:nth-child(' + (num + 1) + ')').css('visibility', 'unset');
				}
			}
	});
});
