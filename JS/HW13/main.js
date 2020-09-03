const page = document.querySelector("h3");

const btn = document.querySelector(".create");
const res = document.querySelector(".res");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const result = document.querySelector(".result");

function* creatRandomId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ID = creatRandomId();

btn.addEventListener("click", () => {
  res.innerHTML = `Your ID is: ${ID.next().value}`;
});

//Advanced task

let isIncreaseFont;
let font = 18;
function* changeFontSize() {
  while (true) {
    isIncreaseFont === true ? yield font += 2 : yield font -= 2;
  }
}

const newFontSize = changeFontSize();

function changeFontStyle(isIncreaseFont = true, page = null, result = null, fontValue = null){
	page.style.fontSize = `${newFontSize.next().value}px`;
	result.innerHTML = `${font}px`;
	fontValue = null;
}

result.innerHTML = `${font}px`;
plus.addEventListener("click", () => {
  changeFontStyle(isIncreaseFont = true, page, result);
});

minus.addEventListener("click", () => {
  changeFontStyle(isIncreaseFont = false, page, result);
  if(font <= 1) {
    page.style.fontSize = `${2}px`;
    font = 2;
    result.innerHTML = "we can't enter number, lesser than 2";
  }
});