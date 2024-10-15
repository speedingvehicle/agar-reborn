let body = document.querySelector('body');
let container = document.querySelector('#play');

let overlap = false;

let audioEl = createAudioElement('audio', 'media/sfx.mp3');
let overlapEl = createAudioElement('overlap', 'media/sfx.mp3');
let overOverlapEl = createAudioElement('overoverlap', 'media/sfx.mp3');

/**
 * @param {string} id 
 * @param {string} source 
 */
function createAudioElement(id, source) {
	let element = document.createElement('audio');
	element.id = id;

	let sourceEl = document.createElement('source');
	sourceEl.src = source;
	sourceEl.type = 'audio/mp3';

	element.appendChild(sourceEl)

	return element;
}

function audioPlay() {
	body.appendChild(audioEl);
	body.appendChild(overlapEl);
	body.appendChild(overOverlapEl);

	if (!overlap) {
		audioEl.currentTime = 0;
		audioEl.play();
	} else {
		overlapEl.currentTime = 0;
		overlapEl.play();
	}

	overOverlapEl.currentTime = Math.random() * 1000 * 60

	container.removeEventListener('click', audioPlay);

	audioEl.addEventListener('timeupdate', audioOverlap);
	overlapEl.addEventListener('timeupdate', audioOverlap);

	setInterval(() => spawnAudio(), 2000)
}

function audioOverlap() {
	if (!overlap && audioEl.currentTime > audioEl.duration - .45) {
		overlapEl.currentTime = 0;
		overlapEl.play();

		overlap = true;
	}

	if (overlap && overlapEl.currentTime > overlapEl.duration - .5) {
		audioEl.currentTime = 0;
		audioEl.play();

		overlap = false;
	}
}

async function spawnAudio() {
	let sort = createAudioElement(Date.now().toString(), 'media/sfx.mp3')

	await new Promise((resolve) => setTimeout(() => resolve(), 50))

	let splat = createAudioElement(Date.now().toString(), 'media/agar-splat.mp3')

	body.appendChild(sort)
	body.appendChild(splat)

	element.play()
}

container.addEventListener('click', audioPlay);