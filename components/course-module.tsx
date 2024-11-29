import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type CourseModuleType = {
  className?: string;
  aroowUp: string;
  h3?: string;
  showModuleDurationHeader?: boolean;
  h31?: string;
  h32?: string;

  /** Style props */
  courseModuleBorderBottom?: CSSProperties["borderBottom"];
  h3TextDecoration?: CSSProperties["textDecoration"];
  h3TextDecoration1?: CSSProperties["textDecoration"];
  h3Color?: CSSProperties["color"];
  h3Width?: CSSProperties["width"];
};

const AroowUpIcon = styled(Image)`
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
const ModuleHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const H1 = styled.a<{
  h3TextDecoration1?: CSSProperties["textDecoration"];
  h3Color?: CSSProperties["color"];
  h3Width?: CSSProperties["width"];
}>`text-decoration: none;
  height: 17px;
  position: relative;
  text-transform: capitalize;
  color: inherit;
  display: inline-block;
  text-decoration: ${(p) => p.h3TextDecoration1}
  color: ${(p) => p.h3Color}
  width: ${(p) => p.h3Width}
`;
const ModuleDurationHeader = styled.div`
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-300);
`;
const ModuleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs);
`;
const H2 = styled.div`
  height: 17px;
  position: relative;
  text-transform: capitalize;
  display: inline-block;
`;
const DurationHourContainers = styled.div`
  background-color: var(--color-whitesmoke-100);
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
  border-bottom: 1px solid var(--color-gray-700);
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
  aroowUp,
  h3,
  h3TextDecoration,
  showModuleDurationHeader,
  h31,
  h3TextDecoration1,
  h3Color,
  h3Width,
  h32,
}) => {
  return (
    <CourseModuleRoot
      courseModuleBorderBottom={courseModuleBorderBottom}
      className={className}
    >
      <ModuleContent>
        <ModuleHeader>
          <AroowUpIcon
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={aroowUp}
          />
          <H h3TextDecoration={h3TextDecoration}>{h3}</H>
        </ModuleHeader>
        {showModuleDurationHeader && (
          <ModuleDurationHeader>
            <H1
              h3TextDecoration1={h3TextDecoration1}
              h3Color={h3Color}
              h3Width={h3Width}
            >
              {h31}
            </H1>
          </ModuleDurationHeader>
        )}
      </ModuleContent>
      <Duration>
        <DurationHourContainers>
          <H2>{h32}</H2>
        </DurationHourContainers>
        <DurationHourContainers>
          <H2>1hr</H2>
        </DurationHourContainers>
      </Duration>
    </CourseModuleRoot>
  );
};

export default CourseModule;
