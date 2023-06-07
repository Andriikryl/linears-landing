import classNames from "classnames";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto", className)}>
      {children}
    </div>
  );
};
