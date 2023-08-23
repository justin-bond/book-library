import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

import Container from "@/components/molecules/Container";

import "./Layout.scss";

interface LayoutProps {
  title?: string;
  breadcrumbs?: boolean | { url?: string; label: string }[];
  noBackground?: boolean;
  children: ReactNode;
}

const Layout = ({
  title,
  breadcrumbs,
  noBackground,
  children,
}: LayoutProps) => {
  return (
    <div className={clsx("layout", { background: !noBackground })}>
      {(title || breadcrumbs) && (
        <Container>
          <div className="layout__header">
            {title && (
              <div className="layout__title">
                <h1>{title}</h1>
              </div>
            )}
            {breadcrumbs && (
              <div className="layout__breadcrumbs">
                <div className="layout__breadcrumb">
                  <Link href={"/"}>Library</Link>
                </div>
                {Array.isArray(breadcrumbs) &&
                  breadcrumbs.map((breadcrumb) => {
                    return (
                      <div
                        className="layout__breadcrumb"
                        key={breadcrumb.label}
                      >
                        {breadcrumb.label}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </Container>
      )}
      <div className="layout__content">
        <div className="layout__content-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
