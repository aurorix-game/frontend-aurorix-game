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
  greenNeon: ColorOptions;
  orangeRed: ColorOptions;
  redNeon: ColorOptions;
  orangeYellow: ColorOptions;
  redOrangePastel: ColorOptions;
  purpleDark: ColorOptions;
  blueOcean: ColorOptions;
  tealishBlue: ColorOptions;
};
