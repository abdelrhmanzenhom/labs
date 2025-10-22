export default class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    getInfo() {
        return `Name: ${this.name}, Grade: ${this.grade}`;
    }
}
