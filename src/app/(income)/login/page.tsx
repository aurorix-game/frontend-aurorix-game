'use client';

import {
  Button,
  CardLogo,
  Checkbox,
  InputForm,
  Link,
  Metadata,
} from '@/components';
import { theme } from '@/config';
import { Grid } from '@mui/material';
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
    initialValues: { email: '', password: '', remember: false },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values: FormData) {
    if (formik.isValid) {
      console.log(values);
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
        <CardLogo card={{ width: '45vh', height: '54vh' }}>
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
                <Checkbox
                  name="remember"
                  label="Remember-me"
                  onChange={formik.handleChange}
                  value={formik.values.remember}
                  labelColor="white"
                  checkboxColor={theme.colors.redNeon.original.hex}
                />
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ height: '8vh' }}
                >
                  <Button
                    label="login"
                    type="submit"
                    // loading={{ status: true, size: 20 }}
                    buttonStyle={{ fontSize: '3vh', height: '45%' }}
                  />
                </Grid>
              </form>
            </Grid>
            <Grid container justifyContent="center">
              <Link
                path="reset-password"
                label="Reset password"
                // color={Color.blueOcean}
              />
            </Grid>
          </Grid>
        </CardLogo>
      </Grid>
    </Metadata>
  );
}
