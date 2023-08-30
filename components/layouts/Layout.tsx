import Head from 'next/head'
import { Box } from '@mui/material'
import { Navbar } from '../ui'

interface Props {
  title?: string
  children: React.ReactNode
}

export function Layout({ title = 'OpenJira', children }: Props) {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      {/* Sidebar */}

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  )
}
