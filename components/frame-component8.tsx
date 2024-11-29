import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Footer from "./footer";

export type FrameComponent8Type = {
  className?: string;
};

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
const HostingFeaturesFor = styled.span``;
const HandsOn = styled.span`
  color: var(--color-gray-100);
`;
const HostingFeaturesForContainer = styled.h1`
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
const Question = styled.div`
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
const QuestionItem = styled.div`
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
const QuestionItem1 = styled(TextField)`
  border: none;
  background-color: transparent;
  width: 650px;
  font-family: var(--font-inter);
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
`;
const WhatKindOf1 = styled.div`
  height: 22px;
  width: 339px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const Frame1000011858Open1 = styled.div`
  width: 650px;
  height: 54px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-mini);
  box-sizing: border-box;
  cursor: pointer;
`;
const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  font-size: var(--font-size-lg);
`;
const Questions = styled.div`
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
const FAQContent = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;
  border-radius: var(--br-sm) var(--br-sm) 0px 0px;
  background-color: var(--color-whitesmoke);
  width: 1447px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-62xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FAQContentParentRoot = styled.section`
  align-self: stretch;
  height: 952.2px;
  position: relative;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1200px) {
    height: auto;
    min-height: 952.2;
  }
`;

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
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
    <FAQContentParentRoot className={className}>
      <FAQContent>
        <Questions>
          <Question>
            <Faq>FAQ</Faq>
            <HostingFeaturesForContainer>
              <HostingFeaturesFor>{`Hosting Features for `}</HostingFeaturesFor>
              <HandsOn>Hands-On</HandsOn>
              <HostingFeaturesFor> Learning</HostingFeaturesFor>
            </HostingFeaturesForContainer>
          </Question>
          <QuestionList data-acc-group>
            <QuestionItem
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <WhatKindOf>What kind of support is provided?</WhatKindOf>
              <PlusSignIcon width={24} height={24} alt="" src="/plussign.svg" />
            </QuestionItem>
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
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionContentWrap>
              </AccordionContent1>
            </AccordionItemMock>
            <QuestionItem
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <AreThereLimitations>
                Are there limitations on usage?
              </AreThereLimitations>
              <PlusSignIcon width={24} height={24} alt="" src="/plussign.svg" />
            </QuestionItem>
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
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionContentWrap>
              </AccordionContent1>
            </AccordionItemMock>
            <QuestionItem1
              placeholder="Is this hosting safe for my experiments?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/plussign-2.svg" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                  paddingRight: "15px",
                  borderRadius: "12px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#212121" },
                width: "650px",
              }}
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            />
            <AccordionItemMock data-acc-item data-acc-open>
              <Frame1000011858Open1
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <WhatKindOf1>What kind of support is provided?</WhatKindOf1>
                <PlusSignIcon
                  width={24}
                  height={24}
                  alt=""
                  src="/plussign.svg"
                />
                <AccordionContent />
              </Frame1000011858Open1>
              <AccordionContent1 data-acc-content>
                <AccordionContentWrap>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionContentWrap>
              </AccordionContent1>
            </AccordionItemMock>
          </QuestionList>
        </Questions>
      </FAQContent>
      <Footer
        footerAlignSelf="unset"
        footerPosition="absolute"
        footerTop="527px"
        footerLeft="0px"
        menuItemsOverflowX="unset"
        menuItemsRowGap="20px"
        navigationItemsFlex="1"
        navigationItemsMinWidth="64px"
        servicesTextDecoration="none"
        navigationItemsFlex1="1"
        navigationItemsMinWidth1="64px"
        coursesDisplay="unset"
        coursesMinWidth="unset"
        navigationItemsFlex2="1"
        navigationItemsMinWidth2="59px"
        hostingDisplay="unset"
        hostingMinWidth="unset"
        hostingTextDecoration="none"
        footerPadding="0px 32px"
      />
    </FAQContentParentRoot>
  );
};

export default FrameComponent8;