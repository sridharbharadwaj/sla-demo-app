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
export declare type LandTitleUpdateFormInputValues = {
    titleType?: string;
    titleVol?: string;
    titleFol?: string;
    lotNo?: string;
    extent?: string;
    propertyAddr?: string;
};
export declare type LandTitleUpdateFormValidationValues = {
    titleType?: ValidationFunction<string>;
    titleVol?: ValidationFunction<string>;
    titleFol?: ValidationFunction<string>;
    lotNo?: ValidationFunction<string>;
    extent?: ValidationFunction<string>;
    propertyAddr?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandTitleUpdateFormOverridesProps = {
    LandTitleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titleType?: PrimitiveOverrideProps<TextFieldProps>;
    titleVol?: PrimitiveOverrideProps<TextFieldProps>;
    titleFol?: PrimitiveOverrideProps<TextFieldProps>;
    lotNo?: PrimitiveOverrideProps<TextFieldProps>;
    extent?: PrimitiveOverrideProps<TextFieldProps>;
    propertyAddr?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandTitleUpdateFormProps = React.PropsWithChildren<{
    overrides?: LandTitleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    landTitle?: any;
    onSubmit?: (fields: LandTitleUpdateFormInputValues) => LandTitleUpdateFormInputValues;
    onSuccess?: (fields: LandTitleUpdateFormInputValues) => void;
    onError?: (fields: LandTitleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandTitleUpdateFormInputValues) => LandTitleUpdateFormInputValues;
    onValidate?: LandTitleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LandTitleUpdateForm(props: LandTitleUpdateFormProps): React.ReactElement;
