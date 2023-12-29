import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserCharacter } from 'aurorix-core';

export const getUserCharacters = createAsyncThunk('characters/get', async () => {
  const { data }: { data: UserCharacter[] } = await aurorix.get('/character');

  return data;
});
