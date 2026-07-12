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
exports.AddressBook = void 0;
const readlineSync = __importStar(require("readline-sync"));
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    // UC2 + UC5 + UC7
    addContact(contact) {
        let duplicate = this.contacts.find(c => c.equals(contact));
        if (duplicate) {
            console.log("\nDuplicate Contact Found. Contact Not Added.");
            return;
        }
        this.contacts.push(contact);
        console.log("\nContact Added Successfully.");
    }
    // UC3
    editContact(firstName) {
        let contact = this.contacts.find(c => c.firstName.toLowerCase() === firstName.toLowerCase());
        if (!contact) {
            console.log("\nContact Not Found.");
            return;
        }
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
    // UC4
    deleteContact(firstName) {
        let index = this.contacts.findIndex(c => c.firstName.toLowerCase() === firstName.toLowerCase());
        if (index == -1) {
            console.log("\nContact Not Found.");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("\nContact Deleted Successfully.");
    }
    // Display Contacts
    displayContacts() {
        if (this.contacts.length == 0) {
            console.log("\nNo Contacts Available.");
            return;
        }
        console.log("\n========== Contact List ==========");
        this.contacts.forEach(contact => contact.display());
    }
    //uc8
    // Search by City
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }
    // Search by State
    searchByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }
    //uc10
    countByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase()).length;
    }
    countByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase()).length;
    }
    //uc11
    sortByName() {
        if (this.contacts.length === 0) {
            console.log("\nNo Contacts Available.");
            return;
        }
        this.contacts.sort((a, b) => {
            let name1 = (a.firstName + " " + a.lastName).toLowerCase();
            let name2 = (b.firstName + " " + b.lastName).toLowerCase();
            return name1.localeCompare(name2);
        });
        console.log("\n===== Contacts Sorted By Name =====");
        this.contacts.forEach(contact => {
            console.log(contact.toString());
        });
    }
}
exports.AddressBook = AddressBook;
