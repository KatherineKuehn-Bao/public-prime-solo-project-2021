import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import '../AddForm/AddForm.css';

//Install MUI 
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// Text Fields MUI 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//snackbar MUi 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



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

    // ****NEEDS WORK //ADD -- SUBMIT (newItem)
    const handleSubmit = (event, newItem) => {
        //ADD SNACKBAR 
        // setOpen(true);
        event.preventDefault();
        addItem(newItem);
    }

    //Add new item to the DB Dispatch "POST_ITEM" / clearForm()
    const addItem = (newItem) => {
        //sagas POST 
        dispatch({ type: 'POST_ITEM', payload: newItem });
        console.log('clicked, added new item');
        //clear form
        clearForm();
    }

    //push to /user page
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
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };



    return (
        <>
            <div className=".container">
                <div>
                    <h1> Add Foods <LocalGroceryStoreIcon></LocalGroceryStoreIcon></h1>
                </div>

                <div className="form">
                    <Box sx={{ minWidth: 120 }}>

                        <form 
                        className="FormContainer "
                        onSubmit={(event) => handleSubmit(event, newItem)}>
                            <InputLabel> Enter Inventory Here </InputLabel>

                            <TextField
                                variant="outlined"
                                label="new ingredient"
                                type="text"
                                helperText="Ingredient Name"

                                value={newItem.food_name}
                                onChange={(event) => handlePropertyChange(event, "food_name")}
                            />

     {/* Expiration Date  */}
                            <TextField
                                id="date"
                                type="date"
                                helperText="Expiration Date"
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
                                    onClick={handleClick}
                                    variant="contained"
                                >
                                    Save </Button>

                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        New food has been saved!
                                        </Alert>
                                    </Snackbar>



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