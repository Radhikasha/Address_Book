import * as readlineSync from "readline-sync";

// Interface
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

// Contact Class
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
    ) { }

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

// AddressBook Class
class AddressBook {

    private contact!: Contact;

    addContact(contact: Contact): void {
        this.contact = contact;
        console.log("\nContact Added Successfully.");
    }

    displayContact(): void {
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
let person = new Contact(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phone,
    email
);

// Creating AddressBook Object
let addressBook = new AddressBook();

// Adding Contact
addressBook.addContact(person);

// Display Contact
addressBook.displayContact();