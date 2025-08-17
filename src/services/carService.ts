import axios from 'axios';
import { Car, CreateCarData, UpdateCarData } from '../types/car';
import { API_CONFIG } from '../config/api';

export const carService = {
  async getAllCars(): Promise<Car[]> {
    const response = await axios.get(API_CONFIG.BASE_URL);
    return response.data;
  },

  async getCarById(id: string): Promise<Car> {
    const response = await axios.get(`${API_CONFIG.BASE_URL}/${id}`);
    return response.data;
  },

  async createCar(carData: CreateCarData): Promise<Car> {
    const response = await axios.post(API_CONFIG.BASE_URL, carData);
    return response.data;
  },

  async updateCar(carData: UpdateCarData): Promise<Car> {
    const response = await axios.put(`${API_CONFIG.BASE_URL}/${carData.id}`, carData);
    return response.data;
  },

  async deleteCar(id: string): Promise<void> {
    await axios.delete(`${API_CONFIG.BASE_URL}/${id}`);
  },
};
