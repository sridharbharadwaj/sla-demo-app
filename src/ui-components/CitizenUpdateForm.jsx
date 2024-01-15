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
import { getCitizen } from "../graphql/queries";
import { updateCitizen } from "../graphql/mutations";
const client = generateClient();
export default function CitizenUpdateForm(props) {
  const {
    id: idProp,
    citizen: citizenModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    full_name: "",
    surrname: "",
    first_name: "",
    nric: "",
  };
  const [full_name, setFull_name] = React.useState(initialValues.full_name);
  const [surrname, setSurrname] = React.useState(initialValues.surrname);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [nric, setNric] = React.useState(initialValues.nric);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = citizenRecord
      ? { ...initialValues, ...citizenRecord }
      : initialValues;
    setFull_name(cleanValues.full_name);
    setSurrname(cleanValues.surrname);
    setFirst_name(cleanValues.first_name);
    setNric(cleanValues.nric);
    setErrors({});
  };
  const [citizenRecord, setCitizenRecord] = React.useState(citizenModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCitizen.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCitizen
        : citizenModelProp;
      setCitizenRecord(record);
    };
    queryData();
  }, [idProp, citizenModelProp]);
  React.useEffect(resetStateValues, [citizenRecord]);
  const validations = {
    full_name: [],
    surrname: [],
    first_name: [],
    nric: [],
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
          full_name: full_name ?? null,
          surrname: surrname ?? null,
          first_name: first_name ?? null,
          nric: nric ?? null,
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
            query: updateCitizen.replaceAll("__typename", ""),
            variables: {
              input: {
                id: citizenRecord.id,
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
      {...getOverrideProps(overrides, "CitizenUpdateForm")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={full_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name: value,
              surrname,
              first_name,
              nric,
            };
            const result = onChange(modelFields);
            value = result?.full_name ?? value;
          }
          if (errors.full_name?.hasError) {
            runValidationTasks("full_name", value);
          }
          setFull_name(value);
        }}
        onBlur={() => runValidationTasks("full_name", full_name)}
        errorMessage={errors.full_name?.errorMessage}
        hasError={errors.full_name?.hasError}
        {...getOverrideProps(overrides, "full_name")}
      ></TextField>
      <TextField
        label="Surrname"
        isRequired={false}
        isReadOnly={false}
        value={surrname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              surrname: value,
              first_name,
              nric,
            };
            const result = onChange(modelFields);
            value = result?.surrname ?? value;
          }
          if (errors.surrname?.hasError) {
            runValidationTasks("surrname", value);
          }
          setSurrname(value);
        }}
        onBlur={() => runValidationTasks("surrname", surrname)}
        errorMessage={errors.surrname?.errorMessage}
        hasError={errors.surrname?.hasError}
        {...getOverrideProps(overrides, "surrname")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              surrname,
              first_name: value,
              nric,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Nric"
        isRequired={false}
        isReadOnly={false}
        value={nric}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              surrname,
              first_name,
              nric: value,
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
          isDisabled={!(idProp || citizenModelProp)}
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
              !(idProp || citizenModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
