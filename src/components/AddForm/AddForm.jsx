import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

//Install MUI 
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Text Fields MUI 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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

    //ADD -- ONLY ADD 
    const handleSubmit = (event, newItem) => {
        event.preventDefault();
        addItem(newItem);
        // if (mode === 'add') {
        //     addItem(item);
        // } else {
        //     updateItem(item);
        // }
        console.log('new item', newItem);
    }

    //Add new item to the DB Dispatch "POST_ITEM" / clearForm()
    const addItem = (newItem) => {
        //sagas POST 
        dispatch({ type: 'POST_ITEM', payload: newItem });
        console.log('clicked, added new item');
        //clear form
        clearForm();
    }

    //update item in the DB -
    // const updateItem = (item) => {
    //     //sagas 
    //     dispatch({ type: 'UPDATE_ITEM', payload: item });
    //     console.log('clicked, edit item');
    // }

    //WORKS - back to home - push to /user page
    const cancelClick = (event) => {
        history.push('/user');
    }

    //Clear the form 
    const clearForm = () => {
        console.log('resetting form');
        setNewItem({
            food_name: '',
            expiration_date: '',
            status: 'storage',
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



            <Box sx={{ minWidth: 120 }}>

                <FormControl full width>
                    {/* className="formPanel" */}


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
                        <InputLabel> Type of Food </InputLabel>
                        <Select
                            label="type"
                            placeholder="types"
                            value={newItem.food_type_id}
                            onChange={(event) => handlePropertyChange(event, 'food_type_id')}>
                        

                            {type.map((type) => {
                                return (
                                    <MenuItem key={type.id} value={type.id}>
                                        {type.type}
                                    </MenuItem>
                                );
                            })}
                        </Select>


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

                        <Stack direction="column" spacing={2}>
                            <Button
                                type="submit"
                                variant="contained">
                                Save </Button>

                            <Button
                                type="button"
                                onClick={cancelClick}
                                variant="contained">
                                Back to Home  </Button>
                        </Stack>
                    </form>

                </FormControl>
            </Box>

        </>
    )
}


export default AddForm;