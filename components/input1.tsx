import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type Input1Type = {
  className?: string;
  email?: string;

  /** Style props */
  emailTextDecoration?: CSSProperties["textDecoration"];
};

const Email1 = styled.a<{
  emailTextDecoration?: CSSProperties["textDecoration"];
}>`
  text-decoration: none;
  height: 22px;
  position: relative;
  color: inherit;
  display: inline-block;
  text-decoration: ${(p) => p.emailTextDecoration};
`;
const InputRoot = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-silver);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-xs);
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;

const Input1: NextPage<Input1Type> = ({
  className = "",
  email,
  emailTextDecoration,
}) => {
  return (
    <InputRoot className={className}>
      <Email1 emailTextDecoration={emailTextDecoration}>{email}</Email1>
    </InputRoot>
  );
};

export default Input1;
