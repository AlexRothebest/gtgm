function fillUpBackground() {
	let lightBlockSize = 25,
		lightSize = 15,

		numberX = parseInt(window.innerWidth * 0.35 / lightBlockSize),
		numberY = parseInt(window.innerHeight / lightBlockSize),

		newLightBlock;

	for (let backgroundBlock of $('.background-block').toArray()) {
		backgroundBlock = $(backgroundBlock);

		backgroundBlock.html('');

		for (let x = 0; x < numberX; x++) {
			for (let y = 0; y < numberY; y++) {
				newLightBlock = $('<div></div>')
				.addClass('light-block')
				.css({
					position: 'absolute',
					top: y * lightBlockSize + 'px',
					width: lightBlockSize,
					height: lightBlockSize
				})
				.append(
					$('<div></div>').addClass('light')
					.css({
						margin: parseInt((lightBlockSize - lightSize) / 2) + 'px',
						width: lightSize + 'px',
						height: lightSize + 'px'
					})
				);

				(x < numberX / 2) ? newLightBlock.css('left', x * lightBlockSize + 'px') : newLightBlock.css('right', (numberX - x - 1) * lightBlockSize + 'px');

				backgroundBlock.append(newLightBlock);
			}
		}
	}
}


$(document).ready(function() {
	fillUpBackground();


	$(window).resize(fillUpBackground);
});