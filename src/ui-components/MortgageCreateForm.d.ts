/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Borrower as Borrower0, Mortgagee as Mortgagee0, Mortgagor as Mortgagor0 } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MortgageCreateFormInputValues = {
    instrumentNo?: string;
    registeredBy?: string;
    registeredOn?: string;
    titleType?: string;
    titleVol?: string;
    titleFol?: string;
    priorEncumberances?: string;
    covenantsAndConditions?: string;
    dateOfInstrument?: string;
    mortgagorSign?: string;
    mortgagorWitness?: string;
    borrowerSign?: string;
    borrowerWitness?: string;
    mortgageeSign?: string;
    mortgageeWitness?: string;
    Borrower?: Borrower0;
    Mortgagee?: Mortgagee0;
    Mortgagor?: Mortgagor0;
    lotNo?: string;
    extent?: string;
    propertyAddress?: string;
};
export declare type MortgageCreateFormValidationValues = {
    instrumentNo?: ValidationFunction<string>;
    registeredBy?: ValidationFunction<string>;
    registeredOn?: ValidationFunction<string>;
    titleType?: ValidationFunction<string>;
    titleVol?: ValidationFunction<string>;
    titleFol?: ValidationFunction<string>;
    priorEncumberances?: ValidationFunction<string>;
    covenantsAndConditions?: ValidationFunction<string>;
    dateOfInstrument?: ValidationFunction<string>;
    mortgagorSign?: ValidationFunction<string>;
    mortgagorWitness?: ValidationFunction<string>;
    borrowerSign?: ValidationFunction<string>;
    borrowerWitness?: ValidationFunction<string>;
    mortgageeSign?: ValidationFunction<string>;
    mortgageeWitness?: ValidationFunction<string>;
    Borrower?: ValidationFunction<Borrower0>;
    Mortgagee?: ValidationFunction<Mortgagee0>;
    Mortgagor?: ValidationFunction<Mortgagor0>;
    lotNo?: ValidationFunction<string>;
    extent?: ValidationFunction<string>;
    propertyAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MortgageCreateFormOverridesProps = {
    MortgageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    instrumentNo?: PrimitiveOverrideProps<TextFieldProps>;
    registeredBy?: PrimitiveOverrideProps<TextFieldProps>;
    registeredOn?: PrimitiveOverrideProps<TextFieldProps>;
    titleType?: PrimitiveOverrideProps<TextFieldProps>;
    titleVol?: PrimitiveOverrideProps<TextFieldProps>;
    titleFol?: PrimitiveOverrideProps<TextFieldProps>;
    priorEncumberances?: PrimitiveOverrideProps<TextFieldProps>;
    covenantsAndConditions?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfInstrument?: PrimitiveOverrideProps<TextFieldProps>;
    mortgagorSign?: PrimitiveOverrideProps<TextFieldProps>;
    mortgagorWitness?: PrimitiveOverrideProps<TextFieldProps>;
    borrowerSign?: PrimitiveOverrideProps<TextFieldProps>;
    borrowerWitness?: PrimitiveOverrideProps<TextFieldProps>;
    mortgageeSign?: PrimitiveOverrideProps<TextFieldProps>;
    mortgageeWitness?: PrimitiveOverrideProps<TextFieldProps>;
    Borrower?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagee?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagor?: PrimitiveOverrideProps<AutocompleteProps>;
    lotNo?: PrimitiveOverrideProps<TextFieldProps>;
    extent?: PrimitiveOverrideProps<TextFieldProps>;
    propertyAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MortgageCreateFormProps = React.PropsWithChildren<{
    overrides?: MortgageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MortgageCreateFormInputValues) => MortgageCreateFormInputValues;
    onSuccess?: (fields: MortgageCreateFormInputValues) => void;
    onError?: (fields: MortgageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MortgageCreateFormInputValues) => MortgageCreateFormInputValues;
    onValidate?: MortgageCreateFormValidationValues;
} & React.CSSProperties>;
export default function MortgageCreateForm(props: MortgageCreateFormProps): React.ReactElement;
