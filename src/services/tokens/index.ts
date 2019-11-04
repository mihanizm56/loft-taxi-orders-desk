type SaveTokemsParams = {
  accessToken: string;
  refreshToken?: string;
};

export const saveTokens = ({ accessToken, refreshToken }: SaveTokemsParams) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

export const removeTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};
