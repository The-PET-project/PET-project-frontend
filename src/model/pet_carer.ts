import { User } from "./user";
import { Route } from "./route";

export class PetCarer extends User {
  private readonly _petCarerId?: number;
  private _routes: Array<Route> = [];
  private _rating: number;

  constructor(user: User, petCarerId?: number) {
    super(
      user.username,
      user.email,
      user.password,
      user.firstName,
      user.lastName
    );
    this._petCarerId = petCarerId;
  }

  get petCarerId() {
    return this._petCarerId;
  }

  get routes() {
    return this._routes;
  }

  set routes(value: Array<Route>) {
    this._routes = value;
  }

  get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
}
