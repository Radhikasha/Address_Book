"use strict";
// UC1 - Create Contact in Address Book
// Contact Class
class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    display() {
        console.log("\n--------- Contact Details ---------");
        console.log("First Name  :", this.firstName);
        console.log("Last Name   :", this.lastName);
        console.log("Address     :", this.address);
        console.log("City        :", this.city);
        console.log("State       :", this.state);
        console.log("Zip         :", this.zip);
        console.log("Phone Number:", this.phoneNumber);
        console.log("Email       :", this.email);
    }
}
// Main Program
console.log("Welcome to Address Book Program");
// Creating Contact Object
let person = new Contact("Radhika", "Sharma", "Ramghat Road", "Aligarh", "Uttar Pradesh", 202001, 9876543210, "radhika@gmail.com");
// Display Contact Details
person.display();
