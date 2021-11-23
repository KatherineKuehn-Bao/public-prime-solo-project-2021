import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import '../AddForm/AddForm.css';

//Install MUI 
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KitchenIcon from '@mui/icons-material/Kitchen';

// Text Fields MUI 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//snackbar MUi 
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

//This form will edit and add new ingredients to the DB table 
function AddForm() {

    //intialize hooks 
    const dispatch = useDispatch();
    const history = useHistory();

    //get type  & Location array from DB 
    const type = useSelector(store => store.type);
    const location = useSelector(store => store.location);

    //hold new item in state 
    const [newItem, setNewItem] = useState({
        food_name: '',
        expiration_date: '',
        status: 'storage',
        food_type_id: '',
        location_id: '',
    })

    // FETCH Type and Location 
    useEffect(() => {
        dispatch({ type: 'FETCH_TYPE' });
        dispatch({ type: 'FETCH_LOCATION' });
    }, []);


    //when input is filled out
    const handlePropertyChange = (event, property) => {
        setNewItem({
            ...newItem,
            [property]: event.target.value,
        })
    };

    //ADD -- SUBMIT (newItem)
    const handleSubmit = (event, newItem) => {
        //ADD SNACKBAR 
        // setOpen(true);
        event.preventDefault();
        addItem(newItem);
        // if (mode === 'add') {
        //     addItem(item);
        // } else {
        //     updateItem(item);
        // }
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

    //MUI SNACKBAr ******STRETCH GOAL 
    // const action = (
    //     <React.Fragment>
    //       <Button color="secondary" size="small" onClick={handleClose}>
    //         UNDO
    //       </Button>
    //       <IconButton
    //         size="small"
    //         aria-label="close"
    //         color="inherit"
    //         onClick={handleClose}
    //       >
    //         <CloseIcon fontSize="small" />
    //       </IconButton>
    //     </React.Fragment>
    //   );


    //Close MUI snackbar 

    //   const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }

    //     setOpen(false);
    //   };

    return (
        <>
            <div className=".container">
                <div>
                    <h1> Add Foods <KitchenIcon></KitchenIcon></h1>
                </div>


                <div className="form">
                    <Box sx={{ minWidth: 120 }}>

                        <form onSubmit={(event) => handleSubmit(event, newItem)}>
                            <InputLabel> Enter New Inventory </InputLabel>

                            <TextField
                                variant="outlined"
                                label="type food here"
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
                            <InputLabel> Location of Food </InputLabel>

                            <Select
                                label="location"
                                placeholder="location_id"
                                value={newItem.location_id}
                                onChange={(event) => handlePropertyChange(event, 'location_id')}
                            >

                                {location.map((location) => {
                                    return (
                                        <MenuItem key={location.id} value={location.id}>
                                            {location.location}
                                        </MenuItem>
                                    );
                                })}
                            </Select>

                            {/* *******SUBMIT BUTTON */}
                            <Stack direction="column" spacing={2}>

                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Save </Button>

                                <Button
                                    type="button"
                                    onClick={cancelClick}
                                    variant="contained"
                                >
                                    Back to Home  </Button>
                            </Stack>

                        </form>
                    </Box>
                </div>
            </div>
        </>
    )
}


export default AddForm;