// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Mortgage, Mortgagee, Borrower, Mortgagor, LandTitle } = initSchema(schema);

export {
  Mortgage,
  Mortgagee,
  Borrower,
  Mortgagor,
  LandTitle
};