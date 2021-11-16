const ingredientsReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'SET_INGREDIENTS':
          console.log('action payload', action.payload);
          
        return action.payload;
      default:
        return state;
    }
  };
  

  export default ingredientsReducer;
  