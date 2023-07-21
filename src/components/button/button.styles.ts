import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ParamsButton } from './button.type';

export const useStyles = (params: ParamsButton) => {
  const styles = makeStyles((theme: Theme) => ({
    btn: {
      fontFamily: theme.fonts.PixelOperatorSC,
      fontWeight: 'bold',
      padding: '0 1.5vh 0.5vh',
      borderRadius: 0,
      letterSpacing: 2,
      textTransform: 'lowercase',

      backgroundColor: theme.colors[params.button.color].original.hex,

      color: params.font?.color
        ? theme.colors[params.font.color].original.hex
        : 'white',
      border: `2px solid ${theme.colors[params.button.color].dark?.hex}`,

      ...(params.font?.size && { fontSize: params.font.size }),
      ...(params.button?.width && { width: params.button.width }),
      ...(params.button?.height && { height: params.button.height }),

      '&:hover': {
        transition: 'ease-out 300ms',
        backgroundColor: theme.colors[params.button.color].dark?.hex,
        border: `2px solid ${theme.colors[params.button.color].original?.hex}`,
      },

      '&.Mui-disabled': {
        backgroundColor: theme.colors[params.button.color].dark?.hex,
        border: `2px solid ${theme.colors[params.button.color].original?.hex}`,
      },
    },
  }));

  return styles();
};
