import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialMopys, UserMopy } from 'aurorix-core';

export const chooseMopy = createAsyncThunk('choose/mopy', async (aliasNameMopy: InitialMopys) => {
  const { data }: { data: UserMopy } = await aurorix.post('/choose/mopy/initial', {
    alias_name_blueprint: aliasNameMopy,
  });

  return data;
});
