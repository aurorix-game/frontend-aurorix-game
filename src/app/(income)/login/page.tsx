'use client';

import {
  Button,
  CardLogo,
  Checkbox,
  InputForm,
  Link,
  Metadata,
} from '@/components';
import { AppDispatch, metadata, theme, useAppSelector } from '@/config';
import { Color, MetadataId } from '@/interfaces';
import { login, me } from '@/state/auth';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Min 8 characters')
    .max(16, 'Max 16 characters')
    .required('Password is required'),
});

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: { email: '', password: '', remember: false },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: FormData) {
    if (formik.isValid) {
      setLoading(true);
      const { email, password } = values;
      dispatch(login({ email, password }));
    }
  }

  useEffect(() => {
    if (isAuth) {
      dispatch(me());

      setTimeout(() => {
        setLoading(false);
        // TODO: send another page
      }, 1000);
    }
  }, [isAuth]);

  return (
    <Metadata id={MetadataId.login} noSSR>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        style={{ height: '100vh' }}
      >
        <Grid container item justifyContent="center">
          <CardLogo card={{ width: '45vh' }}>
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
                      font={{ size: '3vh' }}
                      button={{ color: Color.redNeon, height: '45%' }}
                      loading={{ status: loading, size: 20 }}
                    />
                  </Grid>
                </form>
              </Grid>
              <Grid container justifyContent="center">
                <Link
                  path={metadata[MetadataId.resetPassword].path}
                  label="Reset password"
                />
              </Grid>
            </Grid>
          </CardLogo>
        </Grid>

        <Grid item justifyContent="center">
          <Button
            label="create account"
            type="button"
            font={{ size: '2vh' }}
            button={{ color: Color.blueOcean, height: '80%' }}
            onClick={() => router.push(metadata[MetadataId.register].path)}
          />
        </Grid>
      </Grid>
    </Metadata>
  );
}
