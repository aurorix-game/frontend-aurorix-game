import { metadata } from '@/config';
import { useToken } from '@/hooks';
import { MetadataId, User } from '@/interfaces';
import { login, me, signup } from '@/state/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  user: User;
  isAuth: boolean;
  loading: boolean;
  error?: string;
};

const initialState: State = {
  user: {
    id: '',
    nickname: '',
    email: '',
  },
  isAuth: false,
  loading: false,
};

const slide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state: State, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state: State) => {
      state.loading = true;
    });
    builder.addCase(
      signup.fulfilled,
      (state: State, action: PayloadAction<User>) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload;
        window.location.pathname = metadata[MetadataId.login].path;
      }
    );
    builder.addCase(login.pending, (state: State) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state: State) => {
      state.isAuth = true;
    });
    builder.addCase(me.pending, (state: State) => {
      state.loading = true;
    });
    builder.addCase(me.rejected, (state: State) => {
      state = initialState;
      const { cleanToken } = useToken();
      cleanToken();
      window.location.pathname = metadata[MetadataId.login].path;
    });
    builder.addCase(
      me.fulfilled,
      (state: State, action: PayloadAction<User>) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload;
      }
    );
  },
});

export const { setLoading } = slide.actions;

export const authReducer = slide.reducer;
