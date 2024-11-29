import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import styled from "styled-components";

export type FrameComponent9Type = {
  className?: string;
};

const FindYourPerfect = styled.span``;
const Domain1 = styled.span`
  color: var(--color-gray-100);
`;
const FindYourPerfectContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const SecureTheRight = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const DomainDescription = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
`;
const SearchInput = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  font-family: var(--font-archivo);
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  min-width: 300px;
  max-width: 100%;
`;
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const SearchIcon = styled(Image)`
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
const SearchButtonContainer = styled.div`
  width: 162px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const SearchInputParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FindYourPerfectDomainNameParent = styled.div`
  width: 751px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-35xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-11xl);
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
    padding-top: var(--padding-16xl);
    padding-bottom: var(--padding-16xl);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const DomainInnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
`;

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  return (
    <DomainInnerRoot className={className}>
      <FrameParent>
        <FrameComponent1
          frameHeaderFlex="unset"
          frameHeaderPosition="sticky"
          frameHeaderAlignSelf="stretch"
          frameHeaderTop="0"
          emptyRight="/frame-1000011793@2x.png"
        />
        <FrameWrapper>
          <FindYourPerfectDomainNameParent>
            <FindYourPerfectContainer>
              <FindYourPerfect>{`Find Your Perfect `}</FindYourPerfect>
              <Domain1>Domain</Domain1>
              <FindYourPerfect> Name Today</FindYourPerfect>
            </FindYourPerfectContainer>
            <DomainDescription>
              <SecureTheRight>
                Secure the right domain for your projects and establish your
                online presence effortlessly.
              </SecureTheRight>
            </DomainDescription>
            <SearchInputParent>
              <SearchInput
                placeholder="Find a new domain"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(33, 33, 33, 0.2)" },
                  "& .MuiInputBase-root": {
                    height: "56px",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "rgba(33, 33, 33, 0.7)" },
                }}
              />
              <SearchButtonContainer>
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
                  Search
                </ButtonContactUs>
                <IconPlay>
                  <SearchIcon
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/search.svg"
                  />
                </IconPlay>
              </SearchButtonContainer>
            </SearchInputParent>
          </FindYourPerfectDomainNameParent>
        </FrameWrapper>
      </FrameParent>
    </DomainInnerRoot>
  );
};

export default FrameComponent9;
