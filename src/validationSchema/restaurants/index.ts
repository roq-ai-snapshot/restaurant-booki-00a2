import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  closing_hours: yup.string().nullable(),
  max_capacity: yup.number().integer().nullable(),
  name: yup.string().required(),
});
