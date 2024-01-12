/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MortgageUpdateFormInputValues = {
    instrumentNo?: string;
    registeredBy?: string;
    registeredOn?: string;
    titleType?: string;
    titleVol?: string;
    titleFol?: string;
    lotNo?: string;
    extent?: string;
    propertyAddress?: string;
    dateOfInstrument?: string;
    covenantsAndConditions?: string;
    priorEncumberances?: string;
    borrowerWitness?: string;
    mortgageeSign?: string;
    mortgageeWitness?: string;
    Borrower?: any;
    Mortgagee?: any;
    Mortgagor?: any;
    mortgagorSign?: string;
    mortgagorWitness?: string;
    borrowerSign?: string;
};
export declare type MortgageUpdateFormValidationValues = {
    instrumentNo?: ValidationFunction<string>;
    registeredBy?: ValidationFunction<string>;
    registeredOn?: ValidationFunction<string>;
    titleType?: ValidationFunction<string>;
    titleVol?: ValidationFunction<string>;
    titleFol?: ValidationFunction<string>;
    lotNo?: ValidationFunction<string>;
    extent?: ValidationFunction<string>;
    propertyAddress?: ValidationFunction<string>;
    dateOfInstrument?: ValidationFunction<string>;
    covenantsAndConditions?: ValidationFunction<string>;
    priorEncumberances?: ValidationFunction<string>;
    borrowerWitness?: ValidationFunction<string>;
    mortgageeSign?: ValidationFunction<string>;
    mortgageeWitness?: ValidationFunction<string>;
    Borrower?: ValidationFunction<any>;
    Mortgagee?: ValidationFunction<any>;
    Mortgagor?: ValidationFunction<any>;
    mortgagorSign?: ValidationFunction<string>;
    mortgagorWitness?: ValidationFunction<string>;
    borrowerSign?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MortgageUpdateFormOverridesProps = {
    MortgageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    instrumentNo?: PrimitiveOverrideProps<TextFieldProps>;
    registeredBy?: PrimitiveOverrideProps<TextFieldProps>;
    registeredOn?: PrimitiveOverrideProps<TextFieldProps>;
    titleType?: PrimitiveOverrideProps<TextFieldProps>;
    titleVol?: PrimitiveOverrideProps<TextFieldProps>;
    titleFol?: PrimitiveOverrideProps<TextFieldProps>;
    lotNo?: PrimitiveOverrideProps<TextFieldProps>;
    extent?: PrimitiveOverrideProps<TextFieldProps>;
    propertyAddress?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfInstrument?: PrimitiveOverrideProps<TextFieldProps>;
    covenantsAndConditions?: PrimitiveOverrideProps<TextFieldProps>;
    priorEncumberances?: PrimitiveOverrideProps<TextFieldProps>;
    borrowerWitness?: PrimitiveOverrideProps<TextFieldProps>;
    mortgageeSign?: PrimitiveOverrideProps<TextFieldProps>;
    mortgageeWitness?: PrimitiveOverrideProps<TextFieldProps>;
    Borrower?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagee?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagor?: PrimitiveOverrideProps<AutocompleteProps>;
    mortgagorSign?: PrimitiveOverrideProps<TextFieldProps>;
    mortgagorWitness?: PrimitiveOverrideProps<TextFieldProps>;
    borrowerSign?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MortgageUpdateFormProps = React.PropsWithChildren<{
    overrides?: MortgageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mortgage?: any;
    onSubmit?: (fields: MortgageUpdateFormInputValues) => MortgageUpdateFormInputValues;
    onSuccess?: (fields: MortgageUpdateFormInputValues) => void;
    onError?: (fields: MortgageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MortgageUpdateFormInputValues) => MortgageUpdateFormInputValues;
    onValidate?: MortgageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MortgageUpdateForm(props: MortgageUpdateFormProps): React.ReactElement;
