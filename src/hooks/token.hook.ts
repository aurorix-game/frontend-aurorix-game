type Return = {
  token: () => string | null;
  setToken: (token: string) => void;
  cleanToken: () => void;
};

export function useToken(): Return {
  const token = () => window.localStorage.getItem('token');

  const setToken = (token: string) =>
    window.localStorage.setItem('token', token);

  const cleanToken = () => window.localStorage.removeItem('token');

  return { token, setToken, cleanToken };
}
