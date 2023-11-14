export const CreateUserMessages = {
  name: {
    invalidFormat: 'firstname is required',
    lengthField: 'min length is 1, max is 15',
  },

  email: {
    invalidFormat: 'email must be a valid address'
  },
  avatar: {
    invalidFormat: 'avatarPath is required',
  },
  
  password: {
    invalidFormat: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
  userType: {
    invalid: 'Field userType must pro or обычный',
  },
} as const;
