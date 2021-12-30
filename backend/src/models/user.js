class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    orders,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.phoneNumber = phoneNumber;
    this.orders = orders;
  }
}

export default User;
