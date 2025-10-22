import Student from "./student.js";

export default class ClubMemberStudent extends Student {
    constructor(name, grade, clubName) {
        super(name, grade);
        this.clubName = clubName;
    }

    getInfo() {
        return `${super.getInfo()}, Role: Club Member, Club: ${this.clubName}`;
    }
}
