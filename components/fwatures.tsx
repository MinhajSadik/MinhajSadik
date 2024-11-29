import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type FwaturesType = {
  className?: string;
  checkmarkCircle02: string;
  sharedBandwidth?: string;

  /** Style props */
  checkmarkCircle02IconMargin?: CSSProperties["margin"];
  sharedBandwidthWidth?: CSSProperties["width"];
  sharedBandwidthDisplay?: CSSProperties["display"];
  sharedBandwidthHeight?: CSSProperties["height"];
  sharedBandwidthColor?: CSSProperties["color"];
};

const CheckmarkCircle02Icon = styled(Image)<{
  checkmarkCircle02IconMargin?: CSSProperties["margin"];
}>`
  height: 24px;
  width: 24px;
  position: relative;
  margin: ${(p) => p.checkmarkCircle02IconMargin};
`;
const SharedBandwidth = styled.div<{
  sharedBandwidthWidth?: CSSProperties["width"];
  sharedBandwidthDisplay?: CSSProperties["display"];
  sharedBandwidthHeight?: CSSProperties["height"];
  sharedBandwidthColor?: CSSProperties["color"];
}>`position: relative;
  line-height: 22px;
  width: ${(p) => p.sharedBandwidthWidth}
  display: ${(p) => p.sharedBandwidthDisplay}
  height: ${(p) => p.sharedBandwidthHeight}
  color: ${(p) => p.sharedBandwidthColor}
`;
const FwaturesRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  font-family: var(--font-inter);
`;

const Fwatures: NextPage<FwaturesType> = ({
  className = "",
  checkmarkCircle02,
  checkmarkCircle02IconMargin,
  sharedBandwidth,
  sharedBandwidthWidth,
  sharedBandwidthDisplay,
  sharedBandwidthHeight,
  sharedBandwidthColor,
}) => {
  return (
    <FwaturesRoot className={className}>
      <CheckmarkCircle02Icon
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src={checkmarkCircle02}
        checkmarkCircle02IconMargin={checkmarkCircle02IconMargin}
      />
      <SharedBandwidth
        sharedBandwidthWidth={sharedBandwidthWidth}
        sharedBandwidthDisplay={sharedBandwidthDisplay}
        sharedBandwidthHeight={sharedBandwidthHeight}
        sharedBandwidthColor={sharedBandwidthColor}
      >
        {sharedBandwidth}
      </SharedBandwidth>
    </FwaturesRoot>
  );
};

export default Fwatures;
