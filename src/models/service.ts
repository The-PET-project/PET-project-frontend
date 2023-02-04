import { ServiceType } from "./enums/service_type";
import { Day } from "./enums/day";
import { Pet } from "./pet";

export class Service {
  private readonly serviceId?: number;
  private type: ServiceType;
  private petList: Array<Pet>;
  private days: Array<Day>;
  private startTime: Date; //DateTime:	"2011-10-05T14:48:00.000Z"
  private timeInterval: number;
  private startDate: Date;
  private endDate: Date;
  private description: string;

  constructor(
    type: ServiceType,
    petList: Array<Pet>,
    days: Array<Day>,
    startTime: Date,
    timeInterval: number,
    startDate: Date,
    endDate?: Date,
    description?: string,
    serviceId?: number
  ) {
    this.type = type;
    this.petList = petList;
    this.days = days;
    this.startTime = startTime;
    this.timeInterval = timeInterval;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
    this.serviceId = serviceId;
  }

  get getServiceId() {
    return this.serviceId;
  }

  get getType() {
    return this.type;
  }

  set setType(value: ServiceType) {
    this.type = value;
  }

  get getPetList() {
    return this.petList;
  }

  set setPetList(value: Array<Pet>) {
    this.petList = value;
  }

  get getDays() {
    return this.days;
  }

  set setDays(value: Array<Day>) {
    this.days = value;
  }

  get getStartTime() {
    return this.startTime;
  }

  set setStartTime(value: Date) {
    this.startTime = value;
  }

  get getTimeInterval() {
    return this.timeInterval;
  }

  set setTimeInterval(value: number) {
    this.timeInterval = value;
  }

  get getStartDate() {
    return this.startDate;
  }

  set setStartDate(value: Date) {
    this.startDate = value;
  }

  get getEndDate() {
    return this.endDate;
  }

  set setEndDate(value: Date) {
    this.endDate = value;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }
}
