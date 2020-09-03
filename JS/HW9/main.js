function generateBlock() {
  const allBlocks = document.querySelector(".allBlocks");
  return (allBlocks.style.display = "block");
}

function getRandomColor() {
  let symbols = "0123456789ABCDEF";
  let color = [];
  for (let i = 0; i < 6; i++) {
    color.push(symbols[Math.floor(Math.random() * 16)]);
  }
  return `#${color.join("")}`;
}

function setColor() {
  const block = document.querySelectorAll(".block");
  for (let i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = `${getRandomColor()}`;
  }
}

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  btn3.style.visibility = "hidden";
  timer = setInterval(() => setColor(), 1000);
});

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", () => {
  btn3.style.visibility = "visible";
  clearInterval(timer);
});