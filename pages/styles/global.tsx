import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-archivo: Archivo;

/* font sizes */
--font-size-base: 16px;
--font-size-23xl: 42px;
--font-size-15xl: 34px;
--font-size-6xl: 25px;
--font-size-sm: 14px;
--font-size-xl: 20px;
--font-size-41xl: 60px;
--font-size-29xl: 48px;
--font-size-17xl: 36px;
--font-size-lg: 18px;
--font-size-5xl: 24px;
--font-size-lgi: 19px;
--font-size-3xl: 22px;
--font-size-13xl: 32px;
--font-size-7xl: 26px;
--font-size-61xl: 80px;
--font-size-2xl: 21px;
--font-size-320xl: 339px;
--font-size-66xl: 85px;
--font-size-117xl: 136px;
--font-size-90xl: 109px;
--font-size-14xl: 33px;
--font-size-35xl: 54px;

/* Colors */
--color-white: #fff;
--color-gray-100: #212121;
--color-gray-200: rgba(33, 33, 33, 0.8);
--color-gray-300: rgba(255, 255, 255, 0.16);
--color-gray-400: rgba(255, 255, 255, 0.9);
--color-gray-500: rgba(255, 255, 255, 0.8);
--color-gray-600: rgba(33, 33, 33, 0.7);
--color-gray-700: rgba(33, 33, 33, 0.2);
--color-gray-800: rgba(33, 33, 33, 0.6);
--color-gray-900: rgba(255, 255, 255, 0.2);
--color-gray-1000: rgba(255, 255, 255, 0.7);
--greyscale-500: #3b3645;
--color-darkslategray-100: #353535;
--color-darkslategray-200: #242f3e;
--color-darkslategray-300: rgba(36, 47, 62, 0.5);
--color-darkslategray-400: rgba(36, 47, 62, 0.7);
--color-darkslategray-500: rgba(59, 54, 69, 0.6);
--color-darkslategray-600: rgba(53, 53, 53, 0.5);
--color-goldenrod: #ffda58;
--color-whitesmoke-100: #f6f6f6;
--color-whitesmoke-200: #f5f5f5;
--color-silver: #cbc8d0;
--greyscale-400: #5e5969;
--greyscale-300: #aba7b4;
--color-slategray: #6c757d;

/* Gaps */
--gap-13xl: 32px;
--gap-base: 16px;
--gap-xl: 20px;
--gap-23xl: 42px;
--gap-2xl: 21px;
--gap-0: 0px;
--gap-5xs: 8px;
--gap-63xl: 82px;
--gap-22xl: 41px;
--gap-5xl: 24px;
--gap-3xs: 10px;
--gap-35xl: 54px;
--gap-8xl: 27px;
--gap-12xs-6: 0.6px;
--gap-7xs: 6px;
--gap-xs: 12px;
--gap-25xl: 44px;
--gap-3xl: 22px;
--gap-11xs: 2px;
--gap-6xl: 25px;
--gap-41xl: 60px;
--gap-mini: 15px;
--gap-11xl: 30px;
--gap-42xl: 61px;
--gap-12xl-1: 31.1px;
--gap-121xl: 140px;
--gap-16xl: 35px;
--gap-51xl: 70px;
--gap-71xl: 90px;
--gap-26xl: 45px;
--gap-29xl: 48px;
--gap-9xs: 4px;
--gap-520xl-3: 539.3px;
--gap-116xl: 135px;
--gap-251xl: 270px;
--gap-12xs: 1px;
--gap-10xs: 3px;
--gap-sm: 14px;

/* Paddings */
--padding-13xl: 32px;
--padding-46xl: 65px;
--padding-2xl: 21px;
--padding-3xl: 22px;
--padding-12xs-2: 0.2px;
--padding-smi-5: 12.5px;
--padding-xs: 12px;
--padding-mini: 15px;
--padding-2xs: 11px;
--padding-base: 16px;
--padding-5xl: 24px;
--padding-xl: 20px;
--padding-23xl: 42px;
--padding-11xl: 30px;
--padding-12xl: 31px;
--padding-8xl: 27px;
--padding-3xs-9: 9.9px;
--padding-81xl: 100px;
--padding-31xl: 50px;
--padding-151xl: 170px;
--padding-44xl: 63px;
--padding-47xl: 66px;
--padding-126xl: 145px;
--padding-75xl: 94px;
--padding-48xl: 67px;
--padding-124xl: 143px;
--padding-74xl: 93px;
--padding-43xl: 62px;
--padding-55xl: 74px;
--padding-127xl: 146px;
--padding-76xl: 95px;
--padding-398xl: 417px;
--padding-174xl: 193px;
--padding-4xl: 23px;
--padding-7xs: 6px;
--padding-7xl: 26px;
--padding-6xs-5: 6.5px;
--padding-12xs: 1px;
--padding-xl-5: 20.5px;
--padding-9xs: 4px;
--padding-6xl: 25px;
--padding-49xl: 68px;
--padding-3xs: 10px;
--padding-4xs: 9px;
--padding-sm: 14px;
--padding-6xs: 7px;
--padding-8xs: 5px;
--padding-lgi: 19px;
--padding-26xl: 45px;
--padding-10xl: 29px;
--padding-19xl: 38px;
--padding-lg: 18px;

/* Border radiuses */
--br-13xl: 32px;
--br-5xs: 8px;
--br-base: 16px;
--br-xs: 12px;
--br-sm: 14px;
--br-9xs: 4px;
--br-5xl: 24px;
--br-481xl: 500px;
--br-81xl: 100px;
--br-40xl-5: 59.5px;
--br-31xl: 50px;

}
`;
