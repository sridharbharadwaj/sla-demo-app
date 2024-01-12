/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getMortgage,
  listBorrowers,
  listMortgagees,
  listMortgagors,
} from "../graphql/queries";
import { updateMortgage } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function MortgageUpdateForm(props) {
  const {
    id: idProp,
    mortgage: mortgageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    instrumentNo: "",
    registeredBy: "",
    registeredOn: "",
    titleType: "",
    titleVol: "",
    titleFol: "",
    lotNo: "",
    extent: "",
    propertyAddress: "",
    dateOfInstrument: "",
    covenantsAndConditions: "",
    priorEncumberances: "",
    borrowerWitness: "",
    mortgageeSign: "",
    mortgageeWitness: "",
    Borrower: undefined,
    Mortgagee: undefined,
    Mortgagor: undefined,
    mortgagorSign: "",
    mortgagorWitness: "",
    borrowerSign: "",
  };
  const [instrumentNo, setInstrumentNo] = React.useState(
    initialValues.instrumentNo
  );
  const [registeredBy, setRegisteredBy] = React.useState(
    initialValues.registeredBy
  );
  const [registeredOn, setRegisteredOn] = React.useState(
    initialValues.registeredOn
  );
  const [titleType, setTitleType] = React.useState(initialValues.titleType);
  const [titleVol, setTitleVol] = React.useState(initialValues.titleVol);
  const [titleFol, setTitleFol] = React.useState(initialValues.titleFol);
  const [lotNo, setLotNo] = React.useState(initialValues.lotNo);
  const [extent, setExtent] = React.useState(initialValues.extent);
  const [propertyAddress, setPropertyAddress] = React.useState(
    initialValues.propertyAddress
  );
  const [dateOfInstrument, setDateOfInstrument] = React.useState(
    initialValues.dateOfInstrument
  );
  const [covenantsAndConditions, setCovenantsAndConditions] = React.useState(
    initialValues.covenantsAndConditions
  );
  const [priorEncumberances, setPriorEncumberances] = React.useState(
    initialValues.priorEncumberances
  );
  const [borrowerWitness, setBorrowerWitness] = React.useState(
    initialValues.borrowerWitness
  );
  const [mortgageeSign, setMortgageeSign] = React.useState(
    initialValues.mortgageeSign
  );
  const [mortgageeWitness, setMortgageeWitness] = React.useState(
    initialValues.mortgageeWitness
  );
  const [Borrower, setBorrower] = React.useState(initialValues.Borrower);
  const [BorrowerLoading, setBorrowerLoading] = React.useState(false);
  const [borrowerRecords, setBorrowerRecords] = React.useState([]);
  const [Mortgagee, setMortgagee] = React.useState(initialValues.Mortgagee);
  const [MortgageeLoading, setMortgageeLoading] = React.useState(false);
  const [mortgageeRecords, setMortgageeRecords] = React.useState([]);
  const [Mortgagor, setMortgagor] = React.useState(initialValues.Mortgagor);
  const [MortgagorLoading, setMortgagorLoading] = React.useState(false);
  const [mortgagorRecords, setMortgagorRecords] = React.useState([]);
  const [mortgagorSign, setMortgagorSign] = React.useState(
    initialValues.mortgagorSign
  );
  const [mortgagorWitness, setMortgagorWitness] = React.useState(
    initialValues.mortgagorWitness
  );
  const [borrowerSign, setBorrowerSign] = React.useState(
    initialValues.borrowerSign
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mortgageRecord
      ? { ...initialValues, ...mortgageRecord, Borrower, Mortgagee, Mortgagor }
      : initialValues;
    setInstrumentNo(cleanValues.instrumentNo);
    setRegisteredBy(cleanValues.registeredBy);
    setRegisteredOn(cleanValues.registeredOn);
    setTitleType(cleanValues.titleType);
    setTitleVol(cleanValues.titleVol);
    setTitleFol(cleanValues.titleFol);
    setLotNo(cleanValues.lotNo);
    setExtent(cleanValues.extent);
    setPropertyAddress(cleanValues.propertyAddress);
    setDateOfInstrument(cleanValues.dateOfInstrument);
    setCovenantsAndConditions(cleanValues.covenantsAndConditions);
    setPriorEncumberances(cleanValues.priorEncumberances);
    setBorrowerWitness(cleanValues.borrowerWitness);
    setMortgageeSign(cleanValues.mortgageeSign);
    setMortgageeWitness(cleanValues.mortgageeWitness);
    setBorrower(cleanValues.Borrower);
    setCurrentBorrowerValue(undefined);
    setCurrentBorrowerDisplayValue("");
    setMortgagee(cleanValues.Mortgagee);
    setCurrentMortgageeValue(undefined);
    setCurrentMortgageeDisplayValue("");
    setMortgagor(cleanValues.Mortgagor);
    setCurrentMortgagorValue(undefined);
    setCurrentMortgagorDisplayValue("");
    setMortgagorSign(cleanValues.mortgagorSign);
    setMortgagorWitness(cleanValues.mortgagorWitness);
    setBorrowerSign(cleanValues.borrowerSign);
    setErrors({});
  };
  const [mortgageRecord, setMortgageRecord] = React.useState(mortgageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMortgage.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMortgage
        : mortgageModelProp;
      const BorrowerRecord = record ? await record.Borrower : undefined;
      setBorrower(BorrowerRecord);
      const MortgageeRecord = record ? await record.Mortgagee : undefined;
      setMortgagee(MortgageeRecord);
      const MortgagorRecord = record ? await record.Mortgagor : undefined;
      setMortgagor(MortgagorRecord);
      setMortgageRecord(record);
    };
    queryData();
  }, [idProp, mortgageModelProp]);
  React.useEffect(resetStateValues, [
    mortgageRecord,
    Borrower,
    Mortgagee,
    Mortgagor,
  ]);
  const [currentBorrowerDisplayValue, setCurrentBorrowerDisplayValue] =
    React.useState("");
  const [currentBorrowerValue, setCurrentBorrowerValue] =
    React.useState(undefined);
  const BorrowerRef = React.createRef();
  const [currentMortgageeDisplayValue, setCurrentMortgageeDisplayValue] =
    React.useState("");
  const [currentMortgageeValue, setCurrentMortgageeValue] =
    React.useState(undefined);
  const MortgageeRef = React.createRef();
  const [currentMortgagorDisplayValue, setCurrentMortgagorDisplayValue] =
    React.useState("");
  const [currentMortgagorValue, setCurrentMortgagorValue] =
    React.useState(undefined);
  const MortgagorRef = React.createRef();
  const getIDValue = {
    Borrower: (r) => JSON.stringify({ id: r?.id }),
    Mortgagee: (r) => JSON.stringify({ id: r?.id }),
    Mortgagor: (r) => JSON.stringify({ id: r?.id }),
  };
  const BorrowerIdSet = new Set(
    Array.isArray(Borrower)
      ? Borrower.map((r) => getIDValue.Borrower?.(r))
      : getIDValue.Borrower?.(Borrower)
  );
  const MortgageeIdSet = new Set(
    Array.isArray(Mortgagee)
      ? Mortgagee.map((r) => getIDValue.Mortgagee?.(r))
      : getIDValue.Mortgagee?.(Mortgagee)
  );
  const MortgagorIdSet = new Set(
    Array.isArray(Mortgagor)
      ? Mortgagor.map((r) => getIDValue.Mortgagor?.(r))
      : getIDValue.Mortgagor?.(Mortgagor)
  );
  const getDisplayValue = {
    Borrower: (r) => `${r?.coRegNo ? r?.coRegNo + " - " : ""}${r?.id}`,
    Mortgagee: (r) => `${r?.coRegNo ? r?.coRegNo + " - " : ""}${r?.id}`,
    Mortgagor: (r) => `${r?.coRegNo ? r?.coRegNo + " - " : ""}${r?.id}`,
  };
  const validations = {
    instrumentNo: [],
    registeredBy: [],
    registeredOn: [],
    titleType: [],
    titleVol: [],
    titleFol: [],
    lotNo: [],
    extent: [],
    propertyAddress: [],
    dateOfInstrument: [],
    covenantsAndConditions: [],
    priorEncumberances: [],
    borrowerWitness: [],
    mortgageeSign: [],
    mortgageeWitness: [],
    Borrower: [],
    Mortgagee: [],
    Mortgagor: [],
    mortgagorSign: [],
    mortgagorWitness: [],
    borrowerSign: [],
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
  const fetchBorrowerRecords = async (value) => {
    setBorrowerLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ coRegNo: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listBorrowers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBorrowers?.items;
      var loaded = result.filter(
        (item) => !BorrowerIdSet.has(getIDValue.Borrower?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBorrowerRecords(newOptions.slice(0, autocompleteLength));
    setBorrowerLoading(false);
  };
  const fetchMortgageeRecords = async (value) => {
    setMortgageeLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ coRegNo: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listMortgagees.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMortgagees?.items;
      var loaded = result.filter(
        (item) => !MortgageeIdSet.has(getIDValue.Mortgagee?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMortgageeRecords(newOptions.slice(0, autocompleteLength));
    setMortgageeLoading(false);
  };
  const fetchMortgagorRecords = async (value) => {
    setMortgagorLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ coRegNo: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listMortgagors.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMortgagors?.items;
      var loaded = result.filter(
        (item) => !MortgagorIdSet.has(getIDValue.Mortgagor?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMortgagorRecords(newOptions.slice(0, autocompleteLength));
    setMortgagorLoading(false);
  };
  React.useEffect(() => {
    fetchBorrowerRecords("");
    fetchMortgageeRecords("");
    fetchMortgagorRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          instrumentNo: instrumentNo ?? null,
          registeredBy: registeredBy ?? null,
          registeredOn: registeredOn ?? null,
          titleType: titleType ?? null,
          titleVol: titleVol ?? null,
          titleFol: titleFol ?? null,
          lotNo: lotNo ?? null,
          extent: extent ?? null,
          propertyAddress: propertyAddress ?? null,
          dateOfInstrument: dateOfInstrument ?? null,
          covenantsAndConditions: covenantsAndConditions ?? null,
          priorEncumberances: priorEncumberances ?? null,
          borrowerWitness: borrowerWitness ?? null,
          mortgageeSign: mortgageeSign ?? null,
          mortgageeWitness: mortgageeWitness ?? null,
          Borrower: Borrower ?? null,
          Mortgagee: Mortgagee ?? null,
          Mortgagor: Mortgagor ?? null,
          mortgagorSign: mortgagorSign ?? null,
          mortgagorWitness: mortgagorWitness ?? null,
          borrowerSign: borrowerSign ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            instrumentNo: modelFields.instrumentNo ?? null,
            registeredBy: modelFields.registeredBy ?? null,
            registeredOn: modelFields.registeredOn ?? null,
            titleType: modelFields.titleType ?? null,
            titleVol: modelFields.titleVol ?? null,
            titleFol: modelFields.titleFol ?? null,
            lotNo: modelFields.lotNo ?? null,
            extent: modelFields.extent ?? null,
            propertyAddress: modelFields.propertyAddress ?? null,
            dateOfInstrument: modelFields.dateOfInstrument ?? null,
            covenantsAndConditions: modelFields.covenantsAndConditions ?? null,
            priorEncumberances: modelFields.priorEncumberances ?? null,
            borrowerWitness: modelFields.borrowerWitness ?? null,
            mortgageeSign: modelFields.mortgageeSign ?? null,
            mortgageeWitness: modelFields.mortgageeWitness ?? null,
            mortgageBorrowerId: modelFields?.Borrower?.id ?? null,
            mortgageMortgageeId: modelFields?.Mortgagee?.id ?? null,
            mortgageMortgagorId: modelFields?.Mortgagor?.id ?? null,
            mortgagorSign: modelFields.mortgagorSign ?? null,
            mortgagorWitness: modelFields.mortgagorWitness ?? null,
            borrowerSign: modelFields.borrowerSign ?? null,
          };
          await client.graphql({
            query: updateMortgage.replaceAll("__typename", ""),
            variables: {
              input: {
                id: mortgageRecord.id,
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "MortgageUpdateForm")}
      {...rest}
    >
      <TextField
        label="Instrument no"
        isRequired={false}
        isReadOnly={false}
        value={instrumentNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo: value,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.instrumentNo ?? value;
          }
          if (errors.instrumentNo?.hasError) {
            runValidationTasks("instrumentNo", value);
          }
          setInstrumentNo(value);
        }}
        onBlur={() => runValidationTasks("instrumentNo", instrumentNo)}
        errorMessage={errors.instrumentNo?.errorMessage}
        hasError={errors.instrumentNo?.hasError}
        {...getOverrideProps(overrides, "instrumentNo")}
      ></TextField>
      <TextField
        label="Registered by"
        isRequired={false}
        isReadOnly={false}
        value={registeredBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy: value,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.registeredBy ?? value;
          }
          if (errors.registeredBy?.hasError) {
            runValidationTasks("registeredBy", value);
          }
          setRegisteredBy(value);
        }}
        onBlur={() => runValidationTasks("registeredBy", registeredBy)}
        errorMessage={errors.registeredBy?.errorMessage}
        hasError={errors.registeredBy?.hasError}
        {...getOverrideProps(overrides, "registeredBy")}
      ></TextField>
      <TextField
        label="Registered on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={registeredOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn: value,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.registeredOn ?? value;
          }
          if (errors.registeredOn?.hasError) {
            runValidationTasks("registeredOn", value);
          }
          setRegisteredOn(value);
        }}
        onBlur={() => runValidationTasks("registeredOn", registeredOn)}
        errorMessage={errors.registeredOn?.errorMessage}
        hasError={errors.registeredOn?.hasError}
        {...getOverrideProps(overrides, "registeredOn")}
      ></TextField>
      <TextField
        label="Title type"
        isRequired={false}
        isReadOnly={false}
        value={titleType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType: value,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
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
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol: value,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
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
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol: value,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
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
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo: value,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
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
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent: value,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
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
        label="Property address"
        isRequired={false}
        isReadOnly={false}
        value={propertyAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress: value,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.propertyAddress ?? value;
          }
          if (errors.propertyAddress?.hasError) {
            runValidationTasks("propertyAddress", value);
          }
          setPropertyAddress(value);
        }}
        onBlur={() => runValidationTasks("propertyAddress", propertyAddress)}
        errorMessage={errors.propertyAddress?.errorMessage}
        hasError={errors.propertyAddress?.hasError}
        {...getOverrideProps(overrides, "propertyAddress")}
      ></TextField>
      <TextField
        label="Date of instrument"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateOfInstrument}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument: value,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.dateOfInstrument ?? value;
          }
          if (errors.dateOfInstrument?.hasError) {
            runValidationTasks("dateOfInstrument", value);
          }
          setDateOfInstrument(value);
        }}
        onBlur={() => runValidationTasks("dateOfInstrument", dateOfInstrument)}
        errorMessage={errors.dateOfInstrument?.errorMessage}
        hasError={errors.dateOfInstrument?.hasError}
        {...getOverrideProps(overrides, "dateOfInstrument")}
      ></TextField>
      <TextField
        label="Covenants and conditions"
        isRequired={false}
        isReadOnly={false}
        value={covenantsAndConditions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions: value,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.covenantsAndConditions ?? value;
          }
          if (errors.covenantsAndConditions?.hasError) {
            runValidationTasks("covenantsAndConditions", value);
          }
          setCovenantsAndConditions(value);
        }}
        onBlur={() =>
          runValidationTasks("covenantsAndConditions", covenantsAndConditions)
        }
        errorMessage={errors.covenantsAndConditions?.errorMessage}
        hasError={errors.covenantsAndConditions?.hasError}
        {...getOverrideProps(overrides, "covenantsAndConditions")}
      ></TextField>
      <TextField
        label="Prior encumberances"
        isRequired={false}
        isReadOnly={false}
        value={priorEncumberances}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances: value,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.priorEncumberances ?? value;
          }
          if (errors.priorEncumberances?.hasError) {
            runValidationTasks("priorEncumberances", value);
          }
          setPriorEncumberances(value);
        }}
        onBlur={() =>
          runValidationTasks("priorEncumberances", priorEncumberances)
        }
        errorMessage={errors.priorEncumberances?.errorMessage}
        hasError={errors.priorEncumberances?.hasError}
        {...getOverrideProps(overrides, "priorEncumberances")}
      ></TextField>
      <TextField
        label="Borrower witness"
        isRequired={false}
        isReadOnly={false}
        value={borrowerWitness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness: value,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.borrowerWitness ?? value;
          }
          if (errors.borrowerWitness?.hasError) {
            runValidationTasks("borrowerWitness", value);
          }
          setBorrowerWitness(value);
        }}
        onBlur={() => runValidationTasks("borrowerWitness", borrowerWitness)}
        errorMessage={errors.borrowerWitness?.errorMessage}
        hasError={errors.borrowerWitness?.hasError}
        {...getOverrideProps(overrides, "borrowerWitness")}
      ></TextField>
      <TextField
        label="Mortgagee sign"
        isRequired={false}
        isReadOnly={false}
        value={mortgageeSign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign: value,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.mortgageeSign ?? value;
          }
          if (errors.mortgageeSign?.hasError) {
            runValidationTasks("mortgageeSign", value);
          }
          setMortgageeSign(value);
        }}
        onBlur={() => runValidationTasks("mortgageeSign", mortgageeSign)}
        errorMessage={errors.mortgageeSign?.errorMessage}
        hasError={errors.mortgageeSign?.hasError}
        {...getOverrideProps(overrides, "mortgageeSign")}
      ></TextField>
      <TextField
        label="Mortgagee witness"
        isRequired={false}
        isReadOnly={false}
        value={mortgageeWitness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness: value,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.mortgageeWitness ?? value;
          }
          if (errors.mortgageeWitness?.hasError) {
            runValidationTasks("mortgageeWitness", value);
          }
          setMortgageeWitness(value);
        }}
        onBlur={() => runValidationTasks("mortgageeWitness", mortgageeWitness)}
        errorMessage={errors.mortgageeWitness?.errorMessage}
        hasError={errors.mortgageeWitness?.hasError}
        {...getOverrideProps(overrides, "mortgageeWitness")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower: value,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.Borrower ?? value;
          }
          setBorrower(value);
          setCurrentBorrowerValue(undefined);
          setCurrentBorrowerDisplayValue("");
        }}
        currentFieldValue={currentBorrowerValue}
        label={"Borrower"}
        items={Borrower ? [Borrower] : []}
        hasError={errors?.Borrower?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Borrower", currentBorrowerValue)
        }
        errorMessage={errors?.Borrower?.errorMessage}
        getBadgeText={getDisplayValue.Borrower}
        setFieldValue={(model) => {
          setCurrentBorrowerDisplayValue(
            model ? getDisplayValue.Borrower(model) : ""
          );
          setCurrentBorrowerValue(model);
        }}
        inputFieldRef={BorrowerRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Borrower"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Borrower"
          value={currentBorrowerDisplayValue}
          options={borrowerRecords
            .filter((r) => !BorrowerIdSet.has(getIDValue.Borrower?.(r)))
            .map((r) => ({
              id: getIDValue.Borrower?.(r),
              label: getDisplayValue.Borrower?.(r),
            }))}
          isLoading={BorrowerLoading}
          onSelect={({ id, label }) => {
            setCurrentBorrowerValue(
              borrowerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBorrowerDisplayValue(label);
            runValidationTasks("Borrower", label);
          }}
          onClear={() => {
            setCurrentBorrowerDisplayValue("");
          }}
          defaultValue={Borrower}
          onChange={(e) => {
            let { value } = e.target;
            fetchBorrowerRecords(value);
            if (errors.Borrower?.hasError) {
              runValidationTasks("Borrower", value);
            }
            setCurrentBorrowerDisplayValue(value);
            setCurrentBorrowerValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Borrower", currentBorrowerDisplayValue)
          }
          errorMessage={errors.Borrower?.errorMessage}
          hasError={errors.Borrower?.hasError}
          ref={BorrowerRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Borrower")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee: value,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.Mortgagee ?? value;
          }
          setMortgagee(value);
          setCurrentMortgageeValue(undefined);
          setCurrentMortgageeDisplayValue("");
        }}
        currentFieldValue={currentMortgageeValue}
        label={"Mortgagee"}
        items={Mortgagee ? [Mortgagee] : []}
        hasError={errors?.Mortgagee?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Mortgagee", currentMortgageeValue)
        }
        errorMessage={errors?.Mortgagee?.errorMessage}
        getBadgeText={getDisplayValue.Mortgagee}
        setFieldValue={(model) => {
          setCurrentMortgageeDisplayValue(
            model ? getDisplayValue.Mortgagee(model) : ""
          );
          setCurrentMortgageeValue(model);
        }}
        inputFieldRef={MortgageeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Mortgagee"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Mortgagee"
          value={currentMortgageeDisplayValue}
          options={mortgageeRecords
            .filter((r) => !MortgageeIdSet.has(getIDValue.Mortgagee?.(r)))
            .map((r) => ({
              id: getIDValue.Mortgagee?.(r),
              label: getDisplayValue.Mortgagee?.(r),
            }))}
          isLoading={MortgageeLoading}
          onSelect={({ id, label }) => {
            setCurrentMortgageeValue(
              mortgageeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMortgageeDisplayValue(label);
            runValidationTasks("Mortgagee", label);
          }}
          onClear={() => {
            setCurrentMortgageeDisplayValue("");
          }}
          defaultValue={Mortgagee}
          onChange={(e) => {
            let { value } = e.target;
            fetchMortgageeRecords(value);
            if (errors.Mortgagee?.hasError) {
              runValidationTasks("Mortgagee", value);
            }
            setCurrentMortgageeDisplayValue(value);
            setCurrentMortgageeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Mortgagee", currentMortgageeDisplayValue)
          }
          errorMessage={errors.Mortgagee?.errorMessage}
          hasError={errors.Mortgagee?.hasError}
          ref={MortgageeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Mortgagee")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor: value,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.Mortgagor ?? value;
          }
          setMortgagor(value);
          setCurrentMortgagorValue(undefined);
          setCurrentMortgagorDisplayValue("");
        }}
        currentFieldValue={currentMortgagorValue}
        label={"Mortgagor"}
        items={Mortgagor ? [Mortgagor] : []}
        hasError={errors?.Mortgagor?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Mortgagor", currentMortgagorValue)
        }
        errorMessage={errors?.Mortgagor?.errorMessage}
        getBadgeText={getDisplayValue.Mortgagor}
        setFieldValue={(model) => {
          setCurrentMortgagorDisplayValue(
            model ? getDisplayValue.Mortgagor(model) : ""
          );
          setCurrentMortgagorValue(model);
        }}
        inputFieldRef={MortgagorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Mortgagor"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Mortgagor"
          value={currentMortgagorDisplayValue}
          options={mortgagorRecords
            .filter((r) => !MortgagorIdSet.has(getIDValue.Mortgagor?.(r)))
            .map((r) => ({
              id: getIDValue.Mortgagor?.(r),
              label: getDisplayValue.Mortgagor?.(r),
            }))}
          isLoading={MortgagorLoading}
          onSelect={({ id, label }) => {
            setCurrentMortgagorValue(
              mortgagorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMortgagorDisplayValue(label);
            runValidationTasks("Mortgagor", label);
          }}
          onClear={() => {
            setCurrentMortgagorDisplayValue("");
          }}
          defaultValue={Mortgagor}
          onChange={(e) => {
            let { value } = e.target;
            fetchMortgagorRecords(value);
            if (errors.Mortgagor?.hasError) {
              runValidationTasks("Mortgagor", value);
            }
            setCurrentMortgagorDisplayValue(value);
            setCurrentMortgagorValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Mortgagor", currentMortgagorDisplayValue)
          }
          errorMessage={errors.Mortgagor?.errorMessage}
          hasError={errors.Mortgagor?.hasError}
          ref={MortgagorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Mortgagor")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Mortgagor sign"
        isRequired={false}
        isReadOnly={false}
        value={mortgagorSign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign: value,
              mortgagorWitness,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.mortgagorSign ?? value;
          }
          if (errors.mortgagorSign?.hasError) {
            runValidationTasks("mortgagorSign", value);
          }
          setMortgagorSign(value);
        }}
        onBlur={() => runValidationTasks("mortgagorSign", mortgagorSign)}
        errorMessage={errors.mortgagorSign?.errorMessage}
        hasError={errors.mortgagorSign?.hasError}
        {...getOverrideProps(overrides, "mortgagorSign")}
      ></TextField>
      <TextField
        label="Mortgagor witness"
        isRequired={false}
        isReadOnly={false}
        value={mortgagorWitness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness: value,
              borrowerSign,
            };
            const result = onChange(modelFields);
            value = result?.mortgagorWitness ?? value;
          }
          if (errors.mortgagorWitness?.hasError) {
            runValidationTasks("mortgagorWitness", value);
          }
          setMortgagorWitness(value);
        }}
        onBlur={() => runValidationTasks("mortgagorWitness", mortgagorWitness)}
        errorMessage={errors.mortgagorWitness?.errorMessage}
        hasError={errors.mortgagorWitness?.hasError}
        {...getOverrideProps(overrides, "mortgagorWitness")}
      ></TextField>
      <TextField
        label="Borrower sign"
        isRequired={false}
        isReadOnly={false}
        value={borrowerSign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instrumentNo,
              registeredBy,
              registeredOn,
              titleType,
              titleVol,
              titleFol,
              lotNo,
              extent,
              propertyAddress,
              dateOfInstrument,
              covenantsAndConditions,
              priorEncumberances,
              borrowerWitness,
              mortgageeSign,
              mortgageeWitness,
              Borrower,
              Mortgagee,
              Mortgagor,
              mortgagorSign,
              mortgagorWitness,
              borrowerSign: value,
            };
            const result = onChange(modelFields);
            value = result?.borrowerSign ?? value;
          }
          if (errors.borrowerSign?.hasError) {
            runValidationTasks("borrowerSign", value);
          }
          setBorrowerSign(value);
        }}
        onBlur={() => runValidationTasks("borrowerSign", borrowerSign)}
        errorMessage={errors.borrowerSign?.errorMessage}
        hasError={errors.borrowerSign?.hasError}
        {...getOverrideProps(overrides, "borrowerSign")}
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
          isDisabled={!(idProp || mortgageModelProp)}
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
              !(idProp || mortgageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
