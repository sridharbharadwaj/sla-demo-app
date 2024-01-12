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
export declare type MortgagorUpdateFormInputValues = {
    coRegNo?: string;
    name?: string;
    citizenship?: string;
    placeOfCorporation?: string;
    address?: string;
};
export declare type MortgagorUpdateFormValidationValues = {
    coRegNo?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    citizenship?: ValidationFunction<string>;
    placeOfCorporation?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MortgagorUpdateFormOverridesProps = {
    MortgagorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coRegNo?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    citizenship?: PrimitiveOverrideProps<TextFieldProps>;
    placeOfCorporation?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MortgagorUpdateFormProps = React.PropsWithChildren<{
    overrides?: MortgagorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mortgagor?: any;
    onSubmit?: (fields: MortgagorUpdateFormInputValues) => MortgagorUpdateFormInputValues;
    onSuccess?: (fields: MortgagorUpdateFormInputValues) => void;
    onError?: (fields: MortgagorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MortgagorUpdateFormInputValues) => MortgagorUpdateFormInputValues;
    onValidate?: MortgagorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MortgagorUpdateForm(props: MortgagorUpdateFormProps): React.ReactElement;
