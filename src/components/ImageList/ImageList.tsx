import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { itemData } from './itemData';
import { Masonry } from '@mui/lab';

export default function TitlebarImageList() {
  return (
    // <Masonry sx={{ width: '80%', height: 550, margin: 'auto', backgroundColor: '#f7e1fc' }}>
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: 'auto' }}>
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ margin: '10px' }}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </Masonry>
  );
}
