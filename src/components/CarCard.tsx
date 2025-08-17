import React from 'react';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
  onEdit: (car: Car) => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, onEdit, onDelete, isDeleting }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
            <p className="text-lg text-blue-600 font-semibold">{car.brand}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(car)}
              className="px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all font-medium"
              title="Tahrirlash"
            >
              Tahrirlash
            </button>
            <button
              onClick={() => onDelete(car.id!)}
              disabled={isDeleting}
              className="px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all font-medium disabled:opacity-50"
              title="O'chirish"
            >
              O'chirish
            </button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Rangi:</span>
            <span className="text-gray-900 font-semibold">{car.color}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Chiqarilgan sana:</span>
            <span className="text-gray-900 font-semibold">{formatDate(car.releaseDate)}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600 font-medium">Kuchi:</span>
            <span className="text-gray-900 font-semibold">{car.power} ot kuchi</span>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-100">
          <div className="text-3xl font-bold text-gray-600 mb-1">
            {formatPrice(car.price)}
          </div>
          <p className="text-sm text-gray-500">Narxi</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
