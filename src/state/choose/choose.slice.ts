import { Character } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
  extraReducers: (builder) => {},
});

export const { setLoading } = slice.actions;

export const chooseReducer = slice.reducer;
