import { Address } from "./address";

export class User {
  private readonly username: string;
  private email: string;
  private password: string;
  private phone: string;
  private mobile: string;
  private firstName: string;
  private lastName: string;
  private middleName: string;
  private address: Address;

  constructor(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    middlename?: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.middleName = middlename;
  }

  get getUsername() {
    return this.username;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(value: string) {
    this.password = value;
  }

  get getPhone() {
    return this.phone;
  }

  set setPhone(value: string) {
    this.phone = value;
  }

  get getMobile() {
    return this.mobile;
  }

  set setMobile(value: string) {
    this.mobile = value;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(value: string) {
    this.firstName = value;
  }

  get getLastName() {
    return this.lastName;
  }

  set setLastName(value: string) {
    this.lastName = value;
  }

  get getMiddleName() {
    return this.middleName;
  }

  set setMiddleName(value: string) {
    this.middleName = value;
  }

  get getAddress(): Address {
    return this.address;
  }

  set setAddress(value: Address) {
    this.address = value;
  }
}
