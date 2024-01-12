/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBorrower } from "../graphql/mutations";
const client = generateClient();
export default function NewForm1(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nric: "",
    coRegNo: "",
    citizenship: "",
    placeOfCorporation: "",
    address: "",
    name: "",
  };
  const [nric, setNric] = React.useState(initialValues.nric);
  const [coRegNo, setCoRegNo] = React.useState(initialValues.coRegNo);
  const [citizenship, setCitizenship] = React.useState(
    initialValues.citizenship
  );
  const [placeOfCorporation, setPlaceOfCorporation] = React.useState(
    initialValues.placeOfCorporation
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNric(initialValues.nric);
    setCoRegNo(initialValues.coRegNo);
    setCitizenship(initialValues.citizenship);
    setPlaceOfCorporation(initialValues.placeOfCorporation);
    setAddress(initialValues.address);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    nric: [],
    coRegNo: [],
    citizenship: [],
    placeOfCorporation: [],
    address: [],
    name: [],
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
          nric,
          coRegNo,
          citizenship,
          placeOfCorporation,
          address,
          name,
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
            query: createBorrower.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewForm1")}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
      <SelectField
        label="Nric"
        placeholder="Please select an option"
        isDisabled={false}
        value={nric}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric: value,
              coRegNo,
              citizenship,
              placeOfCorporation,
              address,
              name,
            };
            const result = onChange(modelFields);
            value = result?.nric ?? value;
          }
          if (errors.nric?.hasError) {
            runValidationTasks("nric", value);
          }
          setNric(value);
        }}
        onBlur={() => runValidationTasks("nric", nric)}
        errorMessage={errors.nric?.errorMessage}
        hasError={errors.nric?.hasError}
        {...getOverrideProps(overrides, "nric")}
      ></SelectField>
      <TextField
        label="Co reg no"
        isRequired={false}
        isReadOnly={false}
        value={coRegNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric,
              coRegNo: value,
              citizenship,
              placeOfCorporation,
              address,
              name,
            };
            const result = onChange(modelFields);
            value = result?.coRegNo ?? value;
          }
          if (errors.coRegNo?.hasError) {
            runValidationTasks("coRegNo", value);
          }
          setCoRegNo(value);
        }}
        onBlur={() => runValidationTasks("coRegNo", coRegNo)}
        errorMessage={errors.coRegNo?.errorMessage}
        hasError={errors.coRegNo?.hasError}
        {...getOverrideProps(overrides, "coRegNo")}
      ></TextField>
      <TextField
        label="Citizenship"
        isRequired={false}
        isReadOnly={false}
        value={citizenship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric,
              coRegNo,
              citizenship: value,
              placeOfCorporation,
              address,
              name,
            };
            const result = onChange(modelFields);
            value = result?.citizenship ?? value;
          }
          if (errors.citizenship?.hasError) {
            runValidationTasks("citizenship", value);
          }
          setCitizenship(value);
        }}
        onBlur={() => runValidationTasks("citizenship", citizenship)}
        errorMessage={errors.citizenship?.errorMessage}
        hasError={errors.citizenship?.hasError}
        {...getOverrideProps(overrides, "citizenship")}
      ></TextField>
      <TextField
        label="Place of corporation"
        isRequired={false}
        isReadOnly={false}
        value={placeOfCorporation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric,
              coRegNo,
              citizenship,
              placeOfCorporation: value,
              address,
              name,
            };
            const result = onChange(modelFields);
            value = result?.placeOfCorporation ?? value;
          }
          if (errors.placeOfCorporation?.hasError) {
            runValidationTasks("placeOfCorporation", value);
          }
          setPlaceOfCorporation(value);
        }}
        onBlur={() =>
          runValidationTasks("placeOfCorporation", placeOfCorporation)
        }
        errorMessage={errors.placeOfCorporation?.errorMessage}
        hasError={errors.placeOfCorporation?.hasError}
        {...getOverrideProps(overrides, "placeOfCorporation")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric,
              coRegNo,
              citizenship,
              placeOfCorporation,
              address: value,
              name,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nric,
              coRegNo,
              citizenship,
              placeOfCorporation,
              address,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
    </Grid>
  );
}
