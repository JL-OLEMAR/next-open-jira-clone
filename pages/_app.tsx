import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { UiProvider } from '../context/ui'
import { darkTheme } from '../themes'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  )
}
