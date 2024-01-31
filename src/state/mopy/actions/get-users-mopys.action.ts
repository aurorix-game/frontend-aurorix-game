import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserMopy } from 'aurorix-core';

export const getUserMopy = createAsyncThunk('mopy/get', async () => {
  const { data }: { data: UserMopy[] } = await aurorix.get('/mopy');

  return data;
});
