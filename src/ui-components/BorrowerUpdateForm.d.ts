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
export declare type BorrowerUpdateFormInputValues = {
    coRegNo?: string;
    name?: string;
    citizenship?: string;
    placeOfCorporation?: string;
    address?: string;
    nric?: string;
};
export declare type BorrowerUpdateFormValidationValues = {
    coRegNo?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    citizenship?: ValidationFunction<string>;
    placeOfCorporation?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    nric?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BorrowerUpdateFormOverridesProps = {
    BorrowerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coRegNo?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    citizenship?: PrimitiveOverrideProps<TextFieldProps>;
    placeOfCorporation?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    nric?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BorrowerUpdateFormProps = React.PropsWithChildren<{
    overrides?: BorrowerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    borrower?: any;
    onSubmit?: (fields: BorrowerUpdateFormInputValues) => BorrowerUpdateFormInputValues;
    onSuccess?: (fields: BorrowerUpdateFormInputValues) => void;
    onError?: (fields: BorrowerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BorrowerUpdateFormInputValues) => BorrowerUpdateFormInputValues;
    onValidate?: BorrowerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BorrowerUpdateForm(props: BorrowerUpdateFormProps): React.ReactElement;
