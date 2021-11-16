import { useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../BackButton/BackButton";




//This form will edit and add new ingredients to the DB table 
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
        setNewItem({ ...newItem, [property]: event.target.value })
    };

    //ADD FUNCTION in SAGA

    const addNewFood = (event) => {
        event.preventDefault();
        //ADD dispatch to SAGA HERE 
        console.log('clicked, added a new item');
    }


    return (
        <>
            <div
                className="header">
                <h1> Add Foods</h1>

            </div>

            < BackButton />

            <div
                className="formPanel">


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


                    {/* //REFERENCE FROM SAGAS */}
                    {/* Add Genre DropDown */}
                    {/* <Select 
                        value={newMovie.genre_id}
                        onChange={(event) => handleNameChange(event, 'genre_id')}>
                        <MenuItem 
                        disabled value='0'>
                            Genres
                        </MenuItem>
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select> */}


                        <select
                            placeholder="types"
                            value={newItem.food_type}
                        // onChange={(event) => handlePropertyChange (event, 'food_type')}
                        >
                            <option>Fruits</option>
                            <option>Vegetables </option>
                            <option>Grains</option>
                            <option>Legumes</option>
                            <option>Processed</option>
                        </select>

                    <select
                        placeholder="location"
                        value={newItem.location}
                    onChange={(event) => handlePropertyChange (event, 'food_type')}
                    >
                        <option>Fresh</option>
                        <option>Freezer </option>
                        <option>Pantry</option>
                        <option>Fridge</option>
                    </select>

                    <button> Save </button>
                    <button> Cancel </button>
                </form>



            </div>

        </>
    )
}


export default AddForm;