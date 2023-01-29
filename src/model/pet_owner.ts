import { Pet } from "./pet";
import { Service } from "./service";
import { User } from "./user";

export class PetOwner extends User {
  private readonly _ownerId?: number;
  private _petList: Array<Pet> = [];
  private _serviceList: Array<Service> = [];
  private _rating: number;

  constructor(user: User, ownerId?: number) {
    super(
      user.username,
      user.email,
      user.password,
      user.firstName,
      user.lastName
    );
    this._ownerId = ownerId;
  }

  get ownerId() {
    return this._ownerId;
  }

  get petList() {
    return this._petList;
  }

  set petList(value: Array<Pet>) {
    this._petList = value;
  }

  get serviceList() {
    return this._serviceList;
  }

  set serviceList(value: Array<Service>) {
    this._serviceList = value;
  }

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
}
