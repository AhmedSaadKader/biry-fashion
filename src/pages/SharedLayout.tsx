import { Outlet } from 'react-router-dom';
import ResponsiveDrawer from '../components/Drawer/Drawer';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
