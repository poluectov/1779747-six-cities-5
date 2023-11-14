
export const UpdateOfferMessage = {
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
  isFavorite: {
    IsBoolean: 'Field isFavorite must be a boolean',
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

  facilities: {
    invalidFormat: 'Field facilities must be an array',
    ArrayMinSize: 'Field facilities must contain at least 1 facilitie',
    ArrayMaxSize: 'Field facilities must contain no more 7 facilities',
  }
} as const;
