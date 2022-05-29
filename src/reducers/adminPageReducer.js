const orderedItems = (state = [], action) => {
    switch (action.type) {
      case "GET_ORDERS":
       
        return action.payload.orders
       
        case "CHECKED":
          const updatedState = state.map((order) => {
            if (order.id !== action.payload.id) {
             
              return order;
              
            }
          
            const newOrder = order.lineItems.map((line) => {
              if (line.id !== action.payload.order.id) return line;
              return { ...line, completed: !line.completed };
            });
            return { ...order, lineItems: newOrder };
          });
       
          return updatedState;
        
          case "COMPLETED":
            const completedState = state.map((order) => {
              if (+order.id === +action.payload.id) {
                return { ...order, completed: true };
              }
              return order;
            });
           
            return completedState;
        
        default:
        return state;
      
    }
  };
  
  export default orderedItems;