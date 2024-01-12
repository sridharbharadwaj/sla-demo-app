import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerMortgage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instrumentNo?: string | null;
  readonly registeredBy?: string | null;
  readonly registeredOn?: string | null;
  readonly titleType?: string | null;
  readonly titleVol?: string | null;
  readonly titleFol?: string | null;
  readonly lotNo?: string | null;
  readonly extent?: string | null;
  readonly propertyAddress?: string | null;
  readonly dateOfInstrument?: string | null;
  readonly covenantsAndConditions?: string | null;
  readonly priorEncumberances?: string | null;
  readonly borrowerWitness?: string | null;
  readonly mortgageeSign?: string | null;
  readonly mortgageeWitness?: string | null;
  readonly Borrower?: Borrower | null;
  readonly Mortgagee?: Mortgagee | null;
  readonly Mortgagor?: Mortgagor | null;
  readonly mortgagorSign?: string | null;
  readonly mortgagorWitness?: string | null;
  readonly borrowerSign?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mortgageBorrowerId?: string | null;
  readonly mortgageMortgageeId?: string | null;
  readonly mortgageMortgagorId?: string | null;
}

type LazyMortgage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instrumentNo?: string | null;
  readonly registeredBy?: string | null;
  readonly registeredOn?: string | null;
  readonly titleType?: string | null;
  readonly titleVol?: string | null;
  readonly titleFol?: string | null;
  readonly lotNo?: string | null;
  readonly extent?: string | null;
  readonly propertyAddress?: string | null;
  readonly dateOfInstrument?: string | null;
  readonly covenantsAndConditions?: string | null;
  readonly priorEncumberances?: string | null;
  readonly borrowerWitness?: string | null;
  readonly mortgageeSign?: string | null;
  readonly mortgageeWitness?: string | null;
  readonly Borrower: AsyncItem<Borrower | undefined>;
  readonly Mortgagee: AsyncItem<Mortgagee | undefined>;
  readonly Mortgagor: AsyncItem<Mortgagor | undefined>;
  readonly mortgagorSign?: string | null;
  readonly mortgagorWitness?: string | null;
  readonly borrowerSign?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mortgageBorrowerId?: string | null;
  readonly mortgageMortgageeId?: string | null;
  readonly mortgageMortgagorId?: string | null;
}

export declare type Mortgage = LazyLoading extends LazyLoadingDisabled ? EagerMortgage : LazyMortgage

export declare const Mortgage: (new (init: ModelInit<Mortgage>) => Mortgage) & {
  copyOf(source: Mortgage, mutator: (draft: MutableModel<Mortgage>) => MutableModel<Mortgage> | void): Mortgage;
}

type EagerMortgagee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgagee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMortgagee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgagee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mortgagee = LazyLoading extends LazyLoadingDisabled ? EagerMortgagee : LazyMortgagee

export declare const Mortgagee: (new (init: ModelInit<Mortgagee>) => Mortgagee) & {
  copyOf(source: Mortgagee, mutator: (draft: MutableModel<Mortgagee>) => MutableModel<Mortgagee> | void): Mortgagee;
}

type EagerBorrower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Borrower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBorrower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Borrower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Borrower = LazyLoading extends LazyLoadingDisabled ? EagerBorrower : LazyBorrower

export declare const Borrower: (new (init: ModelInit<Borrower>) => Borrower) & {
  copyOf(source: Borrower, mutator: (draft: MutableModel<Borrower>) => MutableModel<Borrower> | void): Borrower;
}

type EagerMortgagor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgagor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMortgagor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mortgagor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coRegNo?: string | null;
  readonly name?: string | null;
  readonly citizenship?: string | null;
  readonly placeOfCorporation?: string | null;
  readonly address?: string | null;
  readonly nric?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mortgagor = LazyLoading extends LazyLoadingDisabled ? EagerMortgagor : LazyMortgagor

export declare const Mortgagor: (new (init: ModelInit<Mortgagor>) => Mortgagor) & {
  copyOf(source: Mortgagor, mutator: (draft: MutableModel<Mortgagor>) => MutableModel<Mortgagor> | void): Mortgagor;
}

type EagerLandTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titleType?: string | null;
  readonly titleVol?: string | null;
  readonly titleFol?: string | null;
  readonly lotNo?: string | null;
  readonly extent?: string | null;
  readonly propertyAddr?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLandTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titleType?: string | null;
  readonly titleVol?: string | null;
  readonly titleFol?: string | null;
  readonly lotNo?: string | null;
  readonly extent?: string | null;
  readonly propertyAddr?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LandTitle = LazyLoading extends LazyLoadingDisabled ? EagerLandTitle : LazyLandTitle

export declare const LandTitle: (new (init: ModelInit<LandTitle>) => LandTitle) & {
  copyOf(source: LandTitle, mutator: (draft: MutableModel<LandTitle>) => MutableModel<LandTitle> | void): LandTitle;
}