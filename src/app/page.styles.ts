import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  main: {
    backgroundImage: 'url(images/home-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  },
  blur: {
    background: 'rgba(65, 27, 68, 0.5)',
    backdropFilter: 'blur(0.5vh)',
    height: '100vh',
    width: '100%',
  },
}));
