import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    const {cars, name} = useSelector(({form, car: {cars, searchTerm}}) => {
        const filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return {
            cars: filteredCars,
            name: form.name,
        };
    });

    const handleDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car)=>{
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={()=>handleDelete(car)}>Remove</button>
            </div>
        )
    })

    return(
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;