import { getCars } from '@/services/api'
import { create } from 'zustand'

const useCarsStore = create((set) => ({
  cars: [],
  loading: true,
  addCar: (car) => set((state) => ({ cars: [...state.cars, car] })),
  deleteCar: (id) => set((state) => ({ cars: state.cars.filter((car) => car.id !== id) })),
  fetchCars: () => {
    getCars()
      .then((cars) => set({ cars }))
      .catch((err) => console.log(err))
      .finally(() => set({ loading: false }))
  }
}))

export default useCarsStore
