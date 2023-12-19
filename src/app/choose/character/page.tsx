/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Header, Metadata } from '@/components';
import { AppDispatch, useAppSelector } from '@/config';
import { MetadataId } from '@/interfaces';
import { listInitialCharacters } from '@/state/choose';
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
    </Metadata>
  );
}
