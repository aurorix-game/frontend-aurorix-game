import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    backgroundImage: 'url(images/home-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  },
  blur: {
    background: 'rgba(65, 27, 68, 0.6)',
    backdropFilter: 'blur(0.5vh)',
    height: '100vh',
  },
  logo: {
    width: '70%',
    marginBottom: '10vh',
  },
  gridMain: {
    height: '100vh',
  },
  title: {
    fontFamily: theme.fonts.Pixellari,
    color: 'white',
    fontWeight: 'normal',
    fontSize: 50,
    width: '70%',
    lineHeight: 1,
  },
  gridMessages: {
    height: '45%',
  },
  aurorix: {
    color: theme.colors.greenNeon,
  },
  text: {
    fontFamily: theme.fonts.PixelOperatorHB,
    color: 'white',
    fontSize: 22,
    width: '75%',
    lineHeight: 1.5,
  },
  btnPlayNow: {
    marginTop: 20,
    backgroundColor: theme.colors.orangeRed.original.hex,
    borderRadius: 0,
    fontFamily: theme.fonts.Pixellari,
    fontSize: 55,
    padding: '0.7em 0.3em 0.55em',
    lineHeight: 0,
    letterSpacing: 0,
    '&:hover': {
      backgroundColor: theme.colors.orangeRed.dark?.hex,
    },
  },
}));
