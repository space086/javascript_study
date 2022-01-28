
//1
// const heropy = {
//   firstName: 'heropy',
//   lastName: 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

//2
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

//ES6 classes
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('heropy', 'park')
const amy = new User('amy', 'clarke')
const neo = new User('neo', 'smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
