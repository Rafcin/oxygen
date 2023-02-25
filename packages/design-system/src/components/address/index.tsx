/* eslint-disable @typescript-eslint/no-floating-promises */
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { Box, TextField, useThemeProps } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { default as Grid } from "@mui/material/Unstable_Grid2"; // Grid version 2
import { OverridableComponent } from "@mui/types";
import clsx from "clsx";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
} from "use-places-autocomplete";
import { Error } from "../error";
import { PinPointInput } from "../pinpoint";
import { countries, CountryType } from "./constants";
import { AddressRoot } from "./styles";
import { AddressTypeMap, getAddressUtilityClass } from "./types";

const useUtilityClasses = () => {
  const slots = {
    root: ["root"],
  };

  return composeClasses(slots, getAddressUtilityClass, {});
};

function extractValue(components: Array<any>, type: any) {
  return (
    components
      .filter((component) => component.types.indexOf(type) === 0)
      .map((item) => item.long_name)
      .pop() || null
  );
}

const AddressInput = React.memo(
  React.forwardRef(function Address(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: "MuiAddress",
    });

    const {
      className,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      component = "div",
      name,
      ...other
    } = props;

    const ownerState = {
      ...props,
      component,
    };

    const classes = useUtilityClasses();

    const {
      control,
      setValue,
      formState: { errors },
    } = useFormContext();

    const {
      value: locationSearchValue,
      suggestions: { data: locationSearchData, status: locationSearchStatus },
      setValue: setLocationSearchValue,
    } = usePlacesAutocomplete({
      initOnMount: true,
      //callbackName: '__onGoogleMapsLoad',
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });

    const filter = createFilterOptions<any>();

    return (
      <AddressRoot
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        ref={ref}
        {...other}
      >
        <span>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Controller
                name={`${name}.street`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Autocomplete
                    sx={{
                      width: "100%",
                    }}
                    id="street-input"
                    isOptionEqualToValue={(option, value) =>
                      option.label === value.label
                    }
                    freeSolo
                    value={value}
                    options={locationSearchData.map((result) => ({
                      ...result,
                      value: result.description,
                      label: result.description,
                      meta: result.structured_formatting.secondary_text,
                    }))}
                    onInputChange={(event, newInputValue) => {
                      setLocationSearchValue(newInputValue);
                      onChange(newInputValue);
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);
                      return filtered;
                    }}
                    onChange={(
                      event: any,
                      newValue: any | null,
                      reason: any,
                      details: any
                    ) => {
                      if (reason === "clear") {
                        setValue(`${name}.street`, "");
                      }
                      if (reason === "createOption") {
                        setValue(`${name}.street`, newValue.value);
                      }
                      if (reason === "selectOption") {
                        getGeocode({
                          address: newValue.value,
                        })
                          .then((results) =>
                            getDetails({
                              placeId: results[0].place_id,
                            })
                          )
                          .then((details: any) => {
                            setValue(`${name}.placeid`, details.place_id, {
                              shouldValidate: true,
                            });
                            setValue(`${name}.label`, newValue.label, {
                              shouldValidate: true,
                            });
                            setValue(
                              `${name}.street`,
                              extractValue(
                                details.address_components,
                                "street_number"
                              ) &&
                                extractValue(
                                  details.address_components,
                                  "route"
                                )
                                ? `${extractValue(
                                    details.address_components,
                                    "street_number"
                                  )} ${extractValue(
                                    details.address_components,
                                    "route"
                                  )}`
                                : newValue.label,
                              { shouldValidate: true }
                            );
                            setValue(
                              `${name}.city`,
                              extractValue(
                                details.address_components,
                                "locality"
                              ),
                              { shouldValidate: true }
                            );
                            setValue(
                              `${name}.state`,
                              extractValue(
                                details.address_components,
                                "administrative_area_level_1"
                              ) ??
                                extractValue(
                                  details.address_components,
                                  "administrative_area_level_2"
                                ),
                              { shouldValidate: true }
                            );
                            onChange(
                              extractValue(
                                details.address_components,
                                "street_number"
                              ) &&
                                extractValue(
                                  details.address_components,
                                  "route"
                                )
                                ? `${extractValue(
                                    details.address_components,
                                    "street_number"
                                  )} ${extractValue(
                                    details.address_components,
                                    "route"
                                  )}`
                                : newValue.label
                            );
                            if (
                              extractValue(
                                details.address_components,
                                "postal_code"
                              )
                            ) {
                              setValue(
                                `${name}.zip`,
                                extractValue(
                                  details.address_components,
                                  "postal_code"
                                ),
                                { shouldValidate: true }
                              );
                            }
                            setValue(
                              `${name}.address`,
                              details.formatted_address,
                              {
                                shouldValidate: true,
                              }
                            );
                            const country: CountryType | undefined =
                              countries.find((country) =>
                                country.label.includes(
                                  extractValue(
                                    details.address_components,
                                    "country"
                                  )
                                )
                              );
                            country &&
                              setValue(`${name}.country`, country, {
                                shouldValidate: true,
                              });
                            setValue(
                              `${name}.route`,
                              extractValue(details.address_components, "route"),
                              { shouldValidate: true }
                            );
                            setValue(
                              `${name}.location`,
                              {
                                lat: details.geometry.location.lat(),

                                lng: details.geometry.location.lng(),
                              },
                              { shouldValidate: true }
                            );
                            setValue(
                              `${name}.viewport`,
                              {
                                nw: {
                                  lat: details.geometry?.viewport
                                    .getNorthEast()
                                    ?.lat(),
                                  lng: details.geometry?.viewport
                                    .getSouthWest()
                                    ?.lng(),
                                },
                                se: {
                                  lat: details.geometry?.viewport
                                    .getSouthWest()
                                    ?.lat(),
                                  lng: details.geometry?.viewport
                                    .getNorthEast()
                                    ?.lng(),
                                },
                                center: details.geometry?.viewport
                                  .getCenter()
                                  ?.toJSON(),
                              },
                              { shouldValidate: true }
                            );
                          });
                      }
                    }}
                    loading={Boolean(
                      locationSearchValue && locationSearchStatus !== "OK"
                    )}
                    renderInput={(params) => (
                      <TextField
                        autoComplete="off"
                        label="Street"
                        {...params}
                      />
                    )}
                    renderOption={(props, option) => (
                      <Box
                        ref={ref}
                        component="li"
                        sx={(theme: any) => ({
                          borderRadius: `${theme?.border?.default}px`,
                          margin: "10px",
                        })}
                        {...props}
                      >
                        <List>
                          <ListItem
                            sx={{
                              padding: 0,
                            }}
                          >
                            <ListItemAvatar>
                              <Box
                                sx={(theme: any) => ({
                                  backgroundColor:
                                    theme?.vars.palette?.background?.default,
                                  border: `1px solid ${theme?.vars.palette?.background?.border}`,
                                  borderRadius: `${theme?.border?.default}px`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  maxWidth: "48px",
                                  height: "48px",
                                  fontSize: "17px",
                                })}
                              >
                                <Box
                                  component="svg"
                                  viewBox="0 0 24 24"
                                  height="48"
                                  width="48"
                                  focusable="false"
                                  role="img"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  sx={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    overflow: "hidden",
                                    width: "22px",
                                    height: "22px",
                                  }}
                                >
                                  <title>Buildings icon</title>
                                  <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path>
                                  <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path>
                                </Box>
                              </Box>
                            </ListItemAvatar>
                            <ListItemText
                              primary={option.label}
                              secondary={option.meta}
                            />
                          </ListItem>
                        </List>
                      </Box>
                    )}
                  />
                )}
              />
              {errors.street && (
                <Error
                  name={`${name}.street`}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  error={String(errors[name]?.street.message)}
                />
              )}
            </Grid>
            <Grid xs={12}>
              <Controller
                name={`${name}.subpremise`}
                control={control}
                render={({ field }) => (
                  <TextField
                    autoComplete="off"
                    label="Apt, suite, etc. (Optional)"
                    placeholder="Apt, suite, etc. (Optional)"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid xs={12}>
              <Controller
                name={`${name}.state`}
                control={control}
                render={({ field }) => (
                  <TextField
                    autoComplete="off"
                    label="State / Province / Region"
                    placeholder="State"
                    fullWidth
                    {...field}
                  />
                )}
              />
              {errors.state && (
                <Error
                  name={`${name}.state`}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  error={String(errors[name]?.state.message)}
                />
              )}
            </Grid>
            <Grid xs={6}>
              <Controller
                name={`${name}.city`}
                control={control}
                render={({ field }) => (
                  <TextField
                    autoComplete="off"
                    label="City"
                    placeholder="City"
                    fullWidth
                    {...field}
                  />
                )}
              />
              {errors.city && (
                <Error
                  name={`${name}.city`}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  error={String(errors[name].city.message)}
                />
              )}
            </Grid>
            <Grid xs={6}>
              <Controller
                name={`${name}.zip`}
                control={control}
                render={({ field }) => (
                  <TextField
                    autoComplete="off"
                    label="Zip / Postal Code"
                    placeholder="Zip code"
                    fullWidth
                    {...field}
                  />
                )}
              />
              {errors.zip && (
                <Error
                  name={`${name}.zip`}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  error={String(errors[name].zip.message)}
                />
              )}
            </Grid>
            <Grid xs={12}>
              <Controller
                name={`${name}.country`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Autocomplete
                    disablePortal
                    fullWidth
                    options={countries}
                    value={value}
                    onChange={(
                      event: any,
                      newValue: any,
                      reason: any,
                      details: any
                    ) => {
                      if (reason === "clear") {
                        setValue("country", null);
                      }
                      if (reason === "selectOption") {
                        console.log("Selected Option", newValue);
                        newValue && onChange(newValue);
                      }
                    }}
                    renderInput={(params) => (
                      <TextField
                        autoComplete="off"
                        label="Country/Region"
                        {...params}
                      />
                    )}
                  />
                )}
              />
              {errors.country && (
                <Error name="country" error={String(errors.country.message)} />
              )}
            </Grid>
            <Grid xs={12}>
              <Box
                sx={{
                  overflow: "hidden",
                  height: "100%",
                  borderRadius: "24px",
                }}
              >
                <Controller
                  name={`${name}.location`}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <PinPointInput
                      name={`${name}.location`}
                      zoom={11}
                      value={value}
                      onChange={(latLng?: any, bounds?: any) => {
                        onChange({
                          lat: latLng.lat,
                          lng: latLng.lng,
                        });
                        setValue(`${name}.viewport`, bounds);
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </span>
      </AddressRoot>
    );
  })
) as OverridableComponent<AddressTypeMap>;

export { AddressInput };
