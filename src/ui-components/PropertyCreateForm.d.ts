/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PropertyCreateFormInputValues = {
    address?: string;
    ownerNric?: string;
};
export declare type PropertyCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    ownerNric?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyCreateFormOverridesProps = {
    PropertyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    ownerNric?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyCreateFormProps = React.PropsWithChildren<{
    overrides?: PropertyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onSuccess?: (fields: PropertyCreateFormInputValues) => void;
    onError?: (fields: PropertyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyCreateFormInputValues) => PropertyCreateFormInputValues;
    onValidate?: PropertyCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyCreateForm(props: PropertyCreateFormProps): React.ReactElement;
