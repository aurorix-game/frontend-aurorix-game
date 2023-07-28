import { useToken } from '@/hooks';
import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (params: { email: string; password: string }) => {
    const { data: dataLogin } = await aurorix.post('/login', null, {
      auth: { username: params.email, password: params.password },
    });

    const { setToken } = useToken();
    setToken(dataLogin.access_token);
  }
);
