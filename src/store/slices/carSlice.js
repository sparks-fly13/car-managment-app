import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'car',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            //Assumption: action.payload is an object with a name and cost property
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            //Assumption: action.payload is an id
            state.cars = state.cars.filter((car) => {
                return car.id !== action.payload;
            });
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;