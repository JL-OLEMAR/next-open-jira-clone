import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c'
        }
      }
    }
  }
})
