import { Color } from '@/interfaces';

export type ColorTypes = {
  hex: string;
  rgba?: string;
};

export type ColorOptions = {
  light?: ColorTypes;
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
