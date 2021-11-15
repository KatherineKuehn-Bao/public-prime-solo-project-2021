import { useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../BackButton/BackButton";

function AddForm() {

    //intialize dispatch for reducer 
    const dispatch = useDispatch();

//hold new item in state 
const [newItem, setNewItem] = useState({
    food_name: '',
    expiration_date: '',
    food_type: '',
    location_id: '',
    //WIll need to look into how to convert type to id.  
})

    //when input is filled out
    const handlePropertyChange = (event, property) => {
        console.log('event happened', event);
        setNewItem({..newItem, [property]: event.target.value })
    };

//ADD FUNCTION in SAGA

const addNewFood


    return (
        <>
        <div className="header"> 
            < BackButton />
            <h1> Add Foods</h1>

            </div>
        
        <div className="container">

            <form onSubmit={addNewFood}>
                <input
                placeholder="food_name"
                type="text"
                value={newItem.food_name}
                onChange={(event) => handlePropertyChange(event, "food_name")}
                />
                <input
                placeholder="expiration_date"
                type="date"
                value={newItem.expiration_date}
                onChange={(event) => handlePropertyChange(event, 'expiration_date')}
                />
                <select> Type </select>
                <select> Location </select>
                <button> Save </button>
            </form>

            <button> Cancel </button>

            </div>

        </>
    )
}


export default AddForm;