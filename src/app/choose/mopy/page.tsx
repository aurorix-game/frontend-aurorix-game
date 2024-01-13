/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Header, Metadata } from '@/components';
import { AppDispatch, useAppSelector } from '@/config';
import { MetadataId } from '@/interfaces';
import { listInitialMopys } from '@/state/choose/actions';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ChooseMopy() {
  const dispatch = useDispatch<AppDispatch>();

  const { mopys } = useAppSelector((state) => state.choose);

  useEffect(() => {
    dispatch(listInitialMopys());
  }, []);

  return (
    <Metadata id={MetadataId.chooseMopy} noSSR>
      <Header title="Choose your initial mopy" />

      <div style={{ margin: '3vh' }}>
        <Grid container justifyContent="center" wrap="wrap"></Grid>
      </div>
    </Metadata>
  );
}
