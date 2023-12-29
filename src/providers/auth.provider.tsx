/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { AppDispatch, metadata, useAppSelector } from '@/config';
import { useToken } from '@/hooks';
import { MetadataId } from '@/interfaces';
import { me } from '@/state/auth';
import { getUserCharacters } from '@/state/character/actions';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.auth);
  const { have_character, have_mopy } = useAppSelector((state) => state.choose.chooses);

  useEffect(() => {
    const token = useToken().token();
    if (!token && !isAuth) router.push(metadata[MetadataId.login].path);
    if (token && !isAuth) dispatch(me());
  }, []);

  useEffect(() => {
    const token = useToken().token();

    if (isAuth && token) {
      if (!have_character) dispatch(getUserCharacters());
      if (!have_character) router.push(metadata[MetadataId.chooseCharacter].path);

      if (!have_mopy) {
        // TODO: Get user mopys
      }
      if (have_character && !have_mopy) router.push(metadata[MetadataId.chooseMopy].path);

      if (have_character && have_mopy) {
        // TODO: Redirect home select maps
      }
    }
  }, [isAuth, have_character, have_mopy]);

  return <>{children}</>;
}
