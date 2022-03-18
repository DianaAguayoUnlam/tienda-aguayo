import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// Importamos Link para agregar navegabilidad
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
// CSS
import './NavBar.css';

const pages = ['Landings', 'Corporativas', 'Portafolios'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            className="text-primary"
          >
            <Link to={'/'} style={{textDecoration: "none"}} className="text-primary">
                MyTemplate
            </Link>
          </Typography>
          
          {/* Categorías mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                 <NavLink to={`/category/${page}`} activeclassname='currentCategory'
                 style={{textDecoration: "none", color: "#000" }}
                 >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                 </NavLink>
              ))}
            </Menu>
          </Box>

          {/* Logo mobile */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              
            >
              <Link to={'/'} style={{textDecoration: "none"}} className="text-primary">
                MyTemplate
              </Link>
            </Typography>

          {/* Categorías desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              
              <NavLink to={`/category/${page}`}
                className="menuDesktop"
                activeclassname='currentCategory'
                style={{textDecoration: "none", color: "#979797" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
              </NavLink>
            ))}
          </Box>
          
          {/* Carrito */}
          <Box sx={{ flexGrow: 0 }}>
              
                <NavLink to='/cart'
                sx={{ my: 2, display: 'block' }}
                style={{textDecoration: "none", color: "#979797" }}
                className="cartWidget"
                >
                  <CartWidget />
                </NavLink>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
