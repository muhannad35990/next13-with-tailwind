"use client";
import Link from "next/link";
import React, { ReactElement, FC } from "react";
interface ButtonProps {
  text: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string;
  afterIcon?: JSX.Element;
  beforeIcon?: JSX.Element;
  target?: string;
}
const Button: FC<ButtonProps> = ({
  text,
  onClick,
  link,
  afterIcon,
  beforeIcon,
  target,
}: ButtonProps): ReactElement => {
  return link ? (
    <div className="action__btn">
      {beforeIcon && beforeIcon}
      <Link
        href={link}
        target={target ?? ""}
        className={`rounded border border-primary bg-primary px-4 py-2 text-xl font-bold text-white duration-300 ease-in-out hover:bg-white hover:text-primary`}
      >
        {text}
      </Link>
      {afterIcon && afterIcon}
    </div>
  ) : (
    <button
      className={`rounded border border-primary bg-primary px-4 py-2 text-xl font-bold text-white duration-300 ease-in-out hover:bg-white hover:text-primary`}
      onClick={onClick}
    >
      {beforeIcon && beforeIcon}
      {text}
      {afterIcon && afterIcon}
    </button>
  );
};

export default Button;
