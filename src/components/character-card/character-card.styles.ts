import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles((theme: Theme) => ({
    boxLeft: {
      width: '30vh',
      height: '30vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: '0.8vh solid white',
    },
    boxRight: {
      marginLeft: '-0.8vh',
      width: '35vh',
      height: '30vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.redNeon.original.hex}`,
    },
  }));

  return styles();
};
