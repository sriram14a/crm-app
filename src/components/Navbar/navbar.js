import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export function Navbar() {

    const navigate = useNavigate();

  return (
        <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:"#F8F9FA",color:"black",paddingRight:{ xs: '0px', sm: '60px' },paddingLeft:{ xs: '0px', sm: '60px' }}} component="nav">
        <Toolbar>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,':hover': {
              cursor:"pointer"}}}
            onClick={()=>navigate('/')}
          >
            CRM
          </Typography>
          <Button sx={{ color: 'black',':hover': {
              bgcolor: 'black', 
              color: 'white',transition:".5s ease-in-out"} }} onClick={()=>navigate('/adminsignup')} variant="text">Admin</Button>
          <Button sx={{ color: 'black',':hover': {
              bgcolor: 'black', 
              color: 'white',transition:".5s ease-in-out"} }} onClick={()=>navigate('/managersignup')} variant="text">Manager</Button>
          <Button sx={{ color: 'black',':hover': {
              bgcolor: 'black', 
              color: 'white',transition:".5s ease-in-out"} }} onClick={()=>navigate('/employeesignup')} variant="text">employee</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

};