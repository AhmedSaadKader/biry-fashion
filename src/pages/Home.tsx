import { Box, Button } from '@mui/material';
import heroBackground from '../assets/pexels-hero-bg.jpg';
import heroBackground2 from '../assets/pexels-brand-&-palms-768975.jpg';
import heroBackground3 from '../assets/pexels-flat-hito-904350.jpg';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box
      position="relative"
      sx={{
        backgroundImage: `url(${heroBackground3})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}>
      <Box position="absolute" right="6%" top="30%">
        <Typography variant="h6">New Collection</Typography>
        <Button>Shop Now</Button>
      </Box>
    </Box>
  );
};

export default Home;
