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
const system = new AddressBookSystem_1.AddressBookSystem();
let mainChoice;
let subChoice;
async function main() {
    do {
        console.log("\n========== ADDRESS BOOK SYSTEM ==========");
        console.log("1. Contact");
        console.log("2. Address Book");
        console.log("3. Search");
        console.log("4. Count");
        console.log("5. Sort");
        console.log("6. File");
        console.log("7. Exit");
        mainChoice = readlineSync.questionInt("\nEnter Your Choice : ");
        switch (mainChoice) {
            case 1:
                do {
                    console.log("\n========== CONTACT ==========");
                    console.log("1. Add New Contact");
                    console.log("2. Edit Contact");
                    console.log("3. Delete Contact");
                    console.log("4. Display Contacts");
                    console.log("5. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1: {
                            let bookName = readlineSync.question("Enter Address Book Name : ");
                            let addressBook = system.getAddressBook(bookName);
                            if (addressBook == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            let firstName = readlineSync.question("First Name : ");
                            let lastName = readlineSync.question("Last Name : ");
                            let address = readlineSync.question("Address : ");
                            let city = readlineSync.question("City : ");
                            let state = readlineSync.question("State : ");
                            let zip = readlineSync.questionInt("Zip : ");
                            let phone = readlineSync.questionInt("Phone Number : ");
                            let email = readlineSync.question("Email : ");
                            let contact = new Contact_1.Contact(firstName, lastName, address, city, state, zip, phone, email);
                            addressBook.addContact(contact);
                            break;
                        }
                        case 2: {
                            let bookName = readlineSync.question("Enter Address Book Name : ");
                            let addressBook = system.getAddressBook(bookName);
                            if (addressBook == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            let editName = readlineSync.question("Enter First Name To Edit : ");
                            addressBook.editContact(editName);
                            break;
                        }
                        case 3: {
                            let bookName = readlineSync.question("Enter Address Book Name : ");
                            let addressBook = system.getAddressBook(bookName);
                            if (addressBook == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            let deleteName = readlineSync.question("Enter First Name To Delete : ");
                            addressBook.deleteContact(deleteName);
                            break;
                        }
                        case 4: {
                            let bookName = readlineSync.question("Enter Address Book Name : ");
                            let addressBook = system.getAddressBook(bookName);
                            if (addressBook == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            addressBook.displayContacts();
                            break;
                        }
                        case 5:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 5);
                break;
            case 2:
                do {
                    console.log("\n========== ADDRESS BOOK ==========");
                    console.log("1. Add New Address Book");
                    console.log("2. Display Address Books");
                    console.log("3. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1:
                            let addressBookName = readlineSync.question("Enter Address Book Name : ");
                            system.addAddressBook(addressBookName);
                            break;
                        case 2:
                            system.displayAddressBooks();
                            break;
                        case 3:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 3);
                break;
            case 3:
                do {
                    console.log("\n========== SEARCH ==========");
                    console.log("1. Search By City");
                    console.log("2. Search By State");
                    console.log("3. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1:
                            let city = readlineSync.question("Enter City : ");
                            system.searchPersonByCity(city);
                            break;
                        case 2:
                            let state = readlineSync.question("Enter State : ");
                            system.searchPersonByState(state);
                            break;
                        case 3:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 3);
                break;
            case 4:
                do {
                    console.log("\n========== COUNT ==========");
                    console.log("1. Count By City");
                    console.log("2. Count By State");
                    console.log("3. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1:
                            let cityName = readlineSync.question("Enter City : ");
                            system.countPersonsByCity(cityName);
                            break;
                        case 2:
                            let stateName = readlineSync.question("Enter State : ");
                            system.countPersonsByState(stateName);
                            break;
                        case 3:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 3);
                break;
            case 5:
                do {
                    console.log("\n========== SORT ==========");
                    console.log("1. Sort By Name");
                    console.log("2. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1:
                            let sortBook = readlineSync.question("Enter Address Book Name : ");
                            let addressBook = system.getAddressBook(sortBook);
                            if (addressBook == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            addressBook.sortByName();
                            break;
                        case 2:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 2);
                break;
            case 6:
                do {
                    console.log("\n========== FILE ==========");
                    console.log("1. Write Contacts To CSV");
                    console.log("2. Back");
                    subChoice = readlineSync.questionInt("\nEnter Your Choice : ");
                    switch (subChoice) {
                        case 1: {
                            let fileBook = readlineSync.question("Enter Address Book Name : ");
                            let book = system.getAddressBook(fileBook);
                            if (book == undefined) {
                                console.log("Address Book Not Found.");
                                break;
                            }
                            try {
                                await book.writeToCSV();
                            }
                            catch (err) {
                                console.log("\nFailed To Write CSV File :", err);
                            }
                            break;
                        }
                        case 2:
                            break;
                        default:
                            console.log("Invalid Choice.");
                    }
                } while (subChoice != 2);
                break;
            case 7:
                console.log("\nThank You!");
                break;
            default:
                console.log("\nInvalid Choice.");
        }
    } while (mainChoice != 7);
}
main().catch(err => {
    console.error("\nUnexpected Error :", err);
});
