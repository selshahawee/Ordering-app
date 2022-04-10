
import { Grid } from '@mui/material';
import MenuItems from './MenuItems';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import FoodCategories from './FoodCategories';
import { getProducts }  from '../actions/appActions';

const Menu = () => {
	const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const [categoryToShow, setCategoryToShow] = useState("Popular");

  useEffect(() => dispatch(getProducts()), []);


  function setCurrentCategory(cat) {
   setCategoryToShow(cat)
  }
  
	return (
		<Grid  container spacing={3} justifyContent='center'>
			<Grid item sx={4}>
        <FoodCategories setCurrentCategory={setCurrentCategory} />
        
			</Grid>
            
       
      {/* filter products by category name */}
      {products?.filter((product) => { return product.Category === categoryToShow }).map((product) => {
             return<MenuItems key={product.id} product={product} cartItems={cartItems} />
       
      })}
               
              
               

                    
               
		</Grid>
	);
};

export default Menu;
