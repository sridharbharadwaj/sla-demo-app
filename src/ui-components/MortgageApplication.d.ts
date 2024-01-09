/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, DividerProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MortgageApplicationInputValues = {
    titleType?: string;
    titleVol?: string;
    titleFol?: string;
    priorEncumberances?: string;
    covenantsAndConditions?: string;
    dateOfInstrument?: string;
    Borrower?: any;
    Mortgagee?: any;
    Mortgagor?: any;
    lotNo?: string;
    extent?: string;
    propertyAddress?: string;
};
export declare type MortgageApplicationValidationValues = {
    titleType?: ValidationFunction<string>;
    titleVol?: ValidationFunction<string>;
    titleFol?: ValidationFunction<string>;
    priorEncumberances?: ValidationFunction<string>;
    covenantsAndConditions?: ValidationFunction<string>;
    dateOfInstrument?: ValidationFunction<string>;
    Borrower?: ValidationFunction<any>;
    Mortgagee?: ValidationFunction<any>;
    Mortgagor?: ValidationFunction<any>;
    lotNo?: ValidationFunction<string>;
    extent?: ValidationFunction<string>;
    propertyAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MortgageApplicationOverridesProps = {
    MortgageApplicationGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement3?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement2?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement5?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    titleType?: PrimitiveOverrideProps<TextFieldProps>;
    titleVol?: PrimitiveOverrideProps<TextFieldProps>;
    titleFol?: PrimitiveOverrideProps<TextFieldProps>;
    priorEncumberances?: PrimitiveOverrideProps<TextFieldProps>;
    covenantsAndConditions?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfInstrument?: PrimitiveOverrideProps<TextFieldProps>;
    Borrower?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagee?: PrimitiveOverrideProps<AutocompleteProps>;
    Mortgagor?: PrimitiveOverrideProps<AutocompleteProps>;
    lotNo?: PrimitiveOverrideProps<TextFieldProps>;
    extent?: PrimitiveOverrideProps<TextFieldProps>;
    propertyAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MortgageApplicationProps = React.PropsWithChildren<{
    overrides?: MortgageApplicationOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MortgageApplicationInputValues) => MortgageApplicationInputValues;
    onSuccess?: (fields: MortgageApplicationInputValues) => void;
    onError?: (fields: MortgageApplicationInputValues, errorMessage: string) => void;
    onChange?: (fields: MortgageApplicationInputValues) => MortgageApplicationInputValues;
    onValidate?: MortgageApplicationValidationValues;
} & React.CSSProperties>;
export default function MortgageApplication(props: MortgageApplicationProps): React.ReactElement;
