'use client';

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { JssProvider, ThemeProvider, SheetsRegistry, createGenerateId } from "react-jss";
import { theme } from "../theme/theme";

export default function JssRegistryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheets] = useState(() => new SheetsRegistry());
  const [generateId] = useState(() => createGenerateId());

  useServerInsertedHTML(() => {
    const styles = sheets.toString();
    return (
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <JssProvider registry={sheets} generateId={generateId}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </JssProvider>
  );
}
