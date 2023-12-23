import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialCharacters, UserCharacter } from 'aurorix-core';

export const chooseCharacter = createAsyncThunk(
  'choose/characters',
  async (aliasNameCharacter: InitialCharacters) => {
    const { data }: { data: UserCharacter } = await aurorix.post('/choose/character/initial', {
      alias_name_blueprint: aliasNameCharacter,
    });

    return data;
  }
);
