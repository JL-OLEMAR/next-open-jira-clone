import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

export function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          aria-label='menu'
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
