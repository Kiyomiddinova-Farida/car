import React from 'react';
import { useForm } from 'react-hook-form';
import { Car, CreateCarData } from '../types/car';

interface CarFormProps {
  car?: Car;
  onSubmit: (data: CreateCarData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const CarForm: React.FC<CarFormProps> = ({ car, onSubmit, onCancel, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCarData>({
    defaultValues: car || {
      name: '',
      price: 0,
      brand: '',
      color: '',
      releaseDate: '',
      power: 0,
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            {car ? 'Avtomobilni tahrirlash' : 'Yangi avtomobil qo\'shish'}
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Avtomobil nomi *
            </label>
            <input
              {...register('name', { required: 'Nomi kiritilishi shart', minLength: { value: 2, message: 'Nomi kamida 2 ta harf bo\'lishi kerak' } })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Avtomobil nomini kiriting"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Narxi *
            </label>
            <input
              {...register('price', { required: 'Narxi kiritilishi shart', min: { value: 0, message: 'Narxi musbat bo\'lishi kerak' } })}
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Narxni kiriting"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Brendi *
            </label>
            <input
              {...register('brand', { required: 'Brendi kiritilishi shart' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Brendni kiriting"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rangi *
            </label>
            <input
              {...register('color', { required: 'Rangi kiritilishi shart' })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Rangni kiriting"
            />
            {errors.color && (
              <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Chiqarilgan sana *
            </label>
            <input
              {...register('releaseDate', { required: 'Sana kiritilishi shart' })}
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {errors.releaseDate && (
              <p className="text-red-500 text-sm mt-1">{errors.releaseDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kuchi (ot kuchi) *
            </label>
            <input
              {...register('power', { required: 'Kuchi kiritilishi shart', min: { value: 0, message: 'Kuchi musbat bo\'lishi kerak' } })}
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Kuchini ot kuchida kiriting"
            />
            {errors.power && (
              <p className="text-red-500 text-sm mt-1">{errors.power.message}</p>
            )}
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all font-medium"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium shadow-lg"
            >
              {isLoading ? 'Saqlanmoqda...' : (car ? 'Yangilash' : 'Yaratish')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
