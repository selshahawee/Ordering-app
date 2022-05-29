const orderedItems = (state = [], action) => {
    switch (action.type) {
      case "GET_ORDERS":
       
        return action.payload.orders
       
    
          
           
        
        default:
        return state;
      
    }
  };
  
  export default orderedItems;