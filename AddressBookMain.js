import * as readlineSync from "readline-sync";
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
        console.log("\n------ Contact Details ------");
        console.log("First Name :", this.firstName);
        console.log("Last Name  :", this.lastName);
        console.log("Address    :", this.address);
        console.log("City       :", this.city);
        console.log("State      :", this.state);
        console.log("Zip        :", this.zip);
        console.log("Phone      :", this.phoneNumber);
        console.log("Email      :", this.email);
    }
}
// AddressBook Class
class AddressBook {
    contact;
    addContact(contact) {
        this.contact = contact;
        console.log("\nContact Added Successfully.");
    }
    displayContact() {
        this.contact.display();
    }
}
console.log("Welcome to Address Book Program");
// Taking Input
let firstName = readlineSync.question("Enter First Name : ");
let lastName = readlineSync.question("Enter Last Name : ");
let address = readlineSync.question("Enter Address : ");
let city = readlineSync.question("Enter City : ");
let state = readlineSync.question("Enter State : ");
let zip = Number(readlineSync.question("Enter Zip : "));
let phone = Number(readlineSync.question("Enter Phone Number : "));
let email = readlineSync.question("Enter Email : ");
// Creating Contact Object
let person = new Contact(firstName, lastName, address, city, state, zip, phone, email);
// Creating AddressBook Object
let addressBook = new AddressBook();
// Adding Contact
addressBook.addContact(person);
// Display Contact
addressBook.displayContact();
