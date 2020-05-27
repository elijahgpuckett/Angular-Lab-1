function sayHello(person: string): string {
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML = sayHello(user);

class person {
    private fname: String;
    private lname: String;
    private age: number;
    private pnum: number;
    public state: String;
    private zip: number;
    private occupation: String;
    private hourlyWage: number;
    private hours: number;
    private degrees: string[];

    constructor(
        fname: String,
        lname: String,
        age: number,
        pnum: number,
        state: String,
        zip: number,
        occupation: String,
        hourlyWage: number,
        hours: number) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.pnum = pnum;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage
        if(hours){
            this.hours = hours;
        } else {
            this.hours = 40;
        }
    }

    getFullName(): string {
        return "Full Name: " + this.fname + this.lname;
    }
    getNameAndPhone(): string {
        return this.getFullName() + this.pnum;
    }
    getLocation(): string {
        return this.getFullName() + this.state + this.zip;
    }
    getWage(): number {
        return this.hours * this.hourlyWage
    }
    getInfo(): string {
        return this.getFullName() + "makes $" + this.getWage() + " a week, and works as a/an " + this.occupation + " and they're " + this.age + " years old!";
    }
    addCerts(...certs: string[]){
        for(let i = 0; i < certs.length; i++){
            this.degrees.push(...certs[i]);
            return "Certifications: " + this.degrees;
        }
    }
    public static newPerson(config: PersonOptions):{ age: number, state: String } {
        let newPerson = {
            age: 20,
            state: "FL"
        }
        return newPerson;
     }
}

interface PersonOptions {
    fname: String,
    lname: String,
    age?: number,
    pnum?: number,
    state?: String,
    zip?: number,
    occupation?: String,
}

let person1 = new person(
    "Jack",
    "Reacher",
    26,
    1112223333,
    "NC",
    28677,
    "Agent",
    30,
    40);

let person2 = new person(
    "Jonny",
    "Depp",
    33,
    2223334444,
    "LA",
    34556,
    "Actor",
    500,
    36);

let person3 = new person(
    "Miss",
    "Lady",
    28,
    3334445555,
    "FL",
    13347,
    "Waitress",
    12,
    30);

    

document.getElementById("id1").innerHTML = person1.getFullName();
document.getElementById("id2").innerHTML = person2.getNameAndPhone();
document.getElementById("id3").innerHTML = person3.getLocation();



