import type { NextPage } from "next";
import Image from "next/image";
import CardItems from "./card-items";
import styled from "styled-components";

export type BlogCardsType = {
  className?: string;
};

const EmptyCardIcon = styled(Image)`
  height: 489.9px;
  width: 470.7px;
  border-radius: var(--br-13xl);
  object-fit: contain;
  max-width: 100%;
`;
const BlogCardsRoot = styled.div`
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

const BlogCards: NextPage<BlogCardsType> = ({ className = "" }) => {
  return (
    <BlogCardsRoot className={className}>
      <CardItems
        cardImage="/rectangle-151@2x.png"
        supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
      />
      <EmptyCardIcon
        loading="lazy"
        width={471}
        height={490}
        alt=""
        src="/frame-1000011753@2x.png"
      />
      <CardItems
        cardImage="/rectangle-151-1@2x.png"
        supportingText="The Power of Infrastructure as Code with Terraform"
      />
    </BlogCardsRoot>
  );
};

export default BlogCards;
