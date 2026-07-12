import * as readlineSync from "readline-sync";
import { Contact } from "./Contact";

export class AddressBook {

    private contacts: Contact[] = [];

    // UC2 + UC5 + UC7
    addContact(contact: Contact): void {

        let duplicate = this.contacts.find(c => c.equals(contact));

        if (duplicate) {
            console.log("\nDuplicate Contact Found. Contact Not Added.");
            return;
        }

        this.contacts.push(contact);

        console.log("\nContact Added Successfully.");
    }

    // UC3
    editContact(firstName: string): void {

        let contact = this.contacts.find(
            c => c.firstName.toLowerCase() === firstName.toLowerCase()
        );

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
    deleteContact(firstName: string): void {

        let index = this.contacts.findIndex(
            c => c.firstName.toLowerCase() === firstName.toLowerCase()
        );

        if (index == -1) {
            console.log("\nContact Not Found.");
            return;
        }

        this.contacts.splice(index, 1);

        console.log("\nContact Deleted Successfully.");
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
    //uc8
// Search by City
searchByCity(city: string): Contact[] {

    return this.contacts.filter(contact =>
        contact.city.toLowerCase() === city.toLowerCase()
    );
}

// Search by State
searchByState(state: string): Contact[] {

    return this.contacts.filter(contact =>
        contact.state.toLowerCase() === state.toLowerCase()
    );
}

//uc10
countByCity(city: string): number {
    return this.contacts.filter(
        contact => contact.city.toLowerCase() === city.toLowerCase()
    ).length;
}

countByState(state: string): number {
    return this.contacts.filter(
        contact => contact.state.toLowerCase() === state.toLowerCase()
    ).length;
}

//uc11
sortByName(): void {

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


