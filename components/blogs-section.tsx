import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Posts from "./posts";

export type BlogsSectionType = {
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
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-gray-800);
  display: inline-block;
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
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const ArrowUpLeft01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const BlogsActions = styled.div`
  width: 176px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const BlogsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 20px;
  max-width: 100%;
  gap: var(--gap-0);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const NavigationIcon = styled(Image)`
  height: 489.9px;
  width: 470.7px;
  border-radius: var(--br-13xl);
  object-fit: contain;
  max-width: 100%;
`;
const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 0.63px;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const BlogsSectionRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-35xl);
  max-width: 100%;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-8xl);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const BlogsSection: NextPage<BlogsSectionType> = ({ className = "" }) => {
  return (
    <BlogsSectionRoot className={className}>
      <BlogsContent>
        <BlogsHeader>
          <Blogs>Blogs</Blogs>
          <InsightsIndustry>{`Insights & Industry Trends`}</InsightsIndustry>
        </BlogsHeader>
        <BlogsActions>
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
            all Blogs
          </ButtonContactUs>
          <IconPlay>
            <ArrowUpLeft01Icon
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/arrowupleft01.svg"
            />
          </IconPlay>
        </BlogsActions>
      </BlogsContent>
      <BlogPosts>
        <Posts
          post="/post@2x.png"
          supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
        />
        <NavigationIcon
          width={471}
          height={490}
          alt=""
          src="/navigation@2x.png"
        />
        <Posts
          post="/rectangle-151-11@2x.png"
          supportingText="The Power of Infrastructure as Code with Terraform"
        />
      </BlogPosts>
    </BlogsSectionRoot>
  );
};

export default BlogsSection;
