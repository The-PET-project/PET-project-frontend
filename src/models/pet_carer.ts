import { User } from "./user";
import { Route } from "./route";

export class PetCarer extends User {
  private readonly petCarerId?: number;
  private routes: Array<Route> = [];
  private rating: number;

  constructor(user: User, petCarerId?: number) {
    super(
      user.getUsername,
      user.getEmail,
      user.getPassword,
      user.getFirstName,
      user.getLastName
    );
    this.petCarerId = petCarerId;
  }

  get getPetCarerId() {
    return this.petCarerId;
  }

  get getRoutes() {
    return this.routes;
  }

  set setRoutes(value: Array<Route>) {
    this.routes = value;
  }

  get getRating() {
    return this.rating;
  }

  set setRating(value: number) {
    this.rating = value;
  }
}
