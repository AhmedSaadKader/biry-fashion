import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Logo } from '../../assets/logo';
import LogoWithoutName from '../../assets/logoWithoutName.jpg';

interface NavBarLogoProps {
  mr?: number;
  xs: string;
  md: string;
  width?: string;
}

const NavbarLogo = ({ width = '4em', mr = 2, xs, md }: NavBarLogoProps) => {
  return (
    <Box sx={{ mr: mr, display: { xs: xs, md: md }, alignItems: 'center' }}>
      <Box
        sx={{ width: width, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        component="a"
        href="/">
        {/* <SvgIcon component={Logo} /> */}
        <img src={LogoWithoutName} style={{ width: '65px' }} />
      </Box>
    </Box>
  );
};

export default NavbarLogo;
