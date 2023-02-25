/* eslint-disable react/display-name */
import { Box } from "@mui/system";
import React from "react";
import { ArrowButton } from "./styles";

export const Previous: React.FC<any> = React.memo(({ ...props }) => {
  return (
    <ArrowButton {...props}>
      <Box
        component="svg"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        sx={(theme: any) => ({
          display: "block",
          fill: "none",
          height: "12px",
          width: "12px",
          stroke: "currentcolor",
          strokeWidth: 4,
          overflow: "visible",
          color: theme?.vars.palette.text?.primary,
        })}
      >
        <g fill="none">
          <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
        </g>
      </Box>
    </ArrowButton>
  );
});

export const Next: React.FC<any> = React.memo(({ ...props }) => {
  return (
    <ArrowButton {...props}>
      <Box
        component="svg"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        sx={(theme: any) => ({
          display: "block",
          fill: "none",
          height: "12px",
          width: "12px",
          stroke: "currentcolor",
          strokeWidth: 4,
          overflow: "visible",
          color: theme?.vars.palette.text?.primary,
        })}
      >
        <g fill="none">
          <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
        </g>
      </Box>
    </ArrowButton>
  );
});
