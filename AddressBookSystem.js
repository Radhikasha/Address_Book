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
}
exports.AddressBookSystem = AddressBookSystem;
