import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.car.searchTerm;
    });
    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }
    return (
        <div className="list-header">
            <h3 className="title is-3">Cars' List</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input className="input" value={searchTerm} onChange={handleSearchTermChange} />
            </div>
        </div>
    );
}

export default CarSearch;