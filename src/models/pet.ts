export class Pet {
  private readonly petId?: number;
  private name: string;
  private fullName: string;
  private dateOfBirth: Date;
  private sex: string;
  private category: string;
  private breed: string;
  private color: string;
  private rating: number;

  constructor(
    name: string,
    dateOfBirth: Date,
    sex: string,
    category: string,
    breed: string,
    petId?: number
  ) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.sex = sex;
    this.category = category;
    this.breed = breed;
    this.petId = petId;
  }

  get getPetId() {
    return this.petId;
  }

  get getName() {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getFullName() {
    return this.fullName;
  }

  set setFullName(value: string) {
    this.fullName = value;
  }

  get getDateOfBirth() {
    return this.dateOfBirth;
  }

  get getSex() {
    return this.sex;
  }

  get getCategory() {
    return this.category;
  }

  get getBreed() {
    return this.breed;
  }

  get getColor() {
    return this.color;
  }

  get getRating() {
    return this.rating;
  }

  set setRating(value: number) {
    this.rating = value;
  }
}
