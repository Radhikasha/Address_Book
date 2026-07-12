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

}