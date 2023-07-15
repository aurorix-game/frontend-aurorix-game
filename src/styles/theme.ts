import { createTheme } from '@mui/material';

export const theme = createTheme({
  colors: {
    greenNeon: '#00DFA2',
    orangeRed: {
      original: {
        hex: '#DF5D50',
      },
      dark: {
        hex: '#B04136',
        rgba: 'rgba(176, 65, 54)',
      },
    },
    redNeon: '#FF0060',
    orangeYellow: '#FBE19D',
    redOrangePastel: '#FFC3AB',
    purpleDark: '#411B44',
    blueOcean: '#33BBFF',
  },
  fonts: {
    Pixellari: 'Pixellari',
    PixelOperatorHB: 'PixelOperatorHB',
  },
});
