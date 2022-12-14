export interface CarApi {
  id: string;
  imageUrl: string;
  description: string;
  brand: string;
  model: string;
  manufactureYear: number;
  modelYear: number;
  price: number;
  kilometersDriven: number;
  city: string;
}

export interface CarDetailApi extends CarApi {
  plateLastNumber: string;
  transmissionType: string;
  color: string;
  itens: string[];
}
