'use client';

import { CardLogo, InputForm, Metadata } from '@/components';
import { Grid } from '@mui/material';
import classes from './styles.module.css';

export default function Login() {
  return (
    <Metadata subTitle="Login">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={classes.gridMain}
      >
        <CardLogo card={{ width: '50vh', height: '45vh' }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item justifyContent="center" style={{ width: '70%' }}>
              <InputForm
                label="email"
                name="email"
                type="email"
                placeHolder="super-blaster@email.com"
                // error="Email already taken"
              />
              <InputForm
                label="password"
                name="password"
                type="password"
                placeHolder="*********"
              />
            </Grid>
          </Grid>
        </CardLogo>
      </Grid>
    </Metadata>
  );
}
