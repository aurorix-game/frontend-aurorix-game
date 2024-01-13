import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Mopy } from 'aurorix-core';

export const listInitialMopys = createAsyncThunk('choose/list-initial-mopys', async () => {
  const { data }: { data: Mopy.Model[] } = await aurorix.get('/choose/mopy/initial');

  return data;
});
