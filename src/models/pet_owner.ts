import { Pet } from "./pet";
import { Service } from "./service";
import { User } from "./user";

export class PetOwner extends User {
  private readonly ownerId?: number;
  private petList: Array<Pet> = [];
  private serviceList: Array<Service> = [];
  private rating: number;

  constructor(user: User, ownerId?: number) {
    super(
      user.getUsername,
      user.getEmail,
      user.getPassword,
      user.getFirstName,
      user.getLastName
    );
    this.ownerId = ownerId;
  }

  get getOwnerId() {
    return this.ownerId;
  }

  get getPetList() {
    return this.petList;
  }

  set setPetList(value: Array<Pet>) {
    this.petList = value;
  }

  get getServiceList() {
    return this.serviceList;
  }

  set setServiceList(value: Array<Service>) {
    this.serviceList = value;
  }

  get getRating() {
    return this.rating;
  }

  set setRating(value: number) {
    this.rating = value;
  }
}
