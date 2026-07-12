import * as readlineSync from "readline-sync";
// Provide a minimal declaration for `process` to avoid missing Node type defs in TS configs
declare var process: { exit(code?: number): never };
import { Contact } from "./Contact";
import { AddressBook } from "./AddressBook";
import { AddressBookSystem } from "./AddressBookSystem";

console.log("========== Welcome To Address Book System ==========\n");

const system = new AddressBookSystem();


// Create Address Book
const addressBookName = readlineSync.question("Enter Address Book Name : ");

system.addAddressBook(addressBookName);

const addressBook: AddressBook | undefined =
    system.getAddressBook(addressBookName);

if (!addressBook) {
    console.log("Address Book Not Found.");
    process.exit(0);
}

let choice = "y";

// Add Multiple Contacts
while (choice.toLowerCase() === "y") {

    console.log("\nEnter Contact Details");

    const contact = new Contact(

        readlineSync.question("First Name : "),
        readlineSync.question("Last Name : "),
        readlineSync.question("Address : "),
        readlineSync.question("City : "),
        readlineSync.question("State : "),
        Number(readlineSync.question("Zip : ")),
        Number(readlineSync.question("Phone Number : ")),
        readlineSync.question("Email : ")

    );

    addressBook.addContact(contact);

    choice = readlineSync.question("\nAdd Another Contact? (y/n) : ");
}

// Display Contacts
console.log("\n========== All Contacts ==========");

addressBook.displayContacts();

// Edit Contact

const editChoice = readlineSync.question(
    "\nDo You Want To Edit Contact? (y/n) : "
);

if (editChoice.toLowerCase() === "y") {

    const name = readlineSync.question("Enter First Name : ");

    addressBook.editContact(name);

    console.log("\nAfter Editing");

    addressBook.displayContacts();
}

// Delete Contact

const deleteChoice = readlineSync.question(
    "\nDo You Want To Delete Contact? (y/n) : "
);

if (deleteChoice.toLowerCase() === "y") {

    const name = readlineSync.question("Enter First Name : ");

    addressBook.deleteContact(name);

    console.log("\nAfter Deleting");

    addressBook.displayContacts();
}

// Display Address Books

system.displayAddressBooks();


// Search By City

let city = readlineSync.question("\nEnter City To Search : ");

system.searchPersonByCity(city);

// Search By State

let state = readlineSync.question("\nEnter State To Search : ");

system.searchPersonByState(state);


//uc10
let city1 = readlineSync.question("\nEnter City to get count : ");
system.countPersonsByCity(city1);

let state1 = readlineSync.question("\nEnter State to get count : ");
system.countPersonsByState(state1);

//uc11
console.log("\nSorting Contacts By Name...\n");

addressBook.sortByName();

//uc13
async function main() {

    // Existing code

    await addressBook?.writeToCSV();

}

main();