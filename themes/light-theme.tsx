import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      main: '#4A148C'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },

  components: {
    // En Material UI siempre se empieza con Mui, para poderlo customizar
    MuiAppBar: {
      // Para customizar los styles por defecto del componente
      defaultProps: {
        elevation: 0
      },
      // Sobreescribe los styles, 'de forma nativa'
      styleOverrides: {}
    }
  }
})
