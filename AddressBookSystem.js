"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookSystem = void 0;
const AddressBook_1 = require("./AddressBook");
class AddressBookSystem {
    constructor() {
        // Dictionary of Address Books
        this.addressBooks = new Map();
    }
    // UC6 - Add Address Book
    addAddressBook(name) {
        if (this.addressBooks.has(name)) {
            console.log("\nAddress Book already exists.");
            return;
        }
        this.addressBooks.set(name, new AddressBook_1.AddressBook());
        console.log("\nAddress Book Created Successfully.");
    }
    // Get Address Book
    getAddressBook(name) {
        return this.addressBooks.get(name);
    }
    // Display Address Books
    displayAddressBooks() {
        if (this.addressBooks.size == 0) {
            console.log("\nNo Address Book Available.");
            return;
        }
        console.log("\n========== Address Books ==========");
        this.addressBooks.forEach((value, key) => {
            console.log(key);
        });
    }
    //uc8
    // Search Person by City
    // Search Person by City
    searchPersonByCity(city) {
        console.log("\nPersons in City :", city);
        let found = false;
        this.addressBooks.forEach((addressBook, name) => {
            let persons = addressBook.searchByCity(city);
            if (persons.length > 0) {
                console.log("\nAddress Book :", name);
                persons.forEach(person => person.display());
                found = true;
            }
        });
        if (!found) {
            console.log("No Person Found.");
        }
    }
    // Search Person by State
    searchPersonByState(state) {
        console.log("\nPersons in State :", state);
        let found = false;
        this.addressBooks.forEach((addressBook, name) => {
            let persons = addressBook.searchByState(state);
            if (persons.length > 0) {
                console.log("\nAddress Book :", name);
                persons.forEach(person => person.display());
                found = true;
            }
        });
        if (!found) {
            console.log("No Person Found.");
        }
    }
}
exports.AddressBookSystem = AddressBookSystem;
