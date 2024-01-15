/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProperty } from "../graphql/queries";
import { updateProperty } from "../graphql/mutations";
const client = generateClient();
export default function PropertyUpdateForm(props) {
  const {
    id: idProp,
    property: propertyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    address: "",
    ownerNric: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [ownerNric, setOwnerNric] = React.useState(initialValues.ownerNric);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRecord
      ? { ...initialValues, ...propertyRecord }
      : initialValues;
    setAddress(cleanValues.address);
    setOwnerNric(cleanValues.ownerNric);
    setErrors({});
  };
  const [propertyRecord, setPropertyRecord] = React.useState(propertyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProperty.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProperty
        : propertyModelProp;
      setPropertyRecord(record);
    };
    queryData();
  }, [idProp, propertyModelProp]);
  React.useEffect(resetStateValues, [propertyRecord]);
  const validations = {
    address: [],
    ownerNric: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          address: address ?? null,
          ownerNric: ownerNric ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateProperty.replaceAll("__typename", ""),
            variables: {
              input: {
                id: propertyRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              ownerNric,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Owner nric"
        isRequired={false}
        isReadOnly={false}
        value={ownerNric}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              ownerNric: value,
            };
            const result = onChange(modelFields);
            value = result?.ownerNric ?? value;
          }
          if (errors.ownerNric?.hasError) {
            runValidationTasks("ownerNric", value);
          }
          setOwnerNric(value);
        }}
        onBlur={() => runValidationTasks("ownerNric", ownerNric)}
        errorMessage={errors.ownerNric?.errorMessage}
        hasError={errors.ownerNric?.hasError}
        {...getOverrideProps(overrides, "ownerNric")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || propertyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || propertyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
