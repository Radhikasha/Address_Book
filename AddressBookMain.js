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
        console.log("\n--------- Contact Details ---------");
        console.log("First Name   :", this.firstName);
        console.log("Last Name    :", this.lastName);
        console.log("Address      :", this.address);
        console.log("City         :", this.city);
        console.log("State        :", this.state);
        console.log("Zip          :", this.zip);
        console.log("Phone Number :", this.phoneNumber);
        console.log("Email        :", this.email);
    }
}
// Address Book Class
class AddressBook {
    contact = null;
    // Add Contact
    addContact(contact) {
        this.contact = contact;
        console.log("\nContact Added Successfully.");
    }
    // Edit Contact
    editContact(name) {
        if (this.contact && this.contact.firstName === name) {
            console.log("\nEnter New Contact Details");
            this.contact.lastName = readlineSync.question("Enter Last Name : ");
            this.contact.address = readlineSync.question("Enter Address : ");
            this.contact.city = readlineSync.question("Enter City : ");
            this.contact.state = readlineSync.question("Enter State : ");
            this.contact.zip = Number(readlineSync.question("Enter Zip : "));
            this.contact.phoneNumber = Number(readlineSync.question("Enter Phone Number : "));
            this.contact.email = readlineSync.question("Enter Email : ");
            console.log("\nContact Updated Successfully.");
        }
        else {
            console.log("\nContact Not Found.");
        }
    }
    // Delete Contact
    deleteContact(name) {
        if (this.contact && this.contact.firstName === name) {
            this.contact = null;
            console.log("\nContact Deleted Successfully.");
        }
        else {
            console.log("\nContact Not Found.");
        }
    }
    // Display Contact
    displayContact() {
        if (this.contact) {
            this.contact.display();
        }
        else {
            console.log("\nNo Contact Available.");
        }
    }
}
// Main Program
console.log("========== Welcome to Address Book ==========");
// Add Contact
let person = new Contact(readlineSync.question("Enter First Name : "), readlineSync.question("Enter Last Name : "), readlineSync.question("Enter Address : "), readlineSync.question("Enter City : "), readlineSync.question("Enter State : "), Number(readlineSync.question("Enter Zip : ")), Number(readlineSync.question("Enter Phone Number : ")), readlineSync.question("Enter Email : "));
let addressBook = new AddressBook();
addressBook.addContact(person);
// Display
console.log("\nCurrent Contact");
addressBook.displayContact();
// Edit
let editName = readlineSync.question("\nEnter First Name to Edit : ");
addressBook.editContact(editName);
// Display After Edit
console.log("\nContact After Edit");
addressBook.displayContact();
// Delete
let deleteName = readlineSync.question("\nEnter First Name to Delete : ");
addressBook.deleteContact(deleteName);
// Display After Delete
console.log("\nContact After Delete");
addressBook.displayContact();
