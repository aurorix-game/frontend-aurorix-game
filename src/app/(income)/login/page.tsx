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
        <Grid container alignItems="center" justifyContent="center">
          <Grid
            item
            justifyContent="center"
            style={{
              width: '70%',
            }}
          >
            <div>
              <label
                htmlFor="email"
                style={{
                  color: 'white',
                  fontFamily: 'PixelOperatorSC',
                  fontWeight: 'bold',
                  fontSize: '1.5em',
                  letterSpacing: '2px',
                }}
              >
                email
              </label>
            </div>
            <input
              id="email"
              type="text"
              placeholder="super-blaster@gmail.com"
              style={{
                padding: '1vh',
                width: '100%',
                fontSize: '1.5em',
                border: 'solid 0.4vh #7086FA',
                fontFamily: 'PixelOperatorSC',
              }}
            />
          </Grid>
        </Grid>
      </CardLogo>
    </Grid>
  );
}
