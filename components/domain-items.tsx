import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export type DomainItemsType = {
  className?: string;
  dipupaulai?: string;

  /** Style props */
  dipupaulaiDisplay?: CSSProperties["display"];
  dipupaulaiMinWidth?: CSSProperties["minWidth"];
};

const Dipupaulai1 = styled.h3<{
  dipupaulaiDisplay?: CSSProperties["display"];
  dipupaulaiMinWidth?: CSSProperties["minWidth"];
}>`margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
  font-size: var(--font-size-lgi);
  
  }
  display: ${(p) => p.dipupaulaiDisplay}
  min-width: ${(p) => p.dipupaulaiMinWidth}
`;
const DomainItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Yr = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Yr1 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  display: inline-block;
  min-width: 68px;
`;
const DomainPricingItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-12xs);
`;
const IconPlay = styled(Button)`
  height: 54px;
  flex: 1;
`;
const DomainDetails = styled.div`
  width: 287px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-5xl);
`;
const DomainItemsRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-white);
  border: 1px solid var(--color-whitesmoke);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-sm) 0px;
  min-height: 86px;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

const DomainItems: NextPage<DomainItemsType> = ({
  className = "",
  dipupaulai,
  dipupaulaiDisplay,
  dipupaulaiMinWidth,
}) => {
  return (
    <DomainItemsRoot className={className}>
      <DomainItem>
        <Dipupaulai1
          dipupaulaiDisplay={dipupaulaiDisplay}
          dipupaulaiMinWidth={dipupaulaiMinWidth}
        >
          {dipupaulai}
        </Dipupaulai1>
      </DomainItem>
      <DomainDetails>
        <DomainPricingItems>
          <Yr>$12.30/yr</Yr>
          <Yr1>$12.30/yr</Yr1>
        </DomainPricingItems>
        <IconPlay
          startIcon={
            <img width="24px" height="24px" src="/shoppingcart01-1.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#212121",
            fontSize: "16",
            background: "#ffda58",
            borderRadius: "8px",
            "&:hover": { background: "#ffda58" },
            height: 54,
          }}
        >
          Add to cart
        </IconPlay>
      </DomainDetails>
    </DomainItemsRoot>
  );
};

export default DomainItems;
