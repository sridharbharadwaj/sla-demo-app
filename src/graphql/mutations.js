/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMortgage = /* GraphQL */ `
  mutation CreateMortgage(
    $input: CreateMortgageInput!
    $condition: ModelMortgageConditionInput
  ) {
    createMortgage(input: $input, condition: $condition) {
      id
      instrumentNo
      registeredBy
      registeredOn
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddress
      dateOfInstrument
      covenantsAndConditions
      priorEncumberances
      borrowerWitness
      mortgageeSign
      mortgageeWitness
      Borrower {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagee {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagor {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      mortgagorSign
      mortgagorWitness
      borrowerSign
      createdAt
      updatedAt
      mortgageBorrowerId
      mortgageMortgageeId
      mortgageMortgagorId
      __typename
    }
  }
`;
export const updateMortgage = /* GraphQL */ `
  mutation UpdateMortgage(
    $input: UpdateMortgageInput!
    $condition: ModelMortgageConditionInput
  ) {
    updateMortgage(input: $input, condition: $condition) {
      id
      instrumentNo
      registeredBy
      registeredOn
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddress
      dateOfInstrument
      covenantsAndConditions
      priorEncumberances
      borrowerWitness
      mortgageeSign
      mortgageeWitness
      Borrower {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagee {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagor {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      mortgagorSign
      mortgagorWitness
      borrowerSign
      createdAt
      updatedAt
      mortgageBorrowerId
      mortgageMortgageeId
      mortgageMortgagorId
      __typename
    }
  }
`;
export const deleteMortgage = /* GraphQL */ `
  mutation DeleteMortgage(
    $input: DeleteMortgageInput!
    $condition: ModelMortgageConditionInput
  ) {
    deleteMortgage(input: $input, condition: $condition) {
      id
      instrumentNo
      registeredBy
      registeredOn
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddress
      dateOfInstrument
      covenantsAndConditions
      priorEncumberances
      borrowerWitness
      mortgageeSign
      mortgageeWitness
      Borrower {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagee {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      Mortgagor {
        id
        coRegNo
        name
        citizenship
        placeOfCorporation
        address
        nric
        createdAt
        updatedAt
        __typename
      }
      mortgagorSign
      mortgagorWitness
      borrowerSign
      createdAt
      updatedAt
      mortgageBorrowerId
      mortgageMortgageeId
      mortgageMortgagorId
      __typename
    }
  }
`;
export const createMortgagee = /* GraphQL */ `
  mutation CreateMortgagee(
    $input: CreateMortgageeInput!
    $condition: ModelMortgageeConditionInput
  ) {
    createMortgagee(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMortgagee = /* GraphQL */ `
  mutation UpdateMortgagee(
    $input: UpdateMortgageeInput!
    $condition: ModelMortgageeConditionInput
  ) {
    updateMortgagee(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMortgagee = /* GraphQL */ `
  mutation DeleteMortgagee(
    $input: DeleteMortgageeInput!
    $condition: ModelMortgageeConditionInput
  ) {
    deleteMortgagee(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBorrower = /* GraphQL */ `
  mutation CreateBorrower(
    $input: CreateBorrowerInput!
    $condition: ModelBorrowerConditionInput
  ) {
    createBorrower(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBorrower = /* GraphQL */ `
  mutation UpdateBorrower(
    $input: UpdateBorrowerInput!
    $condition: ModelBorrowerConditionInput
  ) {
    updateBorrower(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBorrower = /* GraphQL */ `
  mutation DeleteBorrower(
    $input: DeleteBorrowerInput!
    $condition: ModelBorrowerConditionInput
  ) {
    deleteBorrower(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMortgagor = /* GraphQL */ `
  mutation CreateMortgagor(
    $input: CreateMortgagorInput!
    $condition: ModelMortgagorConditionInput
  ) {
    createMortgagor(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMortgagor = /* GraphQL */ `
  mutation UpdateMortgagor(
    $input: UpdateMortgagorInput!
    $condition: ModelMortgagorConditionInput
  ) {
    updateMortgagor(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMortgagor = /* GraphQL */ `
  mutation DeleteMortgagor(
    $input: DeleteMortgagorInput!
    $condition: ModelMortgagorConditionInput
  ) {
    deleteMortgagor(input: $input, condition: $condition) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLandTitle = /* GraphQL */ `
  mutation CreateLandTitle(
    $input: CreateLandTitleInput!
    $condition: ModelLandTitleConditionInput
  ) {
    createLandTitle(input: $input, condition: $condition) {
      id
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddr
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLandTitle = /* GraphQL */ `
  mutation UpdateLandTitle(
    $input: UpdateLandTitleInput!
    $condition: ModelLandTitleConditionInput
  ) {
    updateLandTitle(input: $input, condition: $condition) {
      id
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddr
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLandTitle = /* GraphQL */ `
  mutation DeleteLandTitle(
    $input: DeleteLandTitleInput!
    $condition: ModelLandTitleConditionInput
  ) {
    deleteLandTitle(input: $input, condition: $condition) {
      id
      titleType
      titleVol
      titleFol
      lotNo
      extent
      propertyAddr
      createdAt
      updatedAt
      __typename
    }
  }
`;
