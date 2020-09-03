function getRandomColor() {
  let symbols = "0123456789ABCDEF";
  let color = [];
  for (let i = 0; i < 6; i++) {
    color.push(symbols[Math.floor(Math.random() * 16)]);
  }
  return `#${color.join("")}`;
}

export function getRandomColorExp(){
	console.log(getRandomColor());
}