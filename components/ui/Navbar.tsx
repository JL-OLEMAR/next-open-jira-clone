import Link from 'next/link'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { useUi } from '../../hooks'

export function Navbar() {
  const { openSideMenu } = useUi()

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          onClick={openSideMenu}
          size='large'
          edge='start'
          aria-label='menu'
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Link href='/' style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Typography color='#fff' variant='h6'>OpenJira</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
