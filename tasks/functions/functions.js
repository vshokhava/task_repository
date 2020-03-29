/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
    return (a + b);
};
add (2, 8);

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 *
 */
/*var person = {
    firstName: "John",
    lastName : "Dou"};
    */
   function getFullName(firstName, lastName) {
    var obj = {
      firstName: firstName,
      lastName: lastName
  };
    return(obj.firstName + " " + obj.lastName);
  }
  getFullName("John", "Dou");
/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
    if (n%2 == 1) {
  return true;
    } else {
    return false;
    }
};
isOdd(2);
isOdd(3);
isOdd(0);

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
var wordArray = ["one", "two", "three"];

function getShortest(arr){
  return (
  arr.reduce((a, b) => a.length <= b.length ? a : b)
)
};
getShortest(wordArray);


 /* write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
let letter = 'o'
function getGoogle(n) {
   return ('g' + letter.repeat(n) + 'gle');

};
getGoogle(5)
getGoogle(3)



/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
/*function getUser(firstName = null, lastName = null, age = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  var person = new getUser("John", "Doe", 42);
  console.log (person);
  var person = new getUser("John", "Doe");
  console.log (person);
*/
function getUser(firstName = null, lastName = null, age = null) {
  var obj = {
    firstName: firstName,
    lastName: lastName,
    age: age
};
  return obj;
};
getUser("John", "Dou", 42);

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

const path = [
    {  direction: "Kiyv - Minsk", distance: 567},
    {  direction: "Kiyv - Paris", distance: 2402}
];
function getTotalPath(arr){
      let total = 0;
      let i;
       for (i = 0; i < arr.length; i++) {
              total += arr[i].distance;
            }
      return total;
}
getTotalPath(path);



module.exports = {
    add,
    getFullName,
    isOdd,
    getShortest,
    getGoogle,
    getUser,
    getTotalPath,
};