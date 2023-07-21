'use client';

import { Button, CardLogo, InputForm, Metadata } from '@/components';
import { metadata } from '@/config';
import { Color, MetadataId } from '@/interfaces';
import { Fade, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

type FormData = {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object().shape({
  nickname: Yup.string().required('Nickname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Min 8 characters')
    .max(16, 'Max 16 characters')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
});

export default function Register() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
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
    <Metadata id={MetadataId.register} noSSR>
      <Fade in={true}>
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
                      label="nickname"
                      name="nickname"
                      type="text"
                      placeHolder="super-blaster"
                      onChange={formik.handleChange}
                      value={formik.values.nickname}
                      error={formik?.errors?.nickname}
                    />
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
                    <InputForm
                      label="confirm password"
                      name="confirmPassword"
                      type="password"
                      placeHolder="*********"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      error={formik?.errors?.confirmPassword}
                    />
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      style={{ height: '8vh' }}
                    >
                      <Button
                        label="register"
                        type="submit"
                        font={{ size: '3vh' }}
                        button={{ color: Color.greenNeon, height: '45%' }}
                        // loading={{ status: true, size: 20 }}
                      />
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </CardLogo>
          </Grid>
          <Grid item justifyContent="center">
            <Button
              label="login"
              type="button"
              font={{ size: '2vh' }}
              button={{ color: Color.redNeon, height: '80%' }}
              onClick={() => router.push(metadata[MetadataId.login].path)}
            />
          </Grid>
        </Grid>
      </Fade>
    </Metadata>
  );
}
