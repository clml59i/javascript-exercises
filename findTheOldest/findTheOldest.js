let findTheOldest = function(people) {
    return people.reduce(getOldestPerson);
}

// return the age of the person
let getAge = function(person){
    let currentYear = new Date().getFullYear();
    if (person.hasOwnProperty('yearOfDeath')){
        return person.yearOfDeath - person.yearOfBirth;
    }else {
        return currentYear - person.yearOfBirth;
    }
}

// compare two people and return the oldest one
let getOldestPerson = function(personA, personB){
    if(getAge(personA) > getAge(personB)){
        return personA;
    }else {
        return personB;
    }
}

module.exports = findTheOldest
