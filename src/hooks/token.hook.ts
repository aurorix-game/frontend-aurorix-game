type Return = {
  token: () => string | null;
  setToken: (token: string) => void;
};

export function useToken(): Return {
  const token = () => window.localStorage.getItem('token');

  const setToken = (token: string) =>
    window.localStorage.setItem('token', token);

  return { token, setToken };
}
