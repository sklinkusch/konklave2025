"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
import { themeOptions } from "@assets/theme/theme";

const theme = createTheme(themeOptions);

export default function MuiProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
