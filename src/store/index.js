import { configureStore } from "@reduxjs/toolkit";
import { carReducer, addCar, removeCar, changeSearchTerm } from "./slices/carSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        car: carReducer,
        form: formReducer
    }
});

export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost};