const TIME = 50;
function getRandomChinese(inp) {
  return new Promise((resolve, reject) => {
    let sign = Number(Date.now().toString().slice(-5));
    let result = [];
    for (let i = 0; i < inp; i++) {
      sign += i;
      result.push(String.fromCharCode(sign));
    }
    setTimeout(() => resolve(result.join("")), inp * TIME);
  });
}

export function getRandomChineseExp(){
	console.log(getRandomChinese(10));
}