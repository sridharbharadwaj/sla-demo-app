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
import { createLandTitle } from "../graphql/mutations";
const client = generateClient();
export default function LandTitleCreateForm(props) {
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
    titleType: "",
    titleVol: "",
    titleFol: "",
    lotNo: "",
    extent: "",
    propertyAddr: "",
  };
  const [titleType, setTitleType] = React.useState(initialValues.titleType);
  const [titleVol, setTitleVol] = React.useState(initialValues.titleVol);
  const [titleFol, setTitleFol] = React.useState(initialValues.titleFol);
  const [lotNo, setLotNo] = React.useState(initialValues.lotNo);
  const [extent, setExtent] = React.useState(initialValues.extent);
  const [propertyAddr, setPropertyAddr] = React.useState(
    initialValues.propertyAddr
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitleType(initialValues.titleType);
    setTitleVol(initialValues.titleVol);
    setTitleFol(initialValues.titleFol);
    setLotNo(initialValues.lotNo);
    setExtent(initialValues.extent);
    setPropertyAddr(initialValues.propertyAddr);
    setErrors({});
  };
  const validations = {
    titleType: [],
    titleVol: [],
    titleFol: [],
    lotNo: [],
    extent: [],
    propertyAddr: [],
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
          titleType,
          titleVol,
          titleFol,
          lotNo,
          extent,
          propertyAddr,
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
            query: createLandTitle.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "LandTitleCreateForm")}
      {...rest}
    >
      <TextField
        label="Title type"
        isRequired={false}
        isReadOnly={false}
        value={titleType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType: value,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddr,
            };
            const result = onChange(modelFields);
            value = result?.titleType ?? value;
          }
          if (errors.titleType?.hasError) {
            runValidationTasks("titleType", value);
          }
          setTitleType(value);
        }}
        onBlur={() => runValidationTasks("titleType", titleType)}
        errorMessage={errors.titleType?.errorMessage}
        hasError={errors.titleType?.hasError}
        {...getOverrideProps(overrides, "titleType")}
      ></TextField>
      <TextField
        label="Title vol"
        isRequired={false}
        isReadOnly={false}
        value={titleVol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType,
              titleVol: value,
              titleFol,
              lotNo,
              extent,
              propertyAddr,
            };
            const result = onChange(modelFields);
            value = result?.titleVol ?? value;
          }
          if (errors.titleVol?.hasError) {
            runValidationTasks("titleVol", value);
          }
          setTitleVol(value);
        }}
        onBlur={() => runValidationTasks("titleVol", titleVol)}
        errorMessage={errors.titleVol?.errorMessage}
        hasError={errors.titleVol?.hasError}
        {...getOverrideProps(overrides, "titleVol")}
      ></TextField>
      <TextField
        label="Title fol"
        isRequired={false}
        isReadOnly={false}
        value={titleFol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType,
              titleVol,
              titleFol: value,
              lotNo,
              extent,
              propertyAddr,
            };
            const result = onChange(modelFields);
            value = result?.titleFol ?? value;
          }
          if (errors.titleFol?.hasError) {
            runValidationTasks("titleFol", value);
          }
          setTitleFol(value);
        }}
        onBlur={() => runValidationTasks("titleFol", titleFol)}
        errorMessage={errors.titleFol?.errorMessage}
        hasError={errors.titleFol?.hasError}
        {...getOverrideProps(overrides, "titleFol")}
      ></TextField>
      <TextField
        label="Lot no"
        isRequired={false}
        isReadOnly={false}
        value={lotNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType,
              titleVol,
              titleFol,
              lotNo: value,
              extent,
              propertyAddr,
            };
            const result = onChange(modelFields);
            value = result?.lotNo ?? value;
          }
          if (errors.lotNo?.hasError) {
            runValidationTasks("lotNo", value);
          }
          setLotNo(value);
        }}
        onBlur={() => runValidationTasks("lotNo", lotNo)}
        errorMessage={errors.lotNo?.errorMessage}
        hasError={errors.lotNo?.hasError}
        {...getOverrideProps(overrides, "lotNo")}
      ></TextField>
      <TextField
        label="Extent"
        isRequired={false}
        isReadOnly={false}
        value={extent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent: value,
              propertyAddr,
            };
            const result = onChange(modelFields);
            value = result?.extent ?? value;
          }
          if (errors.extent?.hasError) {
            runValidationTasks("extent", value);
          }
          setExtent(value);
        }}
        onBlur={() => runValidationTasks("extent", extent)}
        errorMessage={errors.extent?.errorMessage}
        hasError={errors.extent?.hasError}
        {...getOverrideProps(overrides, "extent")}
      ></TextField>
      <TextField
        label="Property addr"
        isRequired={false}
        isReadOnly={false}
        value={propertyAddr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddr: value,
            };
            const result = onChange(modelFields);
            value = result?.propertyAddr ?? value;
          }
          if (errors.propertyAddr?.hasError) {
            runValidationTasks("propertyAddr", value);
          }
          setPropertyAddr(value);
        }}
        onBlur={() => runValidationTasks("propertyAddr", propertyAddr)}
        errorMessage={errors.propertyAddr?.errorMessage}
        hasError={errors.propertyAddr?.hasError}
        {...getOverrideProps(overrides, "propertyAddr")}
      ></TextField>
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
    </Grid>
  );
}
