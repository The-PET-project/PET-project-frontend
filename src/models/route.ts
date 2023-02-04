export class Route {
  private readonly routeId?: number;
  private serviceId: number;
  private appointment: Date;

  constructor(serviceId: number, appointment: Date, routeId?: number) {
    this.serviceId = serviceId;
    this.appointment = appointment;
    this.routeId = routeId;
  }

  get getRouteId() {
    return this.routeId;
  }

  get getServiceId() {
    return this.serviceId;
  }

  set setServiceId(value: number) {
    this.serviceId = value;
  }

  get getAppointment() {
    return this.appointment;
  }

  set setAppointment(value: Date) {
    this.appointment = value;
  }
}
