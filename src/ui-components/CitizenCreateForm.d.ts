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
export declare type CitizenCreateFormInputValues = {
    full_name?: string;
    surrname?: string;
    first_name?: string;
    nric?: string;
};
export declare type CitizenCreateFormValidationValues = {
    full_name?: ValidationFunction<string>;
    surrname?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    nric?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CitizenCreateFormOverridesProps = {
    CitizenCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    full_name?: PrimitiveOverrideProps<TextFieldProps>;
    surrname?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    nric?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CitizenCreateFormProps = React.PropsWithChildren<{
    overrides?: CitizenCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CitizenCreateFormInputValues) => CitizenCreateFormInputValues;
    onSuccess?: (fields: CitizenCreateFormInputValues) => void;
    onError?: (fields: CitizenCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CitizenCreateFormInputValues) => CitizenCreateFormInputValues;
    onValidate?: CitizenCreateFormValidationValues;
} & React.CSSProperties>;
export default function CitizenCreateForm(props: CitizenCreateFormProps): React.ReactElement;
