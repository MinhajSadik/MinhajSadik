import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import styled from "styled-components";
import TestimonialRow from "./testimonial-row";

export type FeaturesContentType = {
  className?: string;
};

const DomainFeatures = styled.h3`
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
const Why = styled.span``;
const Choose = styled.span`
  color: var(--color-gray-100);
`;
const WhyChooseUsContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-gray-500);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const FeaturesTitleContainer = styled.div`
  width: 862px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const Hosting1 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--color-goldenrod);
  text-align: right;
`;
const NavigationItems = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  background-color: var(--color-gray-100);
  flex: 1;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  &:hover {
    background-color: var(--color-dimgray-100);
  }
`;
const Domain1 = styled.div`
  align-self: stretch;
  position: relative;
  display: inline-block;
  min-width: 59px;
`;
const DomainNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
`;
const BottomNavigationBar = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-base) var(--padding-9xs) 0px;
  gap: var(--gap-base);
  z-index: 1;
`;
const CompanyLogoIcon = styled(Image)`
  height: 70px;
  width: 70px;
  position: relative;
`;
const CompanyLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-38xl) 0px var(--padding-37xl);
`;
const BottomNavigationBarParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
`;
const GridRowOneInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-33xl) 0px var(--padding-34xl);
  text-align: right;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const SupportingText = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const SupportingTextWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-37xl);
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const More = styled.span`
  font-weight: 500;
  color: var(--greyscale-500);
`;
const SupportingText1 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  color: var(--color-darkslategray-300);
`;
const GridRowOne = styled.div`
  flex: 1;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke);
  border-bottom: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-55xl) var(--padding-124xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: var(--padding-xl) var(--padding-xl) var(--padding-74xl);
    box-sizing: border-box;
  }
`;
const Faq = styled.h3`
  margin: 0;
  width: 47px;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FaqTitleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;
const WhatKindOf = styled.div`
  height: 22px;
  width: 288px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const PlusSignIcon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const FaqItems = styled.div`
  width: 650px;
  height: 54px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-mini);
  box-sizing: border-box;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
`;
const AccordionContent = styled.div`
  position: relative;
  color: transparent;
  display: none;
`;
const Frame1000011858Open = styled.div`
  width: 650px;
  height: 54px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-mini);
  box-sizing: border-box;
  cursor: pointer;
`;
const AccordionContentWrap = styled.div`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  overflow: hidden;
`;
const AccordionContent1 = styled.div`
  width: 650px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: grid;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-mini);
  box-sizing: border-box;
  cursor: default;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &.accordion__open {
    grid-template-rows: 1fr;
  }
  &.accordion__close {
    grid-template-rows: 0fr;
  }
`;
const AccordionItemMock = styled.div`
  width: 650px;
  display: none;
  flex-direction: column;
`;
const AreThereLimitations = styled.div`
  height: 22px;
  width: 264px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const IsThisHosting = styled.div`
  height: 22px;
  width: 339px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  font-size: var(--font-size-lg);
`;
const FaqContent = styled.div`
  width: 917px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-8xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FaqContentWrapper = styled.div`
  width: 1447px;
  margin: 0 !important;
  position: absolute;
  bottom: -458px;
  left: -70px;
  border-radius: var(--br-sm) var(--br-sm) 0px 0px;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-62xl) 0px;
  box-sizing: border-box;
  z-index: 1;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const GridContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  gap: var(--gap-0);
  max-width: 100%;
  row-gap: 20px;
`;
const FeaturesGrid = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const FeaturesContentRoot = styled.div`
  width: 1324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-65xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-23xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-2xl);
  }
