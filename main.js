class Client {
    constructor(fullName, adresses, phones) {
        this.fullName = fullName;
        this.adresses = adresses;
        this.phones = phones;
    }

    getInfo() {
        console.log(`Name:  ${this.fullName} 
                    Adress: ${this.adresses}
                    Phones: ${this.phones}`);
    }

    deleteInfo() {
        localStorage.removeItem(this.fullName);

        console.log(`Information about client ${this.fullName} deleted`);
    }
}

class Card {
    constructor(number, expireDate, cvv, client) {
        this.number = number;
        this.expireDate = expireDate;
        this.cvv = cvv;
        this.client = client;
    }

    getInfo() {
        console.log(`Number card: ${this.number}
                    Expire date: ${this.expireDate}
                    CVV: ${this.cvv}
                    Client: ${this.client}`);
    }

    deleteInfo() {
        localStorage.removeItem(this.number);

        console.log(`Information about card ${this.number} deleted`);
    }
}

class Payment {
    constructor(sendersCard, receiversCard, amount, currency, date) {
        this.sendersCard = sendersCard;
        this.receiversCard = receiversCard;
        this.amount - amount;
        this.currency = currency;
        this.date = date;
    }

    getInfo() {
        console.log(`Senders card: ${this.sendersCard}
                    Receivers card: ${this.receiversCard}
                    Amount: ${this.amount}
                    Currency: ${this.currency}
                    Date: ${this.date}`);
    }

    deleteInfo() {
        localStorage.removeItem(this.sendersCard);

        console.log(`Information about payment this client ${this.sendersCard} deleted`);
    }
}

let client1 = new Client('Petrov Vasya', 'avenue Gagarina, 32', '+380695471284'),
    client2 = new Client('Ivanov Nikita', 'street Sunny, 345', '+380907042324'),
    client3 = new Client('Adlina Olga', 'street Vinogradova, 3', '+380914466284');

client1.getInfo();
client2.getInfo();
client3.getInfo();

let card1 = new Card('123654456', '29.09.2018', '3868', 'Petrov Vasya'),
    card2 = new Card('987456456', '02.12.2017', '0638', 'Ivanov Nikita'),
    card3 = new Card('852369754', '15.01.2028', '1238', 'Adlina Olga');

card1.getInfo();
card2.getInfo();
card3.getInfo();
card3.deleteInfo();

let payment1 = new Payment('Petrov Vasya', 'Ivanov Nikita', '300', 'dollars', '12.07.17');

payment1.getInfo();
payment1.deleteInfo();