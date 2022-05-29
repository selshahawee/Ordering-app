const initialState = {
  products: [],
  categories: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload.map((product) => {
          return { ...product, quantity: 0};
        }),
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "INCREMENT_QUANTITY":
      
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id !== action.payload.id) return product;
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }),
      };
    
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id !== action.payload.id) return product;
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }),
      };

    
    case "DELETE_FROM_CART":
      return {
     
          ...state,
          products: state.products.map((product) => {
            if (product.id !== action.payload.id) return product;
            return {
              ...product,
              quantity: product.quantity === 0,
            };
          }),
        };
      
     
    
    
     
     
    

    default:
      return state;
  }
};

export default appReducer;
