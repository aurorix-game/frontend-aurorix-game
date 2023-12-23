import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from 'aurorix-core';
import { chooseCharacter, listInitialCharacters } from './actions';

type State = {
  characters: Character.Model[];
  loading: boolean;
  error?: string;
};

const initialState: State = {
  characters: [],
  loading: false,
};

const slice = createSlice({
  name: 'choose',
  initialState,
  reducers: {
    setLoading(state: State, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listInitialCharacters.pending, (state: State) => {
      state.loading = true;
    });
    builder.addCase(
      listInitialCharacters.fulfilled,
      (state: State, action: PayloadAction<Character.Model[]>) => {
        state.loading = false;
        state.characters = action.payload;
      }
    );
    builder.addCase(chooseCharacter.pending, (state: State) => {
      state.loading = true;
    });
    builder.addCase(chooseCharacter.fulfilled, (state: State) => {
      state.loading = false;
    });
  },
});

export const { setLoading } = slice.actions;

export const chooseReducer = slice.reducer;
