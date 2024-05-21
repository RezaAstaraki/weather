"use client";

import React, { ReactNode } from "react";
import { dayOrNightTheme } from "../convertors";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        background: dayOrNightTheme(),
      }}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
