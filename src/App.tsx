import React, { useState } from 'react';
import { useCars, useCreateCar, useUpdateCar, useDeleteCar } from './hooks/useCars';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import { Car, CreateCarData } from './types/car';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);

  const { data: cars = [], isLoading } = useCars();
  const createCarMutation = useCreateCar();
  const updateCarMutation = useUpdateCar();
  const deleteCarMutation = useDeleteCar();

  const handleAddNew = () => {
    setEditingCar(null);
    setShowForm(true);
  };

  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bu avtomobilni o\'chirishni xohlaysizmi?')) {
      deleteCarMutation.mutate(id);
    }
  };

  const handleFormSubmit = (data: CreateCarData) => {
    if (editingCar) {
      updateCarMutation.mutate({ ...data, id: editingCar.id! });
    } else {
      createCarMutation.mutate(data);
    }
    setShowForm(false);
    setEditingCar(null);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCar(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <CarList
          cars={cars}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
          isLoading={isLoading}
          isDeleting={deleteCarMutation.isPending}
        />

        {showForm && (
          <CarForm
            car={editingCar || undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            isLoading={createCarMutation.isPending || updateCarMutation.isPending}
          />
        )}
      </div>
    </div>
  );
}

export default App;
