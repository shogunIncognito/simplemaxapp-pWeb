import { getCars } from '@/services/api'
import { create } from 'zustand'

const useCarsStore = create((set) => ({
  cars: [],
  loading: true,
  fetchCars: () => {
    getCars()
      .then((cars) => {
        set({ cars })
      })
      .catch((err) => console.log(err))
      .finally(() => set({ loading: false }))
  }
}))

export default useCarsStore
