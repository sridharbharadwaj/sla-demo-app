/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMortgage = /* GraphQL */ `
  subscription OnCreateMortgage($filter: ModelSubscriptionMortgageFilterInput) {
    onCreateMortgage(filter: $filter) {
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
export const onUpdateMortgage = /* GraphQL */ `
  subscription OnUpdateMortgage($filter: ModelSubscriptionMortgageFilterInput) {
    onUpdateMortgage(filter: $filter) {
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
export const onDeleteMortgage = /* GraphQL */ `
  subscription OnDeleteMortgage($filter: ModelSubscriptionMortgageFilterInput) {
    onDeleteMortgage(filter: $filter) {
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
export const onCreateMortgagee = /* GraphQL */ `
  subscription OnCreateMortgagee(
    $filter: ModelSubscriptionMortgageeFilterInput
  ) {
    onCreateMortgagee(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMortgagee = /* GraphQL */ `
  subscription OnUpdateMortgagee(
    $filter: ModelSubscriptionMortgageeFilterInput
  ) {
    onUpdateMortgagee(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMortgagee = /* GraphQL */ `
  subscription OnDeleteMortgagee(
    $filter: ModelSubscriptionMortgageeFilterInput
  ) {
    onDeleteMortgagee(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBorrower = /* GraphQL */ `
  subscription OnCreateBorrower($filter: ModelSubscriptionBorrowerFilterInput) {
    onCreateBorrower(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBorrower = /* GraphQL */ `
  subscription OnUpdateBorrower($filter: ModelSubscriptionBorrowerFilterInput) {
    onUpdateBorrower(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBorrower = /* GraphQL */ `
  subscription OnDeleteBorrower($filter: ModelSubscriptionBorrowerFilterInput) {
    onDeleteBorrower(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMortgagor = /* GraphQL */ `
  subscription OnCreateMortgagor(
    $filter: ModelSubscriptionMortgagorFilterInput
  ) {
    onCreateMortgagor(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMortgagor = /* GraphQL */ `
  subscription OnUpdateMortgagor(
    $filter: ModelSubscriptionMortgagorFilterInput
  ) {
    onUpdateMortgagor(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMortgagor = /* GraphQL */ `
  subscription OnDeleteMortgagor(
    $filter: ModelSubscriptionMortgagorFilterInput
  ) {
    onDeleteMortgagor(filter: $filter) {
      id
      coRegNo
      name
      citizenship
      placeOfCorporation
      address
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLandTitle = /* GraphQL */ `
  subscription OnCreateLandTitle(
    $filter: ModelSubscriptionLandTitleFilterInput
  ) {
    onCreateLandTitle(filter: $filter) {
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
export const onUpdateLandTitle = /* GraphQL */ `
  subscription OnUpdateLandTitle(
    $filter: ModelSubscriptionLandTitleFilterInput
  ) {
    onUpdateLandTitle(filter: $filter) {
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
export const onDeleteLandTitle = /* GraphQL */ `
  subscription OnDeleteLandTitle(
    $filter: ModelSubscriptionLandTitleFilterInput
  ) {
    onDeleteLandTitle(filter: $filter) {
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
