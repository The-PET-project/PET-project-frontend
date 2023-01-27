import { ServiceType } from "./enum/service_type";
import { Day } from "./enum/day";
import { Pet } from "./pet";

export class Service {
  private readonly _serviceId?: number;
  private _type: ServiceType;
  private _petList: Array<Pet>;
  private _days: Array<Day>;
  private _startTime: Date; //DateTime:	"2011-10-05T14:48:00.000Z"
  private _timeInterval: number;
  private _startDate: Date;
  private _endDate: Date;
  private _description: string;

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
    this._type = type;
    this._petList = petList;
    this._days = days;
    this._startTime = startTime;
    this._timeInterval = timeInterval;
    this._startDate = startDate;
    this._endDate = endDate;
    this._description = description;
    this._serviceId = serviceId;
  }

  get serviceId() {
    return this._serviceId;
  }

  get type() {
    return this._type;
  }

  set type(value: ServiceType) {
    this._type = value;
  }

  get petList() {
    return this._petList;
  }

  set petList(value: Array<Pet>) {
    this._petList = value;
  }

  get days() {
    return this._days;
  }

  set days(value: Array<Day>) {
    this._days = value;
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get timeInterval() {
    return this._timeInterval;
  }

  set timeInterval(value: number) {
    this._timeInterval = value;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get description() {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
