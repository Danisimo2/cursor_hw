const numbers = [5, -33, 3, -10, 2, 3.2, -33, 5, 5, 3];

//1
const getRandomArray = (length, min, max) => new Array(length).fill(null).map(() => 
	Math.floor(Math.random() * (max - min + 1) + min))
document.writeln(`<p>№1 рандомний масив: [${getRandomArray(5, 10, 40)}]</p>`);

//2
function evenNumbers(...numbers){
	return numbers.filter(item => item % 2 === 0)
}
document.writeln(`<p>№2 парні числа в масиві numebrs: [${evenNumbers(...numbers)}]</p>`);

//3
function posNum(...numbers){
	return numbers.filter(item => item > 0).length
}
document.writeln(`<p>№3 кількість чисел більших за 0: ${posNum(...numbers)}</p>`);

//4
function divFive(...numbers){
	return numbers.filter(item => item % 5 === 0)
}
document.writeln(`<p>№4 числа, які націло діляться на 5 в масиві numebrs: [${divFive(...numbers)}]</p>`);

//5
function getAverage(...numbers){
	let filtered = numbers.filter(item => item % 1 === 0);
	let middleValue = filtered.reduce((last, pres) => last + pres) / filtered.length;
	return Number(middleValue.toFixed(2));
}
document.writeln(`<p>№5 отримуємо середнє значення з чисел в масиві numebrs: ${getAverage(...numbers)}</p>`);

//6
function divByThree(word){
	let arr = [];
	for(let i = 0; i < word.length; i+=3){
		arr.push(word.slice(i, i+3));
	}
	return arr;
}
document.writeln(`<p>№6 ділимо слово на 3 частини: [${divByThree('антарктида')}]</p>`);

//7
function getMedian(...numbers){
	if(numbers.length % 2 === 0){
		return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
	} else{
		return numbers[Math.floor(numbers.length / 2)];
	}
}
document.writeln(`<p>№7 медіана масиву: ${getMedian(...numbers)}</p>`);