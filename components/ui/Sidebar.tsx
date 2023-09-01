import { useContext } from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useTheme } from '@mui/material/styles'
import { UiContext } from '../../context/ui'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export function Sidebar() {
  const theme = useTheme()
  const { isSideMenuOpen, closeSideMenu } = useContext(UiContext)

  return (
    <Drawer
      anchor='left'
      open={isSideMenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{ padding: '5px 10px' }}>
        <Stack sx={{ width: 240 }} direction='row' justifyContent='space-between' useFlexGap>
          <Typography variant='h4'>Menu</Typography>

          <IconButton onClick={closeSideMenu}>
            {theme.direction === 'ltr' && <ChevronLeftIcon />}
          </IconButton>
        </Stack>

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
