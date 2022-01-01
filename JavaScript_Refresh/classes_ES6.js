class Human {
    constructor() {
        this.gender = 'Male';
    }

    printMyGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        // have to call super in order to get the Human function
        super();
        this.name = 'Max';
    }

    printMyName(){                                      
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();