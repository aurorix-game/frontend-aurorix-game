/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { AppDispatch, metadata, useAppSelector } from '@/config';
import { useToken } from '@/hooks';
import { MetadataId } from '@/interfaces';
import { me } from '@/state/auth';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = useToken().token();
    if (!token && !isAuth) router.push(metadata[MetadataId.login].path);
    if (token && !isAuth) dispatch(me());
  }, []);

  useEffect(() => {
    const token = useToken().token();
    if (isAuth && token) {
      // TODO: have choose char and mopy redirect for home game
      router.push(metadata[MetadataId.chooseCharacter].path);
    }
  }, [isAuth]);

  return <>{children}</>;
}
