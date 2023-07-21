import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  inputGroup: {
    margin: '5px 0',
  },
  label: {
    color: 'white',
    fontFamily: theme.fonts.PixelOperatorSC,
    fontWeight: 'bold',
    fontSize: '1.5em',
    letterSpacing: '2px',
  },
  input: {
    padding: '1vh',
    width: '100%',
    fontSize: '1.5em',
    border: `solid 0.4vh ${theme.colors.tealishBlue.original.hex}`,
    fontFamily: theme.fonts.PixelOperatorSC,
    transition: 'ease-out 300ms',
    '&:focus': {
      border: `solid 0.4vh ${theme.colors.orangeYellow?.dark?.hex}`,
    },
  },
  error: {
    color: theme.colors.redNeon.original.hex,
    fontFamily: theme.fonts.PixelOperatorSC,
    fontSize: '1.1em',
  },
}));
