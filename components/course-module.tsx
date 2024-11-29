import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type CourseModuleType = {
  className?: string;
  h3?: string;

  /** Style props */
  courseModuleBorderBottom?: CSSProperties["borderBottom"];
  h3TextDecoration?: CSSProperties["textDecoration"];
};

const ArrowDown01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const H = styled.a<{ h3TextDecoration?: CSSProperties["textDecoration"] }>`
  text-decoration: none;
  height: 19px;
  position: relative;
  text-transform: capitalize;
  color: inherit;
  display: inline-block;
  text-decoration: ${(p) => p.h3TextDecoration};
`;
const ModuleItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const H1 = styled.div`
  height: 17px;
  position: relative;
  text-transform: capitalize;
  display: inline-block;
`;
const ModuleItemDuration = styled.div`
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  font-size: var(--font-size-sm);
`;
const ModuleItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const H3Wrapper = styled.div`
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
`;
const Duration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-sm);
`;
const CourseModuleRoot = styled.div<{
  courseModuleBorderBottom?: CSSProperties["borderBottom"];
}>`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-2xs) var(--padding-5xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
  border-bottom: ${(p) => p.courseModuleBorderBottom};
`;

const CourseModule: NextPage<CourseModuleType> = ({
  className = "",
  courseModuleBorderBottom,
  h3,
  h3TextDecoration,
}) => {
  return (
    <CourseModuleRoot
      courseModuleBorderBottom={courseModuleBorderBottom}
      className={className}
    >
      <ModuleItemContent>
        <ModuleItemHeader>
          <ArrowDown01Icon
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/arrowdown01.svg"
          />
          <H h3TextDecoration={h3TextDecoration}>{h3}</H>
        </ModuleItemHeader>
        <ModuleItemDuration>
          <H1>9lac</H1>
        </ModuleItemDuration>
      </ModuleItemContent>
      <Duration>
        <H3Wrapper>
          <H1>9lac</H1>
        </H3Wrapper>
        <H3Wrapper>
          <H1>1hr</H1>
        </H3Wrapper>
      </Duration>
    </CourseModuleRoot>
  );
};

export default CourseModule;
