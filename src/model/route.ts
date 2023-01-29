export class Route {
  private readonly _routeId?: number;
  private _serviceId: number;
  private _appointment: Date;

  constructor(serviceId: number, appointment: Date, routeId?: number) {
    this._serviceId = serviceId;
    this._appointment = appointment;
    this._routeId = routeId;
  }

  get routeId() {
    return this._routeId;
  }

  get serviceId() {
    return this._serviceId;
  }

  set serviceId(value: number) {
    this._serviceId = value;
  }

  get appointment() {
    return this._appointment;
  }

  set appointment(value: Date) {
    this._appointment = value;
  }
}
