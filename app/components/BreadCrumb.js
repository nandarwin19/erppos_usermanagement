"use client";

import React from "react";
import Link from "next/link";

import { routesData } from "../utils/data";
import { useRouter } from "next/router";

const BreadCrumb = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const breadcrumb = routesData
    .filter((route) => pathname.startsWith(route.path))
    .map((route, index) => {
      const isLast = index === routesData.length - 1;
      return (
        <React.Fragment key={route.path}>
          {!isLast && (
            <>
              <Link href={route.path}>
                <a>{route.label}</a>
              </Link>
              <span>/</span>
            </>
          )}
          {isLast && <span>{route.label}</span>}
        </React.Fragment>
      );
    });

  return <div>{breadcrumb}</div>;
};

export default BreadCrumb;
