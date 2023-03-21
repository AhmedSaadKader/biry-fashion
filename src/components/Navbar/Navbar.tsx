import {
  alpha,
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Logo } from '../../assets/logo';
import SvgIcon from '@mui/material/SvgIcon';
import NavbarLogo from './NavbarLogo';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface SearchDisplayProps {
  openSearch: boolean;
}

const MenuIconButton = styled(IconButton)(() => ({
  padding: 0
}));

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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: 5,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  },
  [theme.breakpoints.down('sm')]: {
    width: 'fit-content'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '100%'
      }
    }
  }
}));

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#201b21' }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            alignContent: 'center',
            justifyContent: 'space-between'
          }}>
          {/* <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ width: '2em' }} component="a" href="/">
              <SvgIcon component={Logo} />
            </Box>
          </Box> */}
          <NavbarLogo xs={'none'} md={'flex'} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              flexGrow: 1,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Biry Fashion
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <MenuIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </MenuIconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => {
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
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
                fontSize: { xs: '0.9rem', sm: '1.25rem' },
                mr: 2,
                display: { sm: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              Biry Fashion
            </Typography>
          </NoDisplayIfSearchOpen>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              );
            })}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onFocus={() => setOpenSearch(true)}
              onBlur={() => setOpenSearch(false)}
            />
          </Search>
          <NoDisplayIfSearchOpen openSearch={openSearch} sx={{ flexGrow: 0 }}>
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
          </NoDisplayIfSearchOpen>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
