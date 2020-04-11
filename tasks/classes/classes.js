/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here


class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName() {
      return `${person.firstName} ${person.lastName}`
    }
    
  };
  const person = new Person();

class Student extends Person {
    constructor(firstName, lastName, getFullName, grade) {
        super(firstName, lastName, getFullName);
        this.grade = grade;
    }
    getGrade() {
        return this.grade
    };

}
const student = new Student();

module.exports = {
    person,
    student
};
