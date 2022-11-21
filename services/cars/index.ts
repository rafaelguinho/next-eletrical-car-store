import { CarApi, CarDetailApi } from "../../models/types";
import ICarsService from "./ICarService";

const BASE_URL = 'http://localhost:5193'

export default class CarsService implements ICarsService {
  async getCars(): Promise<CarApi[]> {
    const response = await fetch(`${BASE_URL}/cars`);

    const data: CarApi[] = await response.json();

    return data;
  }

  async getCar(id: string): Promise<CarDetailApi> {
    const response = await fetch(`${BASE_URL}/car/${id}`);

    const data: CarDetailApi = await response.json();

    return data;
  }

  async getCarsIds(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}`);

    const data: string[] = await response.json();

    return data;
  }
}
