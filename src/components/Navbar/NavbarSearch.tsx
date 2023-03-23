import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: 5,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#c9c9c9',
  '&:hover': {
    backgroundColor: '#c9c9c9'
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

interface NavbarSearchProps {
  setOpenSearch: (arg0: boolean) => void;
}

const NavbarSearch = ({ setOpenSearch }: NavbarSearchProps) => {
  return (
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
  );
};

export default NavbarSearch;
