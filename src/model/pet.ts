export class Pet {
  private readonly _petId?: number;
  private _name: string;
  private _fullName: string;
  private _dateOfBirth: Date;
  private _sex: string;
  private _category: string;
  private _breed: string;
  private _color: string;
  private _rating: number;

  constructor(
    name: string,
    dateOfBirth: Date,
    sex: string,
    category: string,
    breed: string,
    petId?: number
  ) {
    this._name = name;
    this._dateOfBirth = dateOfBirth;
    this._sex = sex;
    this._category = category;
    this._breed = breed;
    this._petId = petId;
  }

  get petId() {
    return this._petId;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  get sex() {
    return this._sex;
  }

  get category() {
    return this._category;
  }

  get breed() {
    return this._breed;
  }

  get color() {
    return this._color;
  }

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
}
