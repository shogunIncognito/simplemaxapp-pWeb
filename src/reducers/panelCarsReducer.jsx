import { useReducer } from 'react'

const panelCarsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CAR':
      return {
        ...state,
        selectedCar: action.payload
      }
    case 'SET_CAR_TO_DELETE':
      return {
        ...state,
        carToDelete: action.payload
      }
    case 'SET_FILTERED_CARS':
      return {
        ...state,
        filteredCars: action.payload
      }
    case 'SET_CARS_SELECTED':
      return {
        ...state,
        carsSelected: action.payload
      }
    case 'SET_CAR_PREVIEW_TO_CHANGE':
      return {
        ...state,
        carPreviewToChange: action.payload
      }
    default:
      return state
  }
}

const INITIAL_STATE = {
  selectedCar: null,
  carToDelete: null,
  filteredCars: [],
  carsSelected: [],
  carPreviewToChange: null
}

export default function usePanelCarsReducer () {
  return useReducer(panelCarsReducer, INITIAL_STATE)
}
