'use client';

import { CardLogo, InputForm, Metadata } from '@/components';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormData = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Min 8 characters')
    .max(16, 'Max 16 characters')
    .required('Password is required'),
});

export default function Login() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: FormData) {
    if (formik.isValid) {
      // TODO: call login
    }
  }

  return (
    <Metadata subTitle="Login">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <CardLogo card={{ width: '45vh', height: '52vh' }}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item justifyContent="center" style={{ width: '70%' }}>
              <form onSubmit={formik.handleSubmit}>
                <InputForm
                  label="email"
                  name="email"
                  type="email"
                  placeHolder="super-blaster@email.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik?.errors?.email}
                />
                <InputForm
                  label="password"
                  name="password"
                  type="password"
                  placeHolder="*********"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik?.errors?.password}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{
                        color: 'red',
                      }}
                      disableRipple
                    />
                  }
                  label={
                    <span
                      style={{ fontFamily: 'PixelOperatorSC', color: 'white' }}
                    >
                      Remember-me
                    </span>
                  }
                />
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ height: '8vh' }}
                >
                  <button type="submit" style={{ padding: 10 }}>
                    Send
                  </button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </CardLogo>
      </Grid>
    </Metadata>
  );
}
