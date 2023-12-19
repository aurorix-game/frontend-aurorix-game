import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = () => {
  const styles = makeStyles((theme: Theme) => ({
    attributeBox: {
      margin: '1.5vh 0',
    },
    label: {
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      fontSize: '1.8vh',
      color: 'white',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    percentage: {
      fontFamily: theme.fonts.PixelOperatorSC,
      textTransform: 'uppercase',
      fontSize: '2.5vh',
      color: 'black',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      marginLeft: '1vh',
    },
  }));

  return styles();
};
