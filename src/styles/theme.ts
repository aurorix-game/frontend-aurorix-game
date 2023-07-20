import { createTheme } from '@mui/material';

export const theme = createTheme({
  colors: {
    greenNeon: {
      original: {
        hex: '#00DFA2',
      },
    },
    orangeRed: {
      original: {
        hex: '#DF5D50',
      },
      dark: {
        hex: '#B04136',
        rgba: 'rgba(176, 65, 54)',
      },
    },
    redNeon: {
      original: {
        hex: '#FF0060',
      },
      dark: {
        hex: '#a6003e',
      },
    },
    orangeYellow: {
      original: {
        hex: '#FBE19D',
      },
    },
    redOrangePastel: {
      original: {
        hex: '#FFC3AB',
      },
    },
    purpleDark: {
      original: {
        hex: '#411B44',
      },
    },
    blueOcean: {
      original: {
        hex: '#33BBFF',
      },
    },
    tealishBlue: {
      original: {
        hex: '#7086FA',
      },
    },
  },
  fonts: {
    Pixellari: 'Pixellari',
    PixelOperatorHB: 'PixelOperatorHB',
    PixelOperatorSC: 'PixelOperatorSC',
  },
});
