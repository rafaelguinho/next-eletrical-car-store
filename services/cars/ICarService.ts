import { CarApi, CarDetailApi } from "../../models/types";

export default interface ICarsService {
  getCars(): Promise<CarApi[]>;
  getCar(id: string): Promise<CarDetailApi>;
  getCarsIds(): Promise<string[]>;
}
