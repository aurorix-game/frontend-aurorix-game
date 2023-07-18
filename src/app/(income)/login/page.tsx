import { CardLogo } from '@/components';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import classes from './styles.module.css';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Login() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.gridMain}
    >
      <CardLogo>
        <span>Login</span>
      </CardLogo>
    </Grid>
  );
}
