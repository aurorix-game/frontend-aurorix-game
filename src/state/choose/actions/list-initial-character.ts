import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Character } from 'aurorix-core';

export const listInitialCharacters = createAsyncThunk(
  'choose/list-initial-characters',
  async () => {
    const { data }: { data: Character.Model[] } = await aurorix.get('/choose/character/initial');

    return data;
  }
);
