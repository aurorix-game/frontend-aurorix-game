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
  greenNeon: string;
  orangeRed: ColorOptions;
  redNeon: string;
  orangeYellow: string;
  redOrangePastel: string;
  purpleDark: string;
  blueOcean: string;
};
