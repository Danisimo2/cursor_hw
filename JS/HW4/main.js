const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//First function
function getPairs(students){
    let pairsOfStudents = []; 
    let boysStudents = [];
    let girlsStudents = [];
    for(student of students){
        if(student === "Саша" || student === "Ігор" || student === "Олексій"){
            boysStudents.push(student);
        }
        else{
            girlsStudents.push(student);
        }
    }
    for(let i = 0; i < 3; i++){
        pairsOfStudents[i] = [`${boysStudents[i]}`, `${girlsStudents[i]}`];
    }
    return pairsOfStudents;
}
let pairs = getPairs(students);
console.log(pairs);
document.writeln(`<p>пари студентів: ${pairs}</p>`);

//Second Function
function themesForStudents(pair, them){
	let studentThemes = [];
    for(let i = 0; i < themes.length; i++) {
        studentThemes[i] = [`${pairs[i].join(" i ")}`, `${themes[i]}`];
    }
    return studentThemes;
}
const themesForStudent = themesForStudents(pairs, themes);
console.log(themesForStudent);
document.writeln(`<p>теми студентів:${themesForStudent}</p>`);

//Third Function
function studentAndMarks(students, marks){
	let studentsAndMarks = [];
	for(let i = 0; i < marks.length; i++){
		studentsAndMarks[i] = [`${students[i]}`,  parseInt(`${marks[i]}`)];
	}
	return studentsAndMarks;
}
let result3 = studentAndMarks(students, marks);
console.log(result3);
document.writeln(`<p>результат  студента: ${result3}</p>`);

//Function random mark 
function getRandomMark(minMark, maxMark) {
  return Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark;
}

//Forth function
function pairsAndMark(pair, mark){
	let pairAndMark = [];
	for (let i = 0; i < pairs.length; i++ ) {
		pairAndMark[i] = [`${pairs[i].join(" i ")}`, `${themes[i]}`, parseInt(`${getRandomMark(1, 5)}`)];
	}
	return pairAndMark;
}
console.log(pairsAndMark(pairs, marks));
document.writeln(`<p>результат  студентів: ${pairsAndMark(pairs, marks)}</p>`);