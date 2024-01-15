// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Property, Citizen, Mortgage, Mortgagee, Borrower, Mortgagor, LandTitle } = initSchema(schema);

export {
  Property,
  Citizen,
  Mortgage,
  Mortgagee,
  Borrower,
  Mortgagor,
  LandTitle
};