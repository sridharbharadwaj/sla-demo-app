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
export declare type PropertyUpdateFormInputValues = {
    address?: string;
    ownerNric?: string;
};
export declare type PropertyUpdateFormValidationValues = {
    address?: ValidationFunction<string>;
    ownerNric?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropertyUpdateFormOverridesProps = {
    PropertyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    ownerNric?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropertyUpdateFormProps = React.PropsWithChildren<{
    overrides?: PropertyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    property?: any;
    onSubmit?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onSuccess?: (fields: PropertyUpdateFormInputValues) => void;
    onError?: (fields: PropertyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropertyUpdateFormInputValues) => PropertyUpdateFormInputValues;
    onValidate?: PropertyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PropertyUpdateForm(props: PropertyUpdateFormProps): React.ReactElement;
