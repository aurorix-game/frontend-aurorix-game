/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { CharacterCard, Header, Metadata } from '@/components';
import { AppDispatch, useAppSelector } from '@/config';
import { MetadataId } from '@/interfaces';
import { listInitialCharacters } from '@/state/choose';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ChooseCharacter() {
  const dispatch = useDispatch<AppDispatch>();

  const { characters } = useAppSelector((state) => state.choose);

  useEffect(() => {
    dispatch(listInitialCharacters());
  }, []);

  return (
    <Metadata id={MetadataId.chooseCharacter} noSSR>
      <Header title="Choose your initial character" />

      <div style={{ margin: '3vh' }}>
        <Grid container justifyContent="center" wrap="wrap">
          {characters.map((char, i) => (
            <Grid container item xs={5} key={i}>
              <CharacterCard character={char} key={i} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Metadata>
  );
}
