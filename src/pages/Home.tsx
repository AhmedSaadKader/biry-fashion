import { Box, Button, Card, Grid, ImageList } from '@mui/material';
import heroBackground from '../assets/pexels-hero-bg.jpg';
import heroBackground2 from '../assets/pexels-brand-&-palms-768975.jpg';
import heroBackground3 from '../assets/pexels-flat-hito-904350.jpg';
import Typography from '@mui/material/Typography';
import TitlebarImageList from '../components/ImageList/ImageList';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        position="relative"
        sx={{
          backgroundImage: `url(${heroBackground3})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}>
        <Box position="absolute" right="6%" top="30%">
          <Typography variant="h6">New Collection</Typography>
          <Button>Shop Now</Button>
        </Box>
      </Box>
      <TitlebarImageList />
    </Box>
  );
};

export default Home;
