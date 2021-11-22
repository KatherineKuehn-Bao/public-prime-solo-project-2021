const editIngredientReducer = (state = {}, action) => {
  switch (action.type) {
    //SUBMIT - might be doubled up with SAGA 
    case 'SET_EDIT_ITEM':
      console.log('action payload', action.payload);

      return action.payload;
      //as they type 
    case "EDIT_ONCHANGE":
      //   //update the one field that changed
      //   //keep all other fields the same
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }


    default:
      return state;
  }
};


export default editIngredientReducer;
