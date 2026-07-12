"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const Contact_1 = require("./Contact");
const AddressBookSystem_1 = require("./AddressBookSystem");
console.log("========== Welcome To Address Book System ==========\n");
const system = new AddressBookSystem_1.AddressBookSystem();
// Create Address Book
const addressBookName = readlineSync.question("Enter Address Book Name : ");
system.addAddressBook(addressBookName);
const addressBook = system.getAddressBook(addressBookName);
if (!addressBook) {
    console.log("Address Book Not Found.");
    process.exit(0);
}
let choice = "y";
// Add Multiple Contacts
while (choice.toLowerCase() === "y") {
    console.log("\nEnter Contact Details");
    const contact = new Contact_1.Contact(readlineSync.question("First Name : "), readlineSync.question("Last Name : "), readlineSync.question("Address : "), readlineSync.question("City : "), readlineSync.question("State : "), Number(readlineSync.question("Zip : ")), Number(readlineSync.question("Phone Number : ")), readlineSync.question("Email : "));
    addressBook.addContact(contact);
    choice = readlineSync.question("\nAdd Another Contact? (y/n) : ");
}
// Display Contacts
console.log("\n========== All Contacts ==========");
addressBook.displayContacts();
// Edit Contact
const editChoice = readlineSync.question("\nDo You Want To Edit Contact? (y/n) : ");
if (editChoice.toLowerCase() === "y") {
    const name = readlineSync.question("Enter First Name : ");
    addressBook.editContact(name);
    console.log("\nAfter Editing");
    addressBook.displayContacts();
}
// Delete Contact
const deleteChoice = readlineSync.question("\nDo You Want To Delete Contact? (y/n) : ");
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
