import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ParamsButton } from './button.type';

export const useStyles = (params: ParamsButton) => {
  const styles = makeStyles((theme: Theme) => ({
    btn: {
      fontFamily: theme.fonts.PixelOperatorSC,
      backgroundColor: theme.colors.redNeon.original.hex,
      fontWeight: 'bold',
      padding: '0 1.5vh 0.5vh',
      borderRadius: 0,
      letterSpacing: 2,
      textTransform: 'lowercase',
      ...(params.buttonStyle?.fontSize && {
        fontSize: params.buttonStyle.fontSize,
      }),
      ...(params.buttonStyle?.width && { width: params.buttonStyle.width }),
      ...(params.buttonStyle?.height && { height: params.buttonStyle.height }),
      '&:hover': {
        backgroundColor: theme.colors.redNeon.dark?.hex,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.colors.redNeon.dark?.hex,
      },
    },
  }));

  return styles();
};
