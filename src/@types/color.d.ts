import { Color } from '@/config';

export type ColorTypes = {
  hex: string;
  rgba?: string;
};

export type ColorOptions = {
  light?: string;
  original: ColorTypes;
  dark?: ColorTypes;
};

export type Colors = {
  [Color.greenNeon]: ColorOptions;
  [Color.orangeRed]: ColorOptions;
  [Color.redNeon]: ColorOptions;
  [Color.orangeYellow]: ColorOptions;
  [Color.redOrangePastel]: ColorOptions;
  [Color.purpleDark]: ColorOptions;
  [Color.blueOcean]: ColorOptions;
  [Color.tealishBlue]: ColorOptions;
};
