import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// import BackButton from "../BackButton/BackButton";




//This form will edit and add new ingredients to the DB table 
function AddForm() {

    //intialize dispatch for reducer 
    const dispatch = useDispatch();
    const history = useHistory();

    //get type array from DB 
    const type = useSelector(store => store.type);
    const location = useSelector(store => store.location);


    //hold new item in state 
    const [newItem, setNewItem] = useState({
        food_name: '',
        expiration_date: '',
        status: 'storage',
        food_type_id: '',
        location_id: '',
        //WIll need to look into how to convert type to id.  
    })

    useEffect(() => {
        dispatch({ type: 'FETCH_TYPE' });
        dispatch({ type: 'FETCH_LOCATION' });
    }, []);


    //when input is filled out
    const handlePropertyChange = (event, property) => {
        // console.log('event happened', newItem);
        setNewItem({
            ...newItem,
            [property]: event.target.value,
        })
    };

    //ADD FUNCTION in SAGA


    //ADD OR EDIT 
    const handleSubmit = (event, newItem) => {
        event.preventDefault();
        addItem(newItem);
        // if (mode === 'add'){
        //         addItem(item);
        // } else {
        //     updateItem(item);
        // }
        console.log('new item', newItem);
    }
    const addItem = (newItem) => {
        //sagas
        dispatch({ type: 'POST_ITEM', payload: newItem });
        console.log('clicked, added new item');
        //clear form
        clearForm();

    }
    //WORKS 
    const cancelClick = (event) => {
        history.push('/user');
    }

    //Clear the form 
    const clearForm = () => {
        console.log('resetting form');
        setNewItem({
            food_name: '',
            expiration_date: '',
            status: '',
            food_type_id: '',
            location_id: ''
        })
    }


    return (
        <>
            <div
                className="header">
                <h1> Add Foods</h1>

            </div>

            {/* < BackButton /> */}

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
                                <option key={type.id} value={type.id}>
                                    {type.type}
                                </option>
                            );
                        })}
                    </select>


                    {/* Location dropdown */}
                    <select
                        placeholder="location_id"
                        value={newItem.location_id}
                        onChange={(event) => handlePropertyChange(event, 'location_id')}
                    >
                        <option
                            disabled="disabled">choose a location</option>

                        {location.map((location) => {
                            return (
                                <option key={location.id} value={location.id}>
                                    {location.location}
                                </option>
                            );
                        })}

                    </select>

                    <button
                        type="submit">
                        Save </button>

                    <button
                        type="button"
                        onClick={cancelClick}>
                        Back to Home  </button>
                </form>


            </div>

        </>
    )
}


export default AddForm;