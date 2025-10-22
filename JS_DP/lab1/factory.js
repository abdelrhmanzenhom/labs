import ClubMemberStudent from "./club.js";
import AthleteStudent from "./athlete.js";

export default class StudentFactory {
    createStudent(type,name, grade, kind) {
        switch (type) {
            case "club":
                return new ClubMemberStudent(name, grade,kind);
            case "athlete":
                return new AthleteStudent(name,grade,kind);
            default:
                console.log("not a type");
        }
    }
}
