import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponent4Type = {
  className?: string;
};

const Follow = styled.span``;
const Minhaj = styled.span`
  font-weight: 500;
`;
const FollowMinhajOnlineContainer = styled.div`
  width: 156px;
  position: relative;
  letter-spacing: -0.08px;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Github = styled(Button)`
  height: 65px;
  width: 212px;
`;
const EmptySocialIcon = styled(Image)`
  height: 130.3px;
  width: 239.9px;
  border-radius: var(--br-81xl);
  object-fit: contain;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const FrameChild = styled(Button)`
  height: 65px;
  flex: 1;
  min-width: 177px;
  z-index: 1;
  margin-left: -44px;
  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const EmptySocialParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  min-width: 305px;
  max-width: 100%;
  row-gap: 20px;
  z-index: 1;
  margin-left: -10px;
  @media screen and (max-width: 850px) {
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const GithubParent = styled.div`
  width: 670.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const SocialLinks = styled.div`
  width: 1316.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const SocialLinksWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-2xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <SocialLinksWrapperRoot className={className}>
      <SocialLinks>
        <FollowMinhajOnlineContainer>
          <Follow>{`Follow `}</Follow>
          <Minhaj>Minhaj</Minhaj>
          <Follow> online -</Follow>
        </FollowMinhajOnlineContainer>
        <GithubParent>
          <Github
            startIcon={<img width="28px" height="28px" src="/github.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#212121",
              fontSize: "24",
              background: "#fff",
              border: "#212121 solid 2px",
              borderRadius: "100px",
              "&:hover": { background: "#fff" },
              width: 212,
              height: 65,
            }}
          >
            GitHub
          </Github>
          <EmptySocialParent>
            <EmptySocialIcon
              loading="lazy"
              width={240}
              height={130}
              alt=""
              src="/frame-4@2x.png"
            />
            <FrameChild
              startIcon={
                <img width="28px" height="28px" src="/hackerrank.svg" />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#212121",
                fontSize: "24",
                background: "#fff",
                border: "#212121 solid 2px",
                borderRadius: "100px",
                "&:hover": { background: "#fff" },
                height: 65,
              }}
            >
              HackerRank
            </FrameChild>
          </EmptySocialParent>
        </GithubParent>
      </SocialLinks>
    </SocialLinksWrapperRoot>
  );
};

export default FrameComponent4;
