import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget';
// Importamos Link para agregar navegabilidad
import { NavLink, Link } from 'react-router-dom';

// CSS
import './NavBar.css';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, width: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Marca */}
          <Link to='/'>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              PlantillasWebs
            </Typography>
          </Link>

          <NavLink to={'/category/Landings'} activeclassname='currentCategory'>
					  Landings
				  </NavLink>
          
          <NavLink to={'/category/Corporativas'} activeclassname='currentCategory'>
            Corporativas
				  </NavLink>

          <NavLink to={'/category/Portafolios'} activeclassname='currentCategory'>
            Portafolios
				  </NavLink>
          <Link to='/cart'>
            <Button color="inherit"> <CartWidget /> </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;