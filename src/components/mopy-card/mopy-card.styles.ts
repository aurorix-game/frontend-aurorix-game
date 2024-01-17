import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles((theme: Theme) => ({
    grid: {
      margin: '1vh',
    },
    gridMopy: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    gridConfirm: {
      transition: 'ease-out 300ms',
      marginTop: '1vh',
      height: '5vh',
    },
    mopyLabel: {
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      fontSize: '2vh',
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    mopyLevel: {
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      fontSize: '2vh',
      color: '#F8C43E',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    container: {
      display: 'grid',
      width: '50vh',
      gridTemplateColumns: '1fr 1fr',
    },
    boxTop: {
      width: '98.3%',
      height: '2',
      marginBottom: '-0.8vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.tealishBlue.original?.hex}`,
      gridRow: '1 / span 1',
      gridColumn: '1 / span 2',
      padding: '0.8vh',
    },
    boxLeft: {
      width: '25vh',
      height: '25vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.tealishBlue.original?.hex}`,
      gridRow: 2,
      gridColumn: 1,
    },
    boxRight: {
      marginLeft: '-0.8vh',
      width: '25vh',
      height: '25vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.tealishBlue.original?.hex}`,
      gridRow: 2,
      gridColumn: 2,
    },
    hover: {
      '&:hover': {
        cursor: 'pointer !important',
      },
    },
  }));

  return styles();
};
