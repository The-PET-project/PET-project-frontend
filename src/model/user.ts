import { Address } from "./address";

export class User {
  private readonly _username: string;
  private _email: string;
  private _password: string;
  private _phone: string;
  private _mobile: string;
  private _firstName: string;
  private _lastName: string;
  private _middleName: string;
  private _address: Address;

  constructor(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    middlename?: string
  ) {
    this._username = username;
    this._email = email;
    this._password = password;
    this._firstName = firstname;
    this._lastName = lastname;
    this._middleName = middlename;
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get middleName() {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }
}
