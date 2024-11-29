import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type CourseItemType = {
  className?: string;
  courses?: string;

  /** Style props */
  coursesDisplay?: CSSProperties["display"];
  coursesMinWidth?: CSSProperties["minWidth"];
};

const Courses1 = styled.h1<{
  coursesDisplay?: CSSProperties["display"];
  coursesMinWidth?: CSSProperties["minWidth"];
}>`margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
  font-size: var(--font-size-15xl);
  
  }
  @media screen and (max-width: 450px) {
  font-size: var(--font-size-6xl);
  
  }
  display: ${(p) => p.coursesDisplay}
  min-width: ${(p) => p.coursesMinWidth}
`;
const CourseName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) 0px 0px;
`;
const Devops = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 68px;
`;
const CourseType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const ArrowDown01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const CourseDetails = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-5xl);
  gap: var(--gap-3xs);
  font-size: var(--font-size-lg);
`;
const CourseItemRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-23xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const CourseItem: NextPage<CourseItemType> = ({
  className = "",
  courses,
  coursesDisplay,
  coursesMinWidth,
}) => {
  return (
    <CourseItemRoot className={className}>
      <CourseName>
        <Courses1
          coursesDisplay={coursesDisplay}
          coursesMinWidth={coursesMinWidth}
        >
          {courses}
        </Courses1>
      </CourseName>
      <CourseDetails>
        <CourseType>
          <Devops>DevOps</Devops>
        </CourseType>
        <ArrowDown01Icon width={24} height={24} alt="" src="/arrowdown01.svg" />
      </CourseDetails>
    </CourseItemRoot>
  );
};

export default CourseItem;
