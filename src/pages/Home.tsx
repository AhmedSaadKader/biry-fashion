import { Box } from '@mui/material';
import heroBackground from '../assets/pexels-hero-bg.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroBackground})`,
        height: '100vh',
        backgroundSize: 'contain'
      }}></Box>
  );
};

export default Home;
