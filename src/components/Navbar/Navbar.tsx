import { AppBar, Box, IconButton, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch';
import ResponsiveDrawer from '../Drawer/Drawer';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface SearchDisplayProps {
  openSearch: boolean;
}

const NoDisplayIfSearchOpen = styled('div', {
  shouldForwardProp: (prop) => prop !== 'openSearch'
})<SearchDisplayProps>(({ openSearch, theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: openSearch ? 'none' : 'flex'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ color: 'black' }}>
      <Container maxWidth="xl" sx={{ backgroundColor: '#ece8ed', zIndex: 1300 }}>
        <Toolbar
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            alignContent: 'center',
            justifyContent: 'space-between'
          }}>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <NavbarLogo width="8em" xs={'none'} md={'flex'} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                width: 'min-content',
                textAlign: 'center'
              }}>
              Biry Fashion
            </Typography>
          </Box>
          <NoDisplayIfSearchOpen
            openSearch={openSearch}
            sx={{
              m: '0 5px',
              flexGrow: 1,
              justifyContent: 'center'
            }}>
            <NavbarLogo mr={0} xs={'flex'} md={'none'} />
          </NoDisplayIfSearchOpen>
          <NoDisplayIfSearchOpen openSearch={openSearch} sx={{ flexGrow: 1 }}>
            <Typography
              component="a"
              href="/"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                mr: 2,
                display: { sm: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              Biry Fashion
            </Typography>
          </NoDisplayIfSearchOpen>
          <NavbarSearch setOpenSearch={setOpenSearch} />
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
            {settings.map((setting) => {
              return (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </Container>
      <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </AppBar>
  );
};

export default Navbar;
