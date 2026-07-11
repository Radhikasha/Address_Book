// UC1 - Create Contact in Address Book

// Interface
interface IContact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;

    display(): void;
}

// Contact Class
class Contact implements IContact {

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
        console.log("\n--------- Contact Details ---------");
        console.log("First Name  :", this.firstName);
        console.log("Last Name   :", this.lastName);
        console.log("Address     :", this.address);
        console.log("City        :", this.city);
        console.log("State       :", this.state);
        console.log("Zip         :", this.zip);
        console.log("Phone Number:", this.phoneNumber);
        console.log("Email       :", this.email);
    }
}

// Main Program
console.log("Welcome to Address Book Program");

// Creating Contact Object
let person = new Contact(
    "Radhika",
    "Sharma",
    "Ramghat Road",
    "Aligarh",
    "Uttar Pradesh",
    202001,
    9876543210,
    "radhika@gmail.com"
);

// Display Contact Details
person.display();