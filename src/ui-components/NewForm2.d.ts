/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NewForm2InputValues = {
    nric?: string;
    coRegNo?: string;
    name?: string;
    citizenship?: string;
    placeOfCorporation?: string;
    address?: string;
};
export declare type NewForm2ValidationValues = {
    nric?: ValidationFunction<string>;
    coRegNo?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    citizenship?: ValidationFunction<string>;
    placeOfCorporation?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm2OverridesProps = {
    NewForm2Grid?: PrimitiveOverrideProps<GridProps>;
    nric?: PrimitiveOverrideProps<SelectFieldProps>;
    coRegNo?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    citizenship?: PrimitiveOverrideProps<TextFieldProps>;
    placeOfCorporation?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm2Props = React.PropsWithChildren<{
    overrides?: NewForm2OverridesProps | undefined | null;
} & {
    id?: string;
    borrower?: any;
    onSubmit?: (fields: NewForm2InputValues) => NewForm2InputValues;
    onSuccess?: (fields: NewForm2InputValues) => void;
    onError?: (fields: NewForm2InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm2InputValues) => NewForm2InputValues;
    onValidate?: NewForm2ValidationValues;
} & React.CSSProperties>;
export default function NewForm2(props: NewForm2Props): React.ReactElement;
