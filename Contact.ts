export interface IContact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;

    display(): void;
    equals(contact: Contact): boolean;
}

export class Contact implements IContact {

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

        console.log("--------------------------------");
        console.log("First Name   :", this.firstName);
        console.log("Last Name    :", this.lastName);
        console.log("Address      :", this.address);
        console.log("City         :", this.city);
        console.log("State        :", this.state);
        console.log("Zip          :", this.zip);
        console.log("Phone Number :", this.phoneNumber);
        console.log("Email        :", this.email);
    }

    toString(): string {
    return `
------------------------------------
First Name : ${this.firstName}
Last Name  : ${this.lastName}
Address    : ${this.address}
City       : ${this.city}
State      : ${this.state}
Zip        : ${this.zip}
Phone      : ${this.phoneNumber}
Email      : ${this.email}
------------------------------------`;
}

    // UC7
    equals(contact: Contact): boolean {

        return (
            this.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

    }

}