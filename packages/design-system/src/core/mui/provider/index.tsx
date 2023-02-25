/* eslint-disable @typescript-eslint/no-explicit-any */
import { CssBaseline } from "@mui/material";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme,
} from "@mui/material/styles";
import React from "react";
import { dls } from "../../theme";

export const ThemeProvider: React.FC<any> = ({
  children,
}: {
  children: any;
}) => {
  const theme_ = experimental_extendTheme(dls as any);
  return (
    <CssVarsProvider defaultMode="system" theme={theme_}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};