`;

const FeaturesContent: NextPage<FeaturesContentType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <FeaturesContentRoot className={className}>
      <FeaturesTitleContainer>
        <DomainFeatures>Domain Features</DomainFeatures>
        <WhyChooseUsContainer>
          <Why>{`Why `}</Why>
          <Choose>Choose</Choose>
          <Why>{` Us for Your `}</Why>
          <Choose>Domain</Choose>
          <Why> Needs?</Why>
        </WhyChooseUsContainer>
      </FeaturesTitleContainer>
      <FeaturesGrid>
        <GridContent>
          <TestimonialRow
            testimonialRowBorderTop="1px solid rgba(33, 33, 33, 0.2)"
            testimonialRowBorderBottom="unset"
            testimonialRowFlex="1"
            supportingText="Wide Range of Domains"
          />
          <GridRowOne>
            <GridRowOneInner>
              <BottomNavigationBarParent>
                <BottomNavigationBar>
                  <NavigationItems>
                    <Hosting1>Hosting</Hosting1>
                  </NavigationItems>
                  <DomainNavigationContainer>
                    <Domain1>Domain</Domain1>
                  </DomainNavigationContainer>
                </BottomNavigationBar>
                <CompanyLogoContainer>
                  <CompanyLogoIcon
                    width={70}
                    height={70}
                    alt=""
                    src="/company-logo.svg"
                  />
                </CompanyLogoContainer>
              </BottomNavigationBarParent>
            </GridRowOneInner>
            <SupportingTextWrapper>
              <SupportingText>Affordable Pricing</SupportingText>
            </SupportingTextWrapper>
            <SupportingText1>
              <Why>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</Why>
              <More>More</More>
            </SupportingText1>
          </GridRowOne>
          <TestimonialRow
            testimonialRowBorderTop="1px solid rgba(33, 33, 33, 0.2)"
            testimonialRowBorderBottom="unset"
            testimonialRowFlex="1"
            supportingText="Easy Registration"
          />
          <FaqContentWrapper>
            <FaqContent>
              <FaqTitleContainer>
                <Faq>FAQ</Faq>
                <WhyChooseUsContainer>
                  <Why>{`Hosting Features for `}</Why>
                  <Choose>Hands-On</Choose>
                  <Why> Learning</Why>
                </WhyChooseUsContainer>
              </FaqTitleContainer>
              <FaqList data-acc-group>
                <FaqItems
                  data-acc-item
                  data-acc-header
                  data-acc-original
                  onClick={onAccordionHeaderClick}
                >
                  <WhatKindOf>What kind of support is provided?</WhatKindOf>
                  <PlusSignIcon
                    width={24}
                    height={24}
                    alt=""
                    src="/plussign.svg"
                  />
                </FaqItems>
                <AccordionItemMock data-acc-item data-acc-open>
                  <Frame1000011858Open
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <WhatKindOf>What kind of support is provided?</WhatKindOf>
                    <PlusSignIcon
                      width={24}
                      height={24}
                      alt=""
                      src="/plussign.svg"
                    />
                    <AccordionContent />
                  </Frame1000011858Open>
                  <AccordionContent1 data-acc-content>
                    <AccordionContentWrap>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionContentWrap>
                  </AccordionContent1>
                </AccordionItemMock>
                <FaqItems
                  data-acc-item
                  data-acc-header
                  data-acc-original
                  onClick={onAccordionHeaderClick}
                >
                  <AreThereLimitations>
                    Are there limitations on usage?
                  </AreThereLimitations>
                  <PlusSignIcon
                    width={24}
                    height={24}
                    alt=""
                    src="/plussign.svg"
                  />
                </FaqItems>
                <AccordionItemMock data-acc-item data-acc-open>
                  <Frame1000011858Open
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <AreThereLimitations>
                      Are there limitations on usage?
                    </AreThereLimitations>
                    <PlusSignIcon
                      width={24}
                      height={24}
                      alt=""
                      src="/plussign.svg"
                    />
                    <AccordionContent />
                  </Frame1000011858Open>
                  <AccordionContent1 data-acc-content>
                    <AccordionContentWrap>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionContentWrap>
                  </AccordionContent1>
                </AccordionItemMock>
                <FaqItems
                  data-acc-item
                  data-acc-header
                  data-acc-original
                  onClick={onAccordionHeaderClick}
                >
                  <IsThisHosting>
                    Is this hosting safe for my experiments?
                  </IsThisHosting>
                  <PlusSignIcon
                    width={24}
                    height={24}
                    alt=""
                    src="/plussign.svg"
                  />
                </FaqItems>
                <AccordionItemMock data-acc-item data-acc-open>
                  <Frame1000011858Open
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <IsThisHosting>
                      Is this hosting safe for my experiments?
                    </IsThisHosting>
                    <PlusSignIcon
                      width={24}
                      height={24}
                      alt=""
                      src="/plussign.svg"
                    />
                    <AccordionContent />
                  </Frame1000011858Open>
                  <AccordionContent1 data-acc-content>
                    <AccordionContentWrap>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionContentWrap>
                  </AccordionContent1>
                </AccordionItemMock>
              </FaqList>
            </FaqContent>
          </FaqContentWrapper>
        </GridContent>
      </FeaturesGrid>
    </FeaturesContentRoot>
  );
};

export default FeaturesContent;
