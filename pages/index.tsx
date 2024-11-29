import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import styled from "styled-components";

const HostingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 39.8px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const Hosting: NextPage = () => {
  return (
    <HostingRoot>
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
      <FrameComponent8 />
    </HostingRoot>
  );
};

export default Hosting;
