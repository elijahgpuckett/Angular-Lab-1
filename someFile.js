function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var person = /** @class */ (function () {
    function person(fname, lname, age, pnum, state, zip, occupation, hourlyWage, hours) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.pnum = pnum;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
    }
    person.prototype.getFullName = function () {
        return "Full Name: " + this.fname + this.lname;
    };
    person.prototype.getNameAndPhone = function () {
        return this.getFullName() + this.pnum;
    };
    person.prototype.getLocation = function () {
        return this.getFullName() + this.state + this.zip;
    };
    person.prototype.getWage = function () {
        return this.hours * this.hourlyWage;
    };
    person.prototype.getInfo = function () {
        return this.getFullName() + "makes $" + this.getWage() + " a week, and works as a/an " + this.occupation + " and they're " + this.age + " years old!";
    };
    person.prototype.addCerts = function () {
        var _a;
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var i = 0; i < certs.length; i++) {
            (_a = this.degrees).push.apply(_a, certs[i]);
            return "Certifications: " + this.degrees;
        }
    };
    person.newPerson = function (config) {
        var newPerson = {
            age: 20,
            state: "FL"
        };
        return newPerson;
    };
    return person;
}());
var person1 = new person("Jack", "Reacher", 26, 1112223333, "NC", 28677, "Agent", 30, 40);
var person2 = new person("Jonny", "Depp", 33, 2223334444, "LA", 34556, "Actor", 500, 36);
var person3 = new person("Miss", "Lady", 28, 3334445555, "FL", 13347, "Waitress", 12, 30);
document.getElementById("id1").innerHTML = person1.getFullName();
document.getElementById("id2").innerHTML = person2.getNameAndPhone();
document.getElementById("id3").innerHTML = person3.getLocation();
