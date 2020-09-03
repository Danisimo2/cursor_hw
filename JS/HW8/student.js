export class Student {
  constructor(course, university, fullName) {
    this.course = course;
    this.university = university;
    this.fullName = fullName;
  }

  getInfo() {
    return `студент ${this.course}го курсу, ${this.university}, ${this.fullName}`;
  }
}