function getMaxNumber(num){
	return Number(num.toString().split('').sort().pop());
}
document.writeln(`<p>Function #1 max number:  ${getMaxNumber(14532564682955647898)}</p>`);

function pow(x, n) {
  let number = 1;
  for (let i = 0; i < n; i++) {
    number *= x;
  }
  if (x === 0 && n === 0) return "it is an unsolved mystery";
  else if (n === 0) return 1;
  else if (x === 0) return 0;
  else if (n < 0) {
    for (let i = 0; i < -n; i++) {
      number *= x;
    }
    return (number = 1 / number);
  } 
  else return number;
}

document.writeln(`<p>Function #2 number in power: ${pow(2, -3)}</p>`);

function removeName(name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
document.writeln(`<p>Function #3 remove name: ${removeName('daNylo')}</p>`);

function convertMoney(howMuch){
	let total;
	const priceForDollar = 25;
	const lowerCase = howMuch.toLowerCase();
	if(lowerCase.indexOf('$') === -1 && lowerCase.indexOf('uah') === -1){
		return 'wrong currency';
	} else if(lowerCase.indexOf('uah') !== -1){
		return total = lowerCase.replace('uah','') / priceForDollar + '$';
	} else if(lowerCase.indexOf('$') !== -1){
		return total = lowerCase.replace('$','') * priceForDollar + 'UAH';
	} 
}
document.writeln(`<p>Function #4 convert money: ${convertMoney('200$')}</p>`);

function getRandomPassword(numberDigits = 8){
	const pass = [];
	for(let i = 0; i < numberDigits; i++){
		let value = Math.floor(Math.random()*10);
		pass.push(value);
	}
	return pass.join('');
}
document.writeln(`<p>Function #5 get random password: ${getRandomPassword()}</p>`);

function isPalindrom(str){
        str = str.toLowerCase().replace(/\s/g, '');
        return str === str.split('').reverse().join('');
}
document.writeln(`<p>Function #6 is words palindrom?: ${isPalindrom('я несу гусеня')}</p>`);

function getCounter(word, letter){
	let count = 0;
	const lowerWord = word.toLowerCase();
	const lowerLetter = letter.toLowerCase();
	for(let i = 0; i < lowerWord.length; i++){
		lowerWord[i] === lowerLetter && count++;
	}
	return count;
}
document.writeln(`<p>Function #7 how many letter?: ${getCounter('hello how are you', 'o')}</p>`);
