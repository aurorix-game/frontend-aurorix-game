import { useToken } from '@/hooks';
import { User } from '@/interfaces';
import { aurorix } from '@/providers';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RequestSignup = {
  nickname: string;
  email: string;
  password: string;
};

type ResponseSignup = {
  user: User;
  access_token: string;
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (params: RequestSignup) => {
    const { data }: { data: ResponseSignup } = await aurorix.post(
      '/signup',
      params
    );

    const { setToken } = useToken();
    setToken(data.access_token);

    return data.user;
  }
);
