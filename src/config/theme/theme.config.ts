import { Color } from '@/interfaces';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  colors: {
    [Color.greenNeon]: {
      original: {
        hex: '#00DFA2',
      },
      dark: {
        hex: '#009c71',
      },
    },
    [Color.orangeRed]: {
      original: {
        hex: '#DF5D50',
      },
      dark: {
        hex: '#B04136',
        rgba: 'rgba(176, 65, 54)',
      },
    },
    [Color.redNeon]: {
      original: {
        hex: '#FF0060',
      },
      dark: {
        hex: '#a6003e',
      },
    },
    [Color.orangeYellow]: {
      original: {
        hex: '#FBE19D',
      },
      dark: {
        hex: '#ac7f07',
      },
    },
    [Color.redOrangePastel]: {
      original: {
        hex: '#FFC3AB',
      },
      dark: {
        hex: '#ff956b',
      },
    },
    [Color.purpleDark]: {
      original: {
        hex: '#411B44',
      },
      dark: {
        hex: '#301432',
      },
    },
    [Color.blueOcean]: {
      original: {
        hex: '#33BBFF',
      },
      dark: {
        hex: '#008fd6',
      },
    },
    [Color.tealishBlue]: {
      original: {
        hex: '#7086FA',
      },
      dark: {
        hex: '#3c5af8',
      },
    },
  },
  fonts: {
    Pixellari: 'Pixellari',
    PixelOperatorHB: 'PixelOperatorHB',
    PixelOperatorSC: 'PixelOperatorSC',
  },
});
