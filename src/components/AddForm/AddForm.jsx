import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import BackButton from "../BackButton/BackButton";




//This form will edit and add new ingredients to the DB table 
function AddForm() {

    //intialize dispatch for reducer 
    const dispatch = useDispatch();
    const history = useHistory();

    //get type array from DB 
    const type = useSelector(store => store.type);


    //hold new item in state 
    const [newItem, setNewItem] = useState({
        food_name: '',
        expiration_date: '',
        food_type_id: '',
        location_id: '',
        //WIll need to look into how to convert type to id.  
    })

    useEffect(() => {
        dispatch({ type: 'FETCH_TYPE' });
    }, []);


    //when input is filled out
    const handlePropertyChange = (event, property) => {
        console.log('event happened', newItem);
        setNewItem({ ...newItem, [property]: event.target.value })
    };

    //ADD FUNCTION in SAGA


    //ADD OR EDIT 
    const handleSubmit = (event, item) => {
        event.preventDefault();
        // if (mode === 'add'){
        //         addItem(item);
        // } else {
        //     updateItem(item);
        // }
        console.log('new item', newItem);
    }
    const addItem = (newItem) => {
        //sagas
        //clear form

    }
    //WORKS 
    const cancelClick = (event) => {
        alert('You are leaving the page and no changes will be saved')
        history.push('/user');
    }



    //testing type from DB 
    console.log('types of food', type);


    return (
        <>
            <div
                className="header">
                <h1> Add Foods</h1>

            </div>

            < BackButton />

            <div
                className="formPanel">


                <form onSubmit={(event) => handleSubmit(event, newItem)}>
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


                    {/* Types Dropdown */}

                    <select
                        placeholder="types"
                        value={newItem.food_type_id}
                        onChange={(event) => handlePropertyChange(event, 'food_type_id')}>
                        <option
                            disabled value='0'>
                            choose a type
                        </option>

                        {type.map((type) => {
                            return (
                                 <option key= {type.id} value={type.id}>
                                     {type.type}
                                     </option>
                            );
                        })}

                        {/* <option>Fruits</option>
                        <option>Vegetables </option>
                        <option>Grains</option>
                        <option>Legumes</option>
                        <option>Processed</option>
                        <option>Nuts & Seeds</option> */}

                    </select>



                    <select
                        placeholder="location"
                        value={newItem.location}
                        onChange={(event) => handlePropertyChange(event, 'location')}
                    >
                        <option
                            disabled="disabled">choose a location</option>

                        <option>Fresh</option>
                        <option>Freezer </option>
                        <option>Pantry</option>
                        <option>Fridge</option>
                    </select>

                    <button
                        type="submit">
                        Save </button>
                </form>

                <button
                    onClick={cancelClick}>
                    Cancel </button>




            </div>

        </>
    )
}


export default AddForm;