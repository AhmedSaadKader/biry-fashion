import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Dns, People, PermMedia, Public } from '@mui/icons-material';
import DrawerNestedList from './DrawerNestedList';

const drawerWidth = 240;
const pages = ['Products', 'Pricing', 'Blog'];
const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' }
];

interface DrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

export default function ResponsiveDrawer({ mobileOpen, handleDrawerToggle, window }: DrawerProps) {
  const drawer = (
    <Box sx={{}}>
      <Toolbar />
      <Divider />
      <List>
        {pages.map((text, index) => (
          <DrawerNestedList key={index} index={index} text={text} data={data} />
        ))}
      </List>
      <Divider />
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'black' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          PaperProps={{ sx: { backgroundColor: '#fceaf5' } }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block' },
            zIndex: '1075',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          PaperProps={{ sx: { backgroundColor: '#fceaf5' } }}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            zIndex: '1075',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open>
          {drawer}
        </Drawer> */}
      </Box>
    </Box>
  );
}
