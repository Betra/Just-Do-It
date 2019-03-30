import React, { FunctionComponent } from "react";

export interface Props {
  active?: boolean;
  children: string;
  onClick: any;
}

export const InterfaceLink: FunctionComponent<Props> = ({
  active = false,
  children,
  onClick
}) => {
  if (active) return <span>{children}</span>;
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(onClick);
      }}
    >
      {children}
    </a>
  );
};
