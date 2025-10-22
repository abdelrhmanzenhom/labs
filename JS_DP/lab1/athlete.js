import Student from "./student.js";

export default class AthleteStudent extends Student {
    constructor(name, grade, sport) {
        super(name, grade);
        this.sport = sport;
    }

    getInfo() {
        return `${super.getInfo()}, Role: Athlete, Sport: ${this.sport}`;
    }
}
