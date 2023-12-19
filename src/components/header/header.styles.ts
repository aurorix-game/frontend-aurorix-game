import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    height: '10vh',
    width: '100%',
    backgroundColor: theme.colors.purpleDark.original?.hex,
  },
  secondary: {
    height: '2vh',
    width: '100%',
    backgroundColor: theme.colors.purpleDark.light?.hex,
  },
}));
