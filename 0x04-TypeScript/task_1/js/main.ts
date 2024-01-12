interface user {
    firstName: string,
    lastName: string
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    workOnHomework() {
        console.log("Currently working")
        return ("Currently working")
    }

    displayName() {
        console.log(this.firstName)
        return this.firstName;
    }
}
