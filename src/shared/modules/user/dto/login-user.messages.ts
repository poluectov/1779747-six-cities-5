export const CREATE_LOGIN_USER_MESSAGE = {
  email: {
    invalidFormat: 'email must be a valid address',
  },
  password: {
    invalidFormat: 'password is required',
  }
} as const;
