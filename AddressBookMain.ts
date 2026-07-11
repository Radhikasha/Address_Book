import * as readlineSync from "readline-sync";

//==================== Interface ====================

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

//==================== Contact Class ====================

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

        console.log("---------------------------------------");
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

//==================== AddressBook ====================

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

            console.log("\nEnter New Details");

            contact.lastName = readlineSync.question("Last Name : ");
            contact.address = readlineSync.question("Address : ");
            contact.city = readlineSync.question("City : ");
            contact.state = readlineSync.question("State : ");
            contact.zip = Number(readlineSync.question("Zip : "));
            contact.phoneNumber = Number(readlineSync.question("Phone Number : "));
            contact.email = readlineSync.question("Email : ");

            console.log("\nContact Updated Successfully.");
        }
        else {

            console.log("\nContact Not Found.");
        }
    }

    // Delete Contact
    deleteContact(name: string): void {

        let index = this.contacts.findIndex(c => c.firstName === name);

        if (index != -1) {

            this.contacts.splice(index, 1);

            console.log("\nContact Deleted Successfully.");
        }
        else {

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

//==================== AddressBook System ====================

class AddressBookSystem {

    // Dictionary
    private addressBooks: Map<string, AddressBook> = new Map();

    // Add Address Book
    addAddressBook(name: string): void {

        if (this.addressBooks.has(name)) {

            console.log("\nAddress Book already exists.");
            return;
        }

        this.addressBooks.set(name, new AddressBook());

        console.log("\nAddress Book Created Successfully.");
    }

    // Get Address Book
    getAddressBook(name: string): AddressBook | undefined {

        return this.addressBooks.get(name);
    }

    // Display Address Books
    displayAddressBooks(): void {

        console.log("\nAvailable Address Books");

        this.addressBooks.forEach((value, key) => {

            console.log(key);
        });

    }

}

//==================== Main Program ====================

console.log("========== Welcome to Address Book System ==========");

let system = new AddressBookSystem();

// Create Address Book
let addressBookName = readlineSync.question("\nEnter Address Book Name : ");

system.addAddressBook(addressBookName);

// Get Address Book
let addressBook = system.getAddressBook(addressBookName);

if (addressBook) {

    let choice = "y";

    while (choice.toLowerCase() === "y") {

        let contact = new Contact(

            readlineSync.question("\nEnter First Name : "),
            readlineSync.question("Enter Last Name : "),
            readlineSync.question("Enter Address : "),
            readlineSync.question("Enter City : "),
            readlineSync.question("Enter State : "),
            Number(readlineSync.question("Enter Zip : ")),
            Number(readlineSync.question("Enter Phone Number : ")),
            readlineSync.question("Enter Email : ")

        );

        addressBook.addContact(contact);

        choice = readlineSync.question("\nDo you want to add another contact (y/n) ? ");
    }

    // Display Contacts
    console.log("\n========== All Contacts ==========");
    addressBook.displayContacts();

    // Edit Contact
    let editChoice = readlineSync.question("\nDo you want to edit a contact (y/n)? ");

    if (editChoice.toLowerCase() === "y") {

        let editName = readlineSync.question("Enter First Name to Edit : ");

        addressBook.editContact(editName);

        console.log("\nAfter Editing");
        addressBook.displayContacts();
    }

    // Delete Contact
    let deleteChoice = readlineSync.question("\nDo you want to delete a contact (y/n)? ");

    if (deleteChoice.toLowerCase() === "y") {

        let deleteName = readlineSync.question("Enter First Name to Delete : ");

        addressBook.deleteContact(deleteName);

        console.log("\nAfter Deleting");
        addressBook.displayContacts();
    }

}

console.log("\n========== Address Books ==========");

system.displayAddressBooks();