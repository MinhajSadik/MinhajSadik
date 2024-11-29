import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type TestimonialRowType = {
  className?: string;
  supportingText?: string;

  /** Style props */
  testimonialRowBorderTop?: CSSProperties["borderTop"];
  testimonialRowBorderBottom?: CSSProperties["borderBottom"];
  testimonialRowFlex?: CSSProperties["flex"];
};

const CompanyLogoIcon = styled(Image)`
  height: 70px;
  width: 70px;
  position: relative;
`;
const TestimonialItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const SupportingText = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const TestimonialTypes = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xs);
`;
const StartByUnderstanding = styled.span``;
const More = styled.span`
  font-weight: 500;
  color: var(--greyscale-500);
`;
const SupportingText1 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  color: var(--color-darkslategray-300);
`;
const TestimonialRowRoot = styled.div<{
  testimonialRowBorderTop?: CSSProperties["borderTop"];
  testimonialRowBorderBottom?: CSSProperties["borderBottom"];
  testimonialRowFlex?: CSSProperties["flex"];
}>`flex: 0.9796;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke);
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-43xl) var(--padding-55xl) var(--padding-127xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  font-family: var(--font-inter);
  @media screen and (max-width: 450px) {
  padding: var(--padding-21xl) var(--padding-xl) var(--padding-76xl);
  box-sizing: border-box;
  flex: 1;
  
  }
  border-top: ${(p) => p.testimonialRowBorderTop}
  border-bottom: ${(p) => p.testimonialRowBorderBottom}
  flex: ${(p) => p.testimonialRowFlex}
`;

const TestimonialRow: NextPage<TestimonialRowType> = ({
  className = "",
  testimonialRowBorderTop,
  testimonialRowBorderBottom,
  testimonialRowFlex,
  supportingText,
}) => {
  return (
    <TestimonialRowRoot
      testimonialRowBorderTop={testimonialRowBorderTop}
      testimonialRowBorderBottom={testimonialRowBorderBottom}
      testimonialRowFlex={testimonialRowFlex}
      className={className}
    >
      <TestimonialItems>
        <CompanyLogoIcon
          loading="lazy"
          width={70}
          height={70}
          alt=""
          src="/company-logo.svg"
        />
      </TestimonialItems>
      <TestimonialTypes>
        <SupportingText>{supportingText}</SupportingText>
      </TestimonialTypes>
      <SupportingText1>
        <StartByUnderstanding>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</StartByUnderstanding>
        <More>More</More>
      </SupportingText1>
    </TestimonialRowRoot>
  );
};

export default TestimonialRow;
