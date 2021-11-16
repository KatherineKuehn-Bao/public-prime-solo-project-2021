const newItemReducer = (state = [{}], action) => {
    switch (action.type) {
      case 'POST_ITEM':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default newItemReducer;
  