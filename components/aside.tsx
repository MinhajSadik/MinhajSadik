import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Posts from "./posts";

export type AsideType = {
  className?: string;
};

const ListDivider = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  max-width: 100%;
`;
const ListDividerWrapper = styled.div`
  align-self: stretch;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xl) 0px var(--padding-12xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const OtherBlogs = styled.h1`
  margin: 0;
  width: 585px;
  position: relative;
  font-size: inherit;
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const PostTitle = styled.div`
  width: 1136px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
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
const PostLink = styled.div`
  width: 176px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const BlogPost = styled.div`
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
const EmptyCardIcon = styled(Image)`
  height: 489.9px;
  width: 470.7px;
  border-radius: var(--br-13xl);
  object-fit: contain;
  max-width: 100%;
`;
const BlogCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 0.63px;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const BlogsSection1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-35xl);
  max-width: 100%;
  margin-top: -1px;
  @media screen and (max-width: 850px) {
    gap: var(--gap-8xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const AsideRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-800);
  font-family: var(--font-inter);
`;

const Aside: NextPage<AsideType> = ({ className = "" }) => {
  return (
    <AsideRoot className={className}>
      <ListDividerWrapper>
        <ListDivider />
      </ListDividerWrapper>
      <BlogsSection1>
        <BlogPost>
          <PostTitle>
            <OtherBlogs>Other Blogs</OtherBlogs>
          </PostTitle>
          <PostLink>
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
          </PostLink>
        </BlogPost>
        <BlogCards>
          <Posts
            post="/rectangle-151@2x.png"
            supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
          />
          <EmptyCardIcon
            loading="lazy"
            width={471}
            height={490}
            alt=""
            src="/frame-1000011753@2x.png"
          />
          <Posts
            post="/rectangle-151-1@2x.png"
            supportingText="The Power of Infrastructure as Code with Terraform"
          />
        </BlogCards>
      </BlogsSection1>
    </AsideRoot>
  );
};

export default Aside;
