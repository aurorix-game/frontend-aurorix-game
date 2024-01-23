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
      marginRight: '1vh',
    },
    container: {
      display: 'grid',
      width: '50vh',
      gridTemplateColumns: '1fr 1fr',
    },
    boxTop: {
      height: '2',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.tealishBlue.original?.hex}`,
      borderBottom: '0vh',
      gridRow: '1 / span 1',
      gridColumn: '1 / span 2',
      padding: '0.8vh',
    },
    boxLeft: {
      width: '25vh',
      height: '25vh',
      backgroundColor: theme.colors.purpleDark.dark?.hex,
      border: `0.8vh solid ${theme.colors.tealishBlue.original?.hex}`,
      borderRight: '0vh',
      gridRow: 2,
      gridColumn: 1,
    },
    boxRight: {
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
    mopyAttArea: {
      backgroundColor: '#240F25',
      height: '100%',
      borderRight: `solid 0.3vh #542956`,
    },
    mopyAttLabel: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      fontSize: '2.2vh',
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 700,
      marginTop: '0.5vh',
      marginBottom: '0.5vh',
    },
    hp: {
      backgroundColor: '#00DFA2',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      borderRadius: 3,
      width: '80%',
      textAlign: 'center',
    },
    attack: {
      backgroundColor: '#FF1474',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      borderRadius: 3,
      width: '80%',
      textAlign: 'center',
    },
    defense: {
      backgroundColor: '#F8C43E',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      borderRadius: 3,
      width: '80%',
      textAlign: 'center',
    },
    element: {
      backgroundColor: '#672D6B',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      borderRadius: 3,
      width: '80%',
      textAlign: 'center',
    },
    exp: {
      backgroundColor: '#FF6536',
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      borderRadius: 3,
      width: '80%',
      textAlign: 'center',
    },
  }));

  return styles();
};
