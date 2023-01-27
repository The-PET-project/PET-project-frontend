export class Address {
  private _address: string;
  private _zipCode: number;
  private _city: string;
  private _county: string;
  private _country: string;

  constructor(
    address: string,
    zipCode: number,
    city: string,
    county: string,
    country: string
  ) {
    this._address = address;
    this._zipCode = zipCode;
    this._city = city;
    this._county = county;
    this._country = country;
  }

  get address() {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(value: number) {
    this._zipCode = value;
  }

  get city() {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get county() {
    return this._county;
  }

  set county(value: string) {
    this._county = value;
  }

  get country() {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}
