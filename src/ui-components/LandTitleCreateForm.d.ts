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
export declare type LandTitleCreateFormInputValues = {
    titleType?: string;
    titleVol?: string;
    titleFol?: string;
    lotNo?: string;
    extent?: string;
    propertyAddr?: string;
};
export declare type LandTitleCreateFormValidationValues = {
    titleType?: ValidationFunction<string>;
    titleVol?: ValidationFunction<string>;
    titleFol?: ValidationFunction<string>;
    lotNo?: ValidationFunction<string>;
    extent?: ValidationFunction<string>;
    propertyAddr?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandTitleCreateFormOverridesProps = {
    LandTitleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titleType?: PrimitiveOverrideProps<TextFieldProps>;
    titleVol?: PrimitiveOverrideProps<TextFieldProps>;
    titleFol?: PrimitiveOverrideProps<TextFieldProps>;
    lotNo?: PrimitiveOverrideProps<TextFieldProps>;
    extent?: PrimitiveOverrideProps<TextFieldProps>;
    propertyAddr?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandTitleCreateFormProps = React.PropsWithChildren<{
    overrides?: LandTitleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LandTitleCreateFormInputValues) => LandTitleCreateFormInputValues;
    onSuccess?: (fields: LandTitleCreateFormInputValues) => void;
    onError?: (fields: LandTitleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandTitleCreateFormInputValues) => LandTitleCreateFormInputValues;
    onValidate?: LandTitleCreateFormValidationValues;
} & React.CSSProperties>;
export default function LandTitleCreateForm(props: LandTitleCreateFormProps): React.ReactElement;
