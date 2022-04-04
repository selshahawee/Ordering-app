import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import { listCategories } from '../actions';
import { useContext, useEffect } from 'react';
import { Store }  from '../store';


 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FoodCategories() {
  const {state,dispatch} = useContext(Store);
  
  useEffect(() => {
    listCategories(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider style={{ background: ' solid black' }} orientation="vertical" flexItem />}
        spacing={2}
        p={5} >
        
        <Item p={50}><Avatar sx={{ width: 80, height: 80 }} src="/images/seafoodpizza.png"></Avatar> Popular</Item>
        <Item> <Avatar sx={{ width: 80, height: 80 }}src="/images/pizza1.png"></Avatar>Pizza</Item>
        <Item> <Avatar sx={{ width: 80, height: 80 }}src="/images/burger.png"></Avatar>Burgers</Item>
        <Item> <Avatar sx={{ width: 80, height: 80 }} src="/images/crepe.png"></Avatar>Crepe</Item>
        <Item> <Avatar sx={{ width: 80, height: 80 }}src="/images/beverages.jpeg"></Avatar>Beverages</Item>
      </Stack>
    </div>
  );
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
  
//   color: theme.palette.text.secondary,
// }));

// export default function DirectionStack() {
//   return (
//     <div>
//       <Stack  direction="row" spacing={2}>
        
        
//       </Stack>
//     </div>
//   );
// }
