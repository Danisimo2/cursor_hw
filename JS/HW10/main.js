function sound(source){
	let audio = new Audio();
	audio.src = source;
	audio.play();
}

function hoverOnClick(item){
	item.classList.add("play");
	setTimeout(() => item.classList.remove("play"), 1000);
}

function playSound(item){
	switch(item.keyCode){
		case 65:
			sound('audio/au1.mp3');
			break;
		case 83:
			sound('audio/au2.mp3');
			break;
		case 68:
			sound('audio/au3.mp3');
			break;
		case 70:
			sound('audio/au4.mp3');
			break;
		case 71:
			sound('audio/au5.mp3');
			break;
		case 72:
			sound('audio/au6.mp3');
			break;
	}
}

document.addEventListener('keyup', playSound);

const butt = document.querySelectorAll('button');



butt.forEach((select, i) => {
	select.addEventListener('click', () => {
		sound(`audio/au${i + 1}.mp3`)
		butt[i].classList.add("play");
		setTimeout(() => butt[i].classList.remove("play"), 1000);
	});
});
