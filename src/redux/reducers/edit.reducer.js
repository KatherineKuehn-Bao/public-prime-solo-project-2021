const editReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'EDIT_ONCHANGE':
          console.log('action payload', action.payload);
          
        return action.payload;
      default:
        return state;
    }
  };
  

  export default editReducer;
  