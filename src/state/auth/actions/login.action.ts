import { useToken } from '@/hooks';
import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RequestLogin = {
  email: string;
  password: string;
};

type ResponseLogin = {
  access_token: string;
};

export const login = createAsyncThunk(
  'auth/login',
  async (params: RequestLogin) => {
    const { data }: { data: ResponseLogin } = await aurorix.post(
      '/login',
      null,
      { auth: { username: params.email, password: params.password } }
    );

    const { setToken } = useToken();
    setToken(data.access_token);
  }
);
