import type { NextPage } from "next";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type PageType = {
  className?: string;
};

const AvatarIcon = styled(Image)`
  height: 27.2px;
  width: 30.9px;
  position: relative;
  object-fit: contain;
`;
const MinhajSadik = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
const LeftSide = styled.div`
  width: 519.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Home = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
`;
const NavigationItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
`;
const Services = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 67px;
`;
const NavigationItems1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
`;
const MenuItems = styled.nav`
  margin: 0;
  width: 361px;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    display: none;
  }
`;
const ButtonContactUs = styled(Button)`
  height: 48px;
  flex: 1;
`;
const IconPlay = styled(Button)`
  height: 49px;
  width: 102px;
`;
const ButtonContactUsParent = styled.div`
  width: 245px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const RightSide = styled.div`
  width: 519.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
`;
const SpacerIcon = styled(Image)`
  height: 26.9px;
  width: 34.9px;
  margin: 0 !important;
  position: absolute;
  top: 5px;
  left: 876px;
  border-radius: var(--br-9xs);
  object-fit: contain;
  z-index: 1;
`;
const Layout = styled.header`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs-9) var(--padding-5xl);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 99;
  max-width: 100%;
  gap: var(--gap-0);
  row-gap: 20px;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
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
const SearchDescription = styled.div`
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
const InputWrapper = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  font-family: var(--font-archivo);
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  min-width: 300px;
  max-width: 100%;
`;
const ButtonContactUs1 = styled(Button)`
  height: 56px;
  flex: 1;
`;
const SearchIcon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const SearchActions = styled.div`
  width: 162px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const SearchInput = styled.div`
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
const SearchHeader = styled.div`
  width: 751px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const DomainSearch = styled.div`
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
const CheckIcon = styled(Image)`
  height: 48px;
  width: 48px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Dipupaulcom = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const CheckedDomain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CheckResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Yr = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Yr1 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  display: inline-block;
  min-width: 68px;
`;
const DomainPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-12xs);
`;
const IconPlay2 = styled(Button)`
  height: 54px;
  flex: 1;
`;
const AddToCart = styled.div`
  width: 287px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: var(--gap-5xl);
  font-size: var(--font-size-5xl);
`;
const DomainCheck = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-goldenrod-100);
  border: 1px solid var(--color-goldenrod);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-35xl);
  min-height: 86px;
  gap: var(--gap-xl);
  font-size: var(--font-size-13xl);
  color: var(--color-gray-100);
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
`;
const PageRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
`;

const Page: NextPage<PageType> = ({ className = "" }) => {
  return (
    <PageRoot className={className}>
      <Layout>
        <LeftSide>
          <Profile>
            <AvatarIcon
              loading="lazy"
              width={31}
              height={27}
              alt=""
              src="/vector.svg"
            />
            <MinhajSadik>Minhaj Sadik</MinhajSadik>
          </Profile>
        </LeftSide>
        <MenuItems>
          <NavigationItems>
            <Home>Home</Home>
          </NavigationItems>
          <NavigationItems1>
            <Services>Services</Services>
          </NavigationItems1>
          <NavigationItems1>
            <Home>Courses</Home>
          </NavigationItems1>
          <NavigationItems1>
            <Home>Hosting</Home>
          </NavigationItems1>
        </MenuItems>
        <RightSide>
          <ButtonContactUsParent>
            <ButtonContactUs
              startIcon={
                <img width="24px" height="24px" src="/download02.svg" />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#353535",
                border: "#ffda58 solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#353535" },
                height: 48,
              }}
            >
              Resume
            </ButtonContactUs>
            <IconPlay
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#212121",
                fontSize: "16",
                background: "#ffda58",
                borderRadius: "8px",
                "&:hover": { background: "#ffda58" },
                width: 102,
                height: 49,
              }}
            >
              Contact
            </IconPlay>
          </ButtonContactUsParent>
        </RightSide>
        <SpacerIcon
          loading="lazy"
          width={35}
          height={27}
          alt=""
          src="/frame-1000011793@2x.png"
        />
      </Layout>
      <DomainSearch>
        <SearchHeader>
          <FindYourPerfectContainer>
            <FindYourPerfect>{`Find Your Perfect `}</FindYourPerfect>
            <Domain1>Domain</Domain1>
            <FindYourPerfect> Name Today</FindYourPerfect>
          </FindYourPerfectContainer>
          <SearchDescription>
            <SecureTheRight>
              Secure the right domain for your projects and establish your
              online presence effortlessly.
            </SecureTheRight>
          </SearchDescription>
          <SearchInput>
            <InputWrapper
              placeholder="dipupaul"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="20px" height="20px" src="/close.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "rgba(33, 33, 33, 0.2)" },
                "& .MuiInputBase-root": {
                  height: "56px",
                  backgroundColor: "#fff",
                  paddingRight: "24px",
                  borderRadius: "12px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": {
                  color: "#212121",
                  textTransform: "lowercase",
                },
              }}
            />
            <SearchActions>
              <ButtonContactUs1
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
              </ButtonContactUs1>
              <IconPlay1>
                <SearchIcon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/search.svg"
                />
              </IconPlay1>
            </SearchActions>
          </SearchInput>
        </SearchHeader>
      </DomainSearch>
      <DomainCheck>
        <CheckResult>
          <CheckIcon
            loading="lazy"
            width={48}
            height={48}
            alt=""
            src="/check.svg"
          />
          <CheckedDomain>
            <Dipupaulcom>dipupaul.com</Dipupaulcom>
          </CheckedDomain>
        </CheckResult>
        <AddToCart>
          <DomainPricing>
            <Yr>$12.30/yr</Yr>
            <Yr1>$12.30/yr</Yr1>
          </DomainPricing>
          <IconPlay2
            startIcon={
              <img width="24px" height="24px" src="/shoppingcart01.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#212121",
              fontSize: "16",
              background: "#ffda58",
              borderRadius: "8px",
              "&:hover": { background: "#ffda58" },
              height: 54,
            }}
          >
            Add to cart
          </IconPlay2>
        </AddToCart>
      </DomainCheck>
    </PageRoot>
  );
};

export default Page;
