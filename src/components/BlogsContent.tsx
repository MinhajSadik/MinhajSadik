import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type BlogsContentType = {
  className?: string;
};

const Blogs = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const InsightsIndustry = styled.h1`
  margin: 0;
  width: 585px;
  height: 146px;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-gray-800);
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const BlogsHeader = styled.div`
  width: 1136px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const AllBlogs = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
`;
const ButtonContactUs = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-goldenrod-100);
  padding: var(--padding-base) var(--padding-3xl);
  background-color: var(--color-gray-100);
  height: 56px;
  flex: 1;
  border-radius: var(--br-xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-dimgray-100);
    border: 1px solid var(--color-goldenrod-200);
    box-sizing: border-box;
  }
`;
const ArrowUpLeft01Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const BlogsActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const BlogsContentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 20px;
  max-width: 100%;
  gap: var(--gap-0);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;

const BlogsContent: FunctionComponent<BlogsContentType> = memo(
  ({ className = "" }) => {
    return (
      <BlogsContentRoot className={className}>
        <BlogsHeader>
          <Blogs>Blogs</Blogs>
          <InsightsIndustry>{`Insights & Industry Trends`}</InsightsIndustry>
        </BlogsHeader>
        <BlogsActions>
          <ButtonContactUs>
            <AllBlogs>all Blogs</AllBlogs>
          </ButtonContactUs>
          <IconPlay>
            <ArrowUpLeft01Icon loading="lazy" alt="" src="/arrowupleft01.svg" />
          </IconPlay>
        </BlogsActions>
      </BlogsContentRoot>
    );
  }
);

export default BlogsContent;