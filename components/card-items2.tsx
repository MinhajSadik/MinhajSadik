import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

export type CardItems2Type = {
  className?: string;
  cardShapes: string;
  supportingText?: string;
};

const CardShapesIcon = styled(Image)`
  align-self: stretch;
  height: 224px;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const SupportingText = styled.div`
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const SupportingText1 = styled.i`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 24px;
`;
const CardTitlesContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const SupportingText2 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  color: var(--color-darkslategray-300);
`;
const CardItemsRoot = styled.div`
  width: 420px;
  border-radius: var(--br-13xl);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-base);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  font-family: var(--font-inter);
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-2xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const CardItems2: NextPage<CardItems2Type> = ({
  className = "",
  cardShapes,
  supportingText,
}) => {
  return (
    <CardItemsRoot className={className}>
      <CardShapesIcon
        loading="lazy"
        width={372}
        height={224}
        alt=""
        src={cardShapes}
      />
      <CardTitlesContainer>
        <SupportingText>{supportingText}</SupportingText>
        <SupportingText1>September 5, 2024</SupportingText1>
      </CardTitlesContainer>
      <SupportingText2>
        Discover how to set up and optimize CI/CD pipelines using Jenkins,
        GitLab CI, and more to boost deployment speed.
      </SupportingText2>
    </CardItemsRoot>
  );
};

export default CardItems2;