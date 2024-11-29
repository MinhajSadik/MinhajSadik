import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type CardItems1Type = {
  className?: string;
  group469393: string;
  h3?: string;
  peragraph1?: string;

  /** Style props */
  cardItemsWidth?: CSSProperties["width"];
  groupIconBorderRadius?: CSSProperties["borderRadius"];
  h3Height?: CSSProperties["height"];
  h3Display?: CSSProperties["display"];
};

const CardItemsChild = styled(Image)<{
  groupIconBorderRadius?: CSSProperties["borderRadius"];
}>`
  align-self: stretch;
  height: 368px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: ${(p) => p.groupIconBorderRadius};
`;
const H = styled.h3<{
  h3Height?: CSSProperties["height"];
  h3Display?: CSSProperties["display"];
}>`margin: 0;
  position: relative;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 450px) {
  font-size: var(--font-size-lgi);
  
  }
  height: ${(p) => p.h3Height}
  display: ${(p) => p.h3Display}
`;
const Peragraph = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 24px;
  color: var(--greyscale-400);
`;
const Texts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const CardItemsRoot = styled.div<{ cardItemsWidth?: CSSProperties["width"] }>`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  min-width: 399px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
  width: ${(p) => p.cardItemsWidth};
`;

const CardItems1: NextPage<CardItems1Type> = ({
  className = "",
  cardItemsWidth,
  group469393,
  groupIconBorderRadius,
  h3,
  h3Height,
  h3Display,
  peragraph1,
}) => {
  return (
    <CardItemsRoot cardItemsWidth={cardItemsWidth} className={className}>
      <CardItemsChild
        loading="lazy"
        width={420}
        height={368}
        alt=""
        src={group469393}
        groupIconBorderRadius={groupIconBorderRadius}
      />
      <Texts>
        <H h3Height={h3Height} h3Display={h3Display}>
          {h3}
        </H>
        <Peragraph>{peragraph1}</Peragraph>
      </Texts>
    </CardItemsRoot>
  );
};

export default CardItems1;
