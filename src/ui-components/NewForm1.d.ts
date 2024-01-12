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
export declare type NewForm1InputValues = {
    nric?: string;
    coRegNo?: string;
    citizenship?: string;
    placeOfCorporation?: string;
    address?: string;
    name?: string;
};
export declare type NewForm1ValidationValues = {
    nric?: ValidationFunction<string>;
    coRegNo?: ValidationFunction<string>;
    citizenship?: ValidationFunction<string>;
    placeOfCorporation?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: PrimitiveOverrideProps<GridProps>;
    nric?: PrimitiveOverrideProps<SelectFieldProps>;
    coRegNo?: PrimitiveOverrideProps<TextFieldProps>;
    citizenship?: PrimitiveOverrideProps<TextFieldProps>;
    placeOfCorporation?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onSuccess?: (fields: NewForm1InputValues) => void;
    onError?: (fields: NewForm1InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
