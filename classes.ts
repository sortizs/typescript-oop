/**
  * Challenge 1: Classes
  * 1. Create a User class.
  * 2. Add a firstname, lastname, and email property
  * 3. Add a get to return fullName
  * 4. Add a method to validate if your email param matches the user's current email
  */

class User {
  firstname: string;
  lastname: string;
  email: string;
  
  constructor(firstname: string, lastname: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
  
  get fullName(): string {
    return `${this.firstname} ${this.lastname}`
  }
  
  compareEmail(email: string) : boolean {
    return email === this.email;
  }
}

const user = new User('Sebastian', 'Ortiz', 'sortizs@outlook.com')
console.log(user.fullName)
console.log(user.compareEmail('sortizs@outlook.com'))

