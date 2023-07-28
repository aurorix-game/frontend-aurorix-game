import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const me = createAsyncThunk('auth/me', async () => {
  const { data: dataMe } = await aurorix.get('/me');
  return dataMe;
});
