import { User } from '@/interfaces';
import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const me = createAsyncThunk('auth/me', async () => {
  const { data }: { data: User } = await aurorix.get('/me');
  return data;
});
