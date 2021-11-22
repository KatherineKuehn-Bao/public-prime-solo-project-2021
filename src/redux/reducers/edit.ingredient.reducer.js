const editIngredientReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EDIT_ITEM':
          console.log('action payload', action.payload);
          
        return action.payload;
      // case "EDIT_ONCHANGE":
      //   //update the one field that changed
      //   //keep all other fields the same
      //   return {
      //     ...state, 
      //     [action.payload.property] : action.payload.value
      //   }


      default:
        return state;
    }
  };
  

  export default editIngredientReducer;
  