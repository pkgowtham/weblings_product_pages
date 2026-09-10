'use client';

import React from "react";
import { usePathname } from "next/navigation";

/**
 * Product routes (Mail to Worksuite) from landing.tsx productsList:
 * - Mail: /mail/*
 * - Calender: /calender/*
 * - Connect: /connect/*
 * - Streamline: /streamline/*
 * - Eoffice: /eoffice/*
 * - Drive: /drive/*
 * - Worksuite: /workSuite/*
 */
const PRODUCT_ROUTES = [
  "/mail",
  "/calender",
  "/connect",
  "/streamline",
  "/eoffice",
  "/drive",
  "/workSuite",
];

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isProductPage = PRODUCT_ROUTES.some((route) => {
    const lowerPath = pathname?.toLowerCase() || "";
    const lowerRoute = route.toLowerCase();
    return lowerPath === lowerRoute || lowerPath.startsWith(`${lowerRoute}/`);
  });

  return (
    <main style={{ paddingTop: isProductPage ? "80px" : undefined }}>
      {children}
    </main>
  );
}
