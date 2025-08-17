import React, { useState } from 'react';
import { Car } from '../types/car';
import CarCard from './CarCard';

interface CarListProps {
  cars: Car[];
  onEdit: (car: Car) => void;
  onDelete: (id: string) => void;
  onAddNew: () => void;
  isLoading?: boolean;
  isDeleting?: boolean;
}

const CarList: React.FC<CarListProps> = ({
  cars,
  onEdit,
  onDelete,
  onAddNew,
  isLoading,
  isDeleting,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBrand, setFilterBrand] = useState('');

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.color.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !filterBrand || car.brand === filterBrand;
    return matchesSearch && matchesBrand;
  });

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Avtomobil boshqaruvi</h1>
        <p className="text-lg text-gray-600 mb-8">Avtomobillaringizni boshqaring va tahrirlang</p>
        <button
          onClick={onAddNew}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
        >
          + Yangi avtomobil qo'shish
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Qidirish</label>
            <input
              type="text"
              placeholder="Nomi, brendi yoki rangi bo'yicha qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
            />
          </div>
          <div className="lg:w-64">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Brend bo'yicha filtrlash</label>
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg bg-white"
            >
              <option value="">Barcha brendlar</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-blue-600">{filteredCars.length}</span> ta avtomobil topildi
          <span className="text-gray-500"> (jami {cars.length} ta)</span>
        </p>
      </div>

      {filteredCars.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Avtomobil topilmadi</h3>
          <p className="text-lg text-gray-600 mb-6">
            {searchTerm || filterBrand
              ? 'Qidiruv yoki filtr shartlarini o\'zgartiring.'
              : 'Birinchi avtomobilingizni qo\'shishdan boshlang!'
            }
          </p>
          {!searchTerm && !filterBrand && (
            <button
              onClick={onAddNew}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
            >
              Avtomobil qo'shish
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onEdit={onEdit}
              onDelete={onDelete}
              isDeleting={isDeleting}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
