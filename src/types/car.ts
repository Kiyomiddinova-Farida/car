export interface Car {
  id?: string;
  name: string;
  price: number;
  brand: string;
  color: string;
  releaseDate: string;
  power: number;
}

export interface CreateCarData {
  name: string;
  price: number;
  brand: string;
  color: string;
  releaseDate: string;
  power: number;
}

export interface UpdateCarData extends Partial<CreateCarData> {
  id: string;
}
