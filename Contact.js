"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
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
        console.log("--------------------------------");
        console.log("First Name   :", this.firstName);
        console.log("Last Name    :", this.lastName);
        console.log("Address      :", this.address);
        console.log("City         :", this.city);
        console.log("State        :", this.state);
        console.log("Zip          :", this.zip);
        console.log("Phone Number :", this.phoneNumber);
        console.log("Email        :", this.email);
    }
    // UC7
    equals(contact) {
        return (this.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === contact.lastName.toLowerCase());
    }
}
exports.Contact = Contact;
