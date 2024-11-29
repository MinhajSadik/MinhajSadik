import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponent11Type = {
  className?: string;
  learnGrowAndEarnCertificates?: string;
  boostYourSkillsWithEngaging?: string;
  rectangle158: string;
  rectangle159: string;

  /** Style props */
  learnGrowAndHeight?: CSSProperties["height"];
  learnGrowAndDisplay?: CSSProperties["display"];
};

const LearnGrowAnd = styled.h1<{
  learnGrowAndHeight?: CSSProperties["height"];
  learnGrowAndDisplay?: CSSProperties["display"];
}>`margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
  font-size: var(--font-size-29xl);
  
  }
  @media screen and (max-width: 450px) {
  font-size: var(--font-size-17xl);
  
  }
  height: ${(p) => p.learnGrowAndHeight}
  display: ${(p) => p.learnGrowAndDisplay}
`;
const BoostYourSkills = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const HeroSubtitle = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const ActionImageIcon = styled(Image)`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const HeroAction = styled.div`
  width: 193px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 488px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
`;
const ShapeDividerChild = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-481xl);
  object-fit: cover;
`;
const ShapeDividerItem = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
`;
const ShapeDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const HeroContentParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-42xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
  }
`;
const NavigationInnerRoot = styled.div`
  width: 1433.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
`;

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
  learnGrowAndEarnCertificates,
  learnGrowAndHeight,
  learnGrowAndDisplay,
  boostYourSkillsWithEngaging,
  rectangle158,
  rectangle159,
}) => {
  return (
    <NavigationInnerRoot className={className}>
      <HeroContentParent>
        <HeroContent>
          <LearnGrowAnd
            learnGrowAndHeight={learnGrowAndHeight}
            learnGrowAndDisplay={learnGrowAndDisplay}
          >
            {learnGrowAndEarnCertificates}
          </LearnGrowAnd>
          <HeroSubtitle>
            <BoostYourSkills>{boostYourSkillsWithEngaging}</BoostYourSkills>
          </HeroSubtitle>
          <HeroAction>
            <ButtonContactUs
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#212121",
                border: "#ffda58 solid 1px",
                borderRadius: "12px",
                "&:hover": { background: "#212121" },
                height: 56,
              }}
            >
              Enroll Now
            </ButtonContactUs>
            <IconPlay>
              <ActionImageIcon
                loading="lazy"
                width={14}
                height={15}
                alt=""
                src="/vector-1.svg"
              />
            </IconPlay>
          </HeroAction>
        </HeroContent>
        <ShapeDivider>
          <ShapeDividerChild
            loading="lazy"
            width={264}
            height={263}
            alt=""
            src={rectangle158}
          />
          <ShapeDividerItem
            loading="lazy"
            width={264}
            height={263}
            alt=""
            src={rectangle159}
          />
        </ShapeDivider>
      </HeroContentParent>
    </NavigationInnerRoot>
  );
};

export default FrameComponent11;
