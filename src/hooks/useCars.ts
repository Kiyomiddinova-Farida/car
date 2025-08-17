import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { carService } from '../services/carService';
import toast from 'react-hot-toast';

export const useCars = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: carService.getAllCars,
  });
};

export const useCar = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => carService.getCarById(id),
    enabled: !!id,
  });
};

export const useCreateCar = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: carService.createCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      toast.success('Car created successfully!');
    },
    onError: () => {
      toast.error('Failed to create car');
    },
  });
};

export const useUpdateCar = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: carService.updateCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      toast.success('Car updated successfully!');
    },
    onError: () => {
      toast.error('Failed to update car');
    },
  });
};

export const useDeleteCar = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: carService.deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      toast.success('Car deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete car');
    },
  });
};
