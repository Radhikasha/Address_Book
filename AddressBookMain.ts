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
        console.log("----------------------------------");
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

// AddressBook Class
class AddressBook {

    private contacts: Contact[] = [];

    // Add Contact
    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log("\nContact Added Successfully.");
    }

    // Edit Contact
    editContact(name: string): void {

        let contact = this.contacts.find(c => c.firstName === name);

        if (contact) {

            console.log("\nEnter New Contact Details");

            contact.lastName = readlineSync.question("Enter Last Name : ");
            contact.address = readlineSync.question("Enter Address : ");
            contact.city = readlineSync.question("Enter City : ");
            contact.state = readlineSync.question("Enter State : ");
            contact.zip = Number(readlineSync.question("Enter Zip : "));
            contact.phoneNumber = Number(readlineSync.question("Enter Phone Number : "));
            contact.email = readlineSync.question("Enter Email : ");

            console.log("\nContact Updated Successfully.");

        } else {
            console.log("\nContact Not Found.");
        }
    }

    // Delete Contact
    deleteContact(name: string): void {

        let index = this.contacts.findIndex(c => c.firstName === name);

        if (index != -1) {

            this.contacts.splice(index, 1);
            console.log("\nContact Deleted Successfully.");

        } else {
            console.log("\nContact Not Found.");
        }
    }

    // Display Contacts
    displayContacts(): void {

        if (this.contacts.length == 0) {
            console.log("\nNo Contacts Available.");
            return;
        }

        console.log("\n========== Contact List ==========");

        this.contacts.forEach(contact => contact.display());
    }
}

// Main Program

console.log("===== Welcome to Address Book =====");

let addressBook = new AddressBook();

let choice = "y";

while (choice.toLowerCase() == "y") {

    let person = new Contact(

        readlineSync.question("Enter First Name : "),
        readlineSync.question("Enter Last Name : "),
        readlineSync.question("Enter Address : "),
        readlineSync.question("Enter City : "),
        readlineSync.question("Enter State : "),
        Number(readlineSync.question("Enter Zip : ")),
        Number(readlineSync.question("Enter Phone Number : ")),
        readlineSync.question("Enter Email : ")

    );

    addressBook.addContact(person);

    choice = readlineSync.question("\nDo you want to add another contact (y/n) ? ");
}

// Display All Contacts
addressBook.displayContacts();

// Edit Contact
let editName = readlineSync.question("\nEnter First Name to Edit : ");
addressBook.editContact(editName);

// Display After Edit
addressBook.displayContacts();

// Delete Contact
let deleteName = readlineSync.question("\nEnter First Name to Delete : ");
addressBook.deleteContact(deleteName);

// Final Display
addressBook.displayContacts();