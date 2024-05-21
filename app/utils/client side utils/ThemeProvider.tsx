"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { dayOrNightTheme } from "../convertors";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(dayOrNightTheme());
  });
  return (
    <div
      style={{
        background: theme,
      }}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
