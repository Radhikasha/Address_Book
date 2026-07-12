import { AddressBook } from "./AddressBook";

export class AddressBookSystem {

    // Dictionary of Address Books
    private addressBooks: Map<string, AddressBook> = new Map();

    // UC6 - Add Address Book
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
searchPersonByCity(city: string): void {

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
searchPersonByState(state: string): void {

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

