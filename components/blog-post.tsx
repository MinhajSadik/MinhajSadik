import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type BlogPostType = {
  className?: string;
};

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
const BlogPostRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  row-gap: 20px;
  max-width: 100%;
  gap: var(--gap-0);
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;

const BlogPost: NextPage<BlogPostType> = ({ className = "" }) => {
  return (
    <BlogPostRoot className={className}>
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
    </BlogPostRoot>
  );
};

export default BlogPost;
