import * as readlineSync from "readline-sync";

interface IContact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;

    display(): void;
}

class Contact implements IContact {

    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: number,
        public phoneNumber: number,
        public email: string
    ) {}

    display(): void {
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

class AddressBook {

    private contact!: Contact;

    addContact(contact: Contact): void {
        this.contact = contact;
        console.log("\nContact Added Successfully.");
    }

    editContact(name: string): void {

        if (this.contact.firstName === name) {

            console.log("\nEnter New Details");

            this.contact.lastName = readlineSync.question("Last Name : ");
            this.contact.address = readlineSync.question("Address : ");
            this.contact.city = readlineSync.question("City : ");
            this.contact.state = readlineSync.question("State : ");
            this.contact.zip = Number(readlineSync.question("Zip : "));
            this.contact.phoneNumber = Number(readlineSync.question("Phone Number : "));
            this.contact.email = readlineSync.question("Email : ");

            console.log("\nContact Updated Successfully.");

        } else {
            console.log("\nContact Not Found.");
        }
    }

    displayContact(): void {
        this.contact.display();
    }
}

console.log("Welcome to Address Book Program");

// Add Contact
let person = new Contact(
    readlineSync.question("First Name : "),
    readlineSync.question("Last Name : "),
    readlineSync.question("Address : "),
    readlineSync.question("City : "),
    readlineSync.question("State : "),
    Number(readlineSync.question("Zip : ")),
    Number(readlineSync.question("Phone Number : ")),
    readlineSync.question("Email : ")
);

let addressBook = new AddressBook();

addressBook.addContact(person);

console.log("\nCurrent Contact");
addressBook.displayContact();

// Edit Contact
let editName = readlineSync.question("\nEnter First Name to Edit : ");

addressBook.editContact(editName);

console.log("\nUpdated Contact Details");
addressBook.displayContact();