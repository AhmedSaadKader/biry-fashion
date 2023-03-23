import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, ListItemButton, ListItemText, ListItemIcon, styled } from '@mui/material';
import { useState } from 'react';

interface DataArray {
  label: string;
  icon: JSX.Element;
}

type DataArrayProps = Array<DataArray>;

interface DrawerNestedList {
  index: number;
  text: string;
  data: DataArrayProps;
}

const DrawerNestedList = ({ index, text, data }: DrawerNestedList) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      key={index}
      sx={{
        bgcolor: open ? '#fceaf5' : null,
        pb: open ? 2 : 0
      }}>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5
        }}>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
            color: 'black'
          }}
          secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
          secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: '16px',
            color: 'black'
          }}
          sx={{ my: 0 }}
        />
        <KeyboardArrowDown
          sx={{
            // mr: -1,
            // opacity: 1,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
            color: 'black'
          }}
        />
      </ListItemButton>
      {open &&
        data.map((item) => (
          <ListItemButton key={item?.label} sx={{ py: 0, minHeight: 32, color: 'black' }}>
            <ListItemIcon sx={{ color: 'black' }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
            />
          </ListItemButton>
        ))}
    </Box>
  );
};

export default DrawerNestedList;
