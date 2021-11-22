import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


function EditForm(props) {

    //intialize hooks 
    const dispatch = useDispatch();
    const history = useHistory();
    const editIngredient = useSelector((store) => store.editIngredient);


    //check if changing as typing 
    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    //called with submit button is pushed
    function handleSubmit(event) {
        event.preventDefault();
        dispatch({
            type: 'SET_EDIT_ITEM',
            payload: property
        })

    }
    return (


    )
}

export default EditForm;