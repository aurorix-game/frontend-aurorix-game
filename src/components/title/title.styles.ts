import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ParamsTitle } from './title.type';

export const useStyles = (params: ParamsTitle) => {
  const styles = makeStyles((theme: Theme) => ({
    title: {
      fontFamily: theme.fonts.PixelOperatorHB,
      color: theme.colors.orangeYellow.original.hex,
      fontSize: params.size,
    },
  }));

  return styles();
};
