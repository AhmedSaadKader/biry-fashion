import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Logo } from '../../assets/logo';

interface NavBarLogoProps {
  mr?: number;
  xs: string;
  md: string;
}

const NavbarLogo = ({ mr = 2, xs, md }: NavBarLogoProps) => {
  return (
    <Box sx={{ mr: mr, display: { xs: xs, md: md }, alignItems: 'center' }}>
      <Box sx={{ width: '4em' }} component="a" href="/">
        <SvgIcon component={Logo} />
      </Box>
    </Box>
  );
};

export default NavbarLogo;
