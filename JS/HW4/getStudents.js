const girls = ["Олена", "Іра", "Світлана"];
const boys = ["Саша", "Ігор", "Олексій"];

function getPairs(boysArr, girlsArr){
	let pairsOfStudents = [];
    for(let i = 0; i < 3; i++){
    	pairsOfStudents[i] = [`${boysArr[i]}`, `${girlsArr[i]}`];
	}
	return pairsOfStudents;
}

export function getPairsExp() {
    console.log(getPairs(boys, girls));
}