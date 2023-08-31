import { useContext } from 'react'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import { UiContext } from '../../context/ui'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export function Sidebar() {
  const { isSideMenuOpen, closeSideMenu } = useContext(UiContext)

  return (
    <Drawer
      anchor='left'
      open={isSideMenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>

        <List>
          {
            menuItems.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Box>
    </Drawer>
  )
}
