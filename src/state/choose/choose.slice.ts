import { Character } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { listInitialCharacters } from './actions/list-initial-character';

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
  },
});

export const { setLoading } = slice.actions;

export const chooseReducer = slice.reducer;
