export class Address {
  private address: string;
  private zipCode: number;
  private city: string;
  private county: string;
  private country: string;

  constructor(
    address: string,
    zipCode: number,
    city: string,
    county: string,
    country: string
  ) {
    this.address = address;
    this.zipCode = zipCode;
    this.city = city;
    this.county = county;
    this.country = country;
  }

  get getAddress() {
    return this.address;
  }

  set setAddress(value: string) {
    this.address = value;
  }

  get getZipCode() {
    return this.zipCode;
  }

  set setZipCode(value: number) {
    this.zipCode = value;
  }

  get getCity() {
    return this.city;
  }

  set setCity(value: string) {
    this.city = value;
  }

  get getCounty() {
    return this.county;
  }

  set setCounty(value: string) {
    this.county = value;
  }

  get getCountry() {
    return this.country;
  }

  set setCountry(value: string) {
    this.country = value;
  }
}
