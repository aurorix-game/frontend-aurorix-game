import { Character } from '@/interfaces';
import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const listInitialCharacters = createAsyncThunk(
  'choose/list-initial-characters',
  async () => {
    const { data }: { data: Character.Model[] } = await aurorix.get(
      '/choose/character/initial'
    );

    return data;
  }
);
