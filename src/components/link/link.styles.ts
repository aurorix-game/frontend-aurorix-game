import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ParamsLink } from './link.type';

export const useStyles = (params: ParamsLink) => {
  const styles = makeStyles((theme: Theme) => ({
    link: {
      fontFamily: theme.fonts.PixelOperatorSC,
      color: params.color ? theme.colors[params.color].original.hex : 'white',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textDecorationColor: params.color
          ? theme.colors[params.color].original.hex
          : 'white',
      },
    },
  }));

  return styles();
};
