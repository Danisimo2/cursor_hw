const btn = document.querySelector(".btn");
const res = document.querySelector(".result");
const input = document.querySelector(".inp");
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

btn.addEventListener("click", () => {
  if(input.value > 0){
    res.innerHTML = `Please wait... it's take ${(input.value * TIME) / 1000} sec`;
	getRandomChinese(input.value).then(
	  (ress) => {
	    res.innerHTML = ress;
	  },
	  (error) => {
	    console.error("something went wrong: " + error);
	  }
	);
	input.value = "";
  } else{
	res.innerHTML = 'Please, enter integer number, bigger than 0';
  }
});