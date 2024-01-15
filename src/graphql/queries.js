/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      address
      ownerNric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        ownerNric
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCitizen = /* GraphQL */ `
  query GetCitizen($id: ID!) {
    getCitizen(id: $id) {
      id
      full_name
      surrname
      first_name
      nric
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCitizens = /* GraphQL */ `
  query ListCitizens(
    $filter: ModelCitizenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCitizens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        full_name
        surrname
        first_name
        nric
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMortgage = /* GraphQL */ `
  query GetMortgage($id: ID!) {
    getMortgage(id: $id) {
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
export const listMortgages = /* GraphQL */ `
  query ListMortgages(
    $filter: ModelMortgageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMortgages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMortgagee = /* GraphQL */ `
  query GetMortgagee($id: ID!) {
    getMortgagee(id: $id) {
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
export const listMortgagees = /* GraphQL */ `
  query ListMortgagees(
    $filter: ModelMortgageeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMortgagees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBorrower = /* GraphQL */ `
  query GetBorrower($id: ID!) {
    getBorrower(id: $id) {
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
export const listBorrowers = /* GraphQL */ `
  query ListBorrowers(
    $filter: ModelBorrowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBorrowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMortgagor = /* GraphQL */ `
  query GetMortgagor($id: ID!) {
    getMortgagor(id: $id) {
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
export const listMortgagors = /* GraphQL */ `
  query ListMortgagors(
    $filter: ModelMortgagorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMortgagors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLandTitle = /* GraphQL */ `
  query GetLandTitle($id: ID!) {
    getLandTitle(id: $id) {
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
export const listLandTitles = /* GraphQL */ `
  query ListLandTitles(
    $filter: ModelLandTitleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLandTitles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
