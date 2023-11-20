
export const CREATE_OFFER_MESSAGES = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },

  city: {
    invalidFormat: 'city must be Paris or Cologne or Brussels or Amsterdam or Hamburg or Dusseldorf',
  },

  previewPhoto: {
    maxLength: 'Too long for field «image»',
    invalidFormat: 'Field image must be an array',
  },
  photos: {
    invalidFormat: 'Field images must be an array',
    ArraySize: 'Field images must contain 6 pictures',
  },

  isPremium: {
    IsBoolean: 'Field isPremium must be a boolean',
  },

  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },

  price: {
    invalidFormat: 'Price must be an integer',
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },

  type: {
    invalidFormat: 'type must be "pro" or "обычный"',
  },

  rooms: {
    invalidFormat: 'Bedrooms must be an integer',
    minValue: 'Minimum bedrooms is 1',
    maxValue: 'Maximum bedrooms is 8',
  },
  guests: {
    invalidFormat: 'Max adults must be an integer',
    minValue: 'Minimum max adults is 1',
    maxValue: 'Maximum max adults is 10',
  },
  userId: {
    invalidId: 'userId field must be a valid id',
  },

  facilities: {
    invalidFormat: 'Field facilities must be one or more options from the list: Breakfast, Air conditioning, Laptop friendly workspace, Baby seat, Washer, Towels, Fridge',
    ArrayMinSize: 'Field facilities must contain at least 1 facilitie',
    ArrayMaxSize: 'Field facilities must contain no more 7 facilities',
  }
} as const;
