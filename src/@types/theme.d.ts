import { Colors } from '@/@types/color';
import { Fonts } from '@/@types/font';

export declare module '@mui/material/styles' {
  interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
  interface ThemeOptions {
    colors: Colors;
    fonts: Fonts;
  }
}
