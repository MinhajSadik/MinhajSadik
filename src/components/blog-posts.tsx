import { FunctionComponent, memo } from "react";
import Posts from "./Posts";
import styled from "styled-components";

export type BlogPostsType = {
  className?: string;
};

const NavigationIcon = styled.img`
  height: 489.9px;
  width: 470.7px;
  border-radius: var(--br-13xl);
  object-fit: contain;
  max-width: 100%;
`;
const BlogPostsRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: 0.63px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;

const BlogPosts: FunctionComponent<BlogPostsType> = memo(
  ({ className = "" }) => {
    return (
      <BlogPostsRoot className={className}>
        <Posts
          post="/post@2x.png"
          supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
        />
        <NavigationIcon alt="" src="/navigation@2x.png" />
        <Posts
          post="/rectangle-151-1@2x.png"
          supportingText="The Power of Infrastructure as Code with Terraform"
        />
      </BlogPostsRoot>
    );
  }
);

export default BlogPosts;
