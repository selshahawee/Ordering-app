import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';
import { listCategories } from '../actions';
import { useContext, useEffect } from 'react';
import { Store }  from '../Store';
import { Button } from '@mui/material';

 

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
        
       <Button><Item p={50}><Avatar  sx={{ width: 80, height: 80 }} src="/images/seafoodpizza.png"></Avatar> Popular</Item></Button> 
       <Button><Item Button> <Avatar sx={{ width: 80, height: 80 }}src="/images/pizza1.png"></Avatar>Pizza</Item></Button> 
       <Button><Item Button> <Avatar sx={{ width: 80, height: 80 }}src="/images/burger.png"></Avatar>Burgers</Item></Button> 
       <Button><Item Button> <Avatar sx={{ width: 80, height: 80 }} src="/images/crepe3.png"></Avatar>Crepe</Item></Button> 
       <Button><Item Button> <Avatar sx={{ width: 80, height: 80 }}src="/images/beverages.jpeg"></Avatar>Beverages</Item></Button> 
      </Stack>
    </div>
  );
}


