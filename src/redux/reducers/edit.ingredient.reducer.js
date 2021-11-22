const editIngredientReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EDIT_ITEM':
          console.log('action payload', action.payload);
          
        return action.payload;
      default:
        return state;
    }
  };
  

  export default editIngredientReducer;
  