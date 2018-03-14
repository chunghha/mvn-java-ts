// Generated using typescript-generator version 2.1.406 on 2018-03-13 23:55:35.

export interface Account {
    type: string;
    trackNumber: string;
}

export interface Address {
    addrLine1: string;
    addrLine2: string;
    city: string;
    state: string;
    zip: string;
}

export interface Customer {
    name: string;
    age: number;
    hasChildren: boolean;
    tags: string[];
    emails: { [index: string]: string };
    address: Address;
    accounts: Account[];
}
