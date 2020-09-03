const fn2 = document.querySelector(".fn2");
const fn2_1 = document.querySelector(".fn2_1");
const res_2 = document.querySelector(".res_2");
const studentNewMark = document.querySelector(".fn3");
const allMarksStart = document.querySelector(".fn3_1");
const newMarksResult = document.querySelector(".res_3");
const studentInfo = document.querySelectorAll(".fn1");
const studentStart = document.querySelector(".fn1_1");
const studentResult = document.querySelector(".res_1");
const fn4 = document.querySelector(".fn4_1");
const res4 = document.querySelector(".res_4");
const fn5 = document.querySelector(".fn5_1");
const res5 = document.querySelector(".res_5");
const fn6 = document.querySelector(".fn6_1");
const res6 = document.querySelector(".res_6");
let student = null;

class Student {
  constructor(course, university, fullName) {
    this.course = course;
    this.university = university;
    this.fullName = fullName;
    this.marks = [];
    this.isStudent = true;
  }

  getInfo() {
    return `студент ${this.course}го курсу, ${this.university}, ${this.fullName}`;
  }

  get allMarks() {
    return this.isStudent ? this.marks : [];
  }

  set allMarks(value) {
    this.isStudent && value > 0 && value <= 5 ? this.marks.push(parseInt(value)) : null;
  }

  getAverageMarks() {
   if (this.isStudent) {
      this.getAverageMark = this.marks.reduce(
        (acc, curr) => parseInt(acc) + parseInt(curr),
        0
      );
      return Number((this.getAverageMark / this.marks.length).toFixed(3));
    } else return null;
  }

  dismiss() {
    this.isStudent = false;
  }

  recover() {
    this.isStudent = true;
  }
}

class BudgetStudent extends Student {
  constructor(course, university, fullName) {
    super(course, university, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (this.isStudent === true && this.getAverageMarks() >= 4) {
      return console.log("Ви отримали стипендію 1400 грн.");
    } else {
      return console.log("Стипендії немає");
    }
  }
}

const stBd = new BudgetStudent(
  "2",
  "Вищої Школи Психотерапії м.Одеса",
  "Остап Бендер"
);

console.log("Advanced task");
console.log("");

console.log(stBd.getInfo());
stBd.marks = [3, 5, 4, 5, 3, 5];
console.log(stBd.allMarks);
console.log(stBd.getAverageMarks());
stBd.getScholarship();
stBd.dismiss();
stBd.getScholarship();
console.log(stBd.allMarks);
stBd.recover();
stBd.allMarks = 5;
console.log(stBd.allMarks);

student = new Student();
studentStart.addEventListener("click", () => {
  if (
    studentInfo[0].value &&
    studentInfo[1].value &&
    studentInfo[2].value &&
    studentInfo[1].value > 0 &&
    studentInfo[1].value <= 5
  ) {
    student = new Student(
      studentInfo[1].value,
      studentInfo[0].value,
      studentInfo[2].value
    );
    studentResult.innerHTML = student.getInfo();
  } else {
    studentResult.innerHTML = "У нас немає такого студента";
  }
});

allMarksStart.addEventListener("click", (e) => {
  if (student.isStudent) {
    if (studentNewMark.value) {
      student.allMarks = studentNewMark.value;
      studentNewMark.value = '';
      newMarksResult.innerHTML = `Всі оцінки шо є у студента - ${student.marks}`;
    }
  } else {
    newMarksResult.innerHTML = `${null}`;
  }
});

fn4.addEventListener("click", () => {
	student.isStudent ? res4.innerHTML = `середній бал - ${student.getAverageMarks()}`
	: res4.innerHTML = `${null}`;
});

let switcher = false;
fn5.addEventListener("click", () => {
	if(switcher){
		fn5.innerText = 'Виключити студента'
		switcher = false;
  		student.recover();
  		res5.innerHTML = `студента поновлено`;
  	} else{
  		fn5.innerText = 'Поновити студента'
  		switcher = true;
  		student.dismiss();
  		res5.innerHTML = `студента виключено`;
  	}
});