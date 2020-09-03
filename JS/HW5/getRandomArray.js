const getRandomArray = (length, min, max) => new Array(length).fill(null).map(() => 
	Math.floor(Math.random() * (max - min + 1) + min))

export function getRandomArrayExp(){
	console.log(getRandomArray(10, 10, 100));
}