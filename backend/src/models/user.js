class User {
    constructor(firstName, lastName, streetAddress, city, state, zipCode,
        phoneNumber, orders) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.streetAddress = streetAddress;
            this.city = city;
            this.state = state;
            this.zipCode = zipCode;
            this.phoneNumber = phoneNumber;
            this.orders = orders;
        }
}

export default User;