function getMaxNumber(num){
	return Number(num.toString().split('').sort().pop());
}

export function getMaxNumberExp(){
	console.log(getMaxNumber(145325646825564788));
}

