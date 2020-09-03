const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1
function getSubjects(student){
    const subjects = Object.keys(student.subjects);
    return subjects.map(sub => (sub[0].toUpperCase() + sub.slice(1).toLowerCase()).replace('_', ' ', 'gi'));
}
console.log(getSubjects(students[0]));

//2
function getAverageMark(avarage){
    const subjects = Object.values(avarage.subjects).flat();
    let sum = subjects.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    return Number((sum/subjects.length).toFixed(2));
}
console.log(getAverageMark(students[0]));

//3
function getStudentInfo(student){
    const {name, course} = student;
    return {name, course, averageMark: getAverageMark(student)}
}
console.log(getStudentInfo(students[2]));

//4
function getStudentsNames(students){
    return students.map(item => item.name).sort(); 
}
console.log(getStudentsNames(students));

//5
function getBestStudent(students){
    const maxMark = Math.max(...students.map(item => getAverageMark(item)));
    const bestStudent = students.find(item => getAverageMark(item) === maxMark);
    return bestStudent.name;
}
console.log(getBestStudent(students));

//6 
function calculateWordLetters(str){
    let count = {};
    let i = str.toLowerCase().split('').forEach(item =>{
        if(count[item]){
            count[item]++;
        } else{
            count[item] = 1;
        }
    });
    return count;
}
console.log(calculateWordLetters('Test'));