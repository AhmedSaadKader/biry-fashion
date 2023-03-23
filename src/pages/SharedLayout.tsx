import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <Box sx={{ backgroundColor: '#e9e9eb' }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default SharedLayout;
