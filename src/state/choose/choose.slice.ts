import { getUserCharacters } from '@/state/character/actions';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character, UserCharacter } from 'aurorix-core';
import { chooseCharacter, listInitialCharacters } from './actions';

type State = {
  characters: Character.Model[];
  chooses: {
    have_character: boolean;
    have_mopy: boolean;
  };
  loading: boolean;
  error?: string;
};

const initialState: State = {
  characters: [],
  loading: false,
  chooses: {
    have_character: false,
    have_mopy: false,
  },
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
    builder.addCase(
      chooseCharacter.fulfilled,
      (state: State, action: PayloadAction<UserCharacter>) => {
        state.loading = false;
        state.chooses.have_character = action.payload.character ? true : false;
      }
    );
    builder.addCase(
      getUserCharacters.fulfilled,
      (state: State, action: PayloadAction<UserCharacter[]>) => {
        state.loading = false;
        state.chooses.have_character = action.payload.length >= 1 ? true : false;
      }
    );
  },
});

export const { setLoading } = slice.actions;

export const chooseReducer = slice.reducer;
