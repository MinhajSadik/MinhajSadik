import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type CloudDetailsType = {
  className?: string;
  customApps?: string;
  letsBuildAnAppThatFitsYour?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  customAppsMinWidth?: CSSProperties["minWidth"];
};

const CustomApps = styled.div<{
  customAppsMinWidth?: CSSProperties["minWidth"];
}>`
  position: relative;
  display: inline-block;
  min-width: 116px;
  min-width: ${(p) => p.customAppsMinWidth};
`;
const InformationCircleIcon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const CustomAppsParent = styled.div<{
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
}>`display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  width: ${(p) => p.frameDivWidth}
  padding: ${(p) => p.frameDivPadding}
`;
const LetsBuildAn = styled.div`
  flex: 1;
  position: relative;
  color: var(--color-gray-200);
  display: inline-block;
  min-width: 248px;
  max-width: 100%;
`;
const CloudDetailsRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-4xl) var(--padding-xs)
    var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-23xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-2xl);
    flex-wrap: wrap;
  }
`;

const CloudDetails: NextPage<CloudDetailsType> = ({
  className = "",
  frameDivWidth,
  frameDivPadding,
  customApps,
  customAppsMinWidth,
  letsBuildAnAppThatFitsYour,
}) => {
  return (
    <CloudDetailsRoot className={className}>
      <CustomAppsParent
        frameDivWidth={frameDivWidth}
        frameDivPadding={frameDivPadding}
      >
        <CustomApps customAppsMinWidth={customAppsMinWidth}>
          {customApps}
        </CustomApps>
        <InformationCircleIcon
          loading="lazy"
          width={24}
          height={24}
          alt=""
          src="/informationcircle.svg"
        />
      </CustomAppsParent>
      <LetsBuildAn>{letsBuildAnAppThatFitsYour}</LetsBuildAn>
    </CloudDetailsRoot>
  );
};

export default CloudDetails;
