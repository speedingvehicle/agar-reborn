let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;

function randomRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeTitle(title) {
	document.title = title;
}

async function proCreate(count) {
	for (let i = 0; i < count; i++) {
		window.open("game.html", "", `menubar=no, status=no, toolbar=no, resizable=no, width=512, height=288, titlebar=no, alwaysRaised=yes`);
		await new Promise(r => setTimeout(r, 250));
	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random()) * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil(7 * Math.random()) * 5 - 10;
	window.focus();
}

function playBall() {
	xPos += xOff;
	yPos += yOff;

	if (xPos > screen.width - 512) newXlt();
	if (xPos < 0) newXrt();

	if (yPos > screen.height - 288) newYup();
	if (yPos < 0) newYdn();

	window.moveTo(xPos, yPos);
	setTimeout(playBall, 1);
}