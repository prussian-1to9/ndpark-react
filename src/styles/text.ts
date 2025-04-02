import { css, Interpolation } from "styled-components";

type textSizeType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
type fontWeightType =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";

const textInfo: Record<textSizeType | fontWeightType, Interpolation<any>> = {
  xs: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  base: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  lg: css`
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  xl: css`
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
  "2xl": css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  "3xl": css`
    font-size: 1.875rem;
    line-height: 2.25rem;
  `,
  "4xl": css`
    font-size: 2.25rem;
    line-height: 2.5rem;
  `,
  "5xl": css`
    font-size: 3rem;
    line-height: 1;
  `,
  "6xl": css`
    font-size: 4rem;
    line-height: 1;
  `,
  "7xl": css`
    font-size: 5rem;
    line-height: 1;
  `,
  "8xl": css`
    font-size: 6rem;
    line-height: 1;
  `,
  "9xl": css`
    font-size: 8rem;
    line-height: 1;
  `,
  light: css`
    font-weight: 300;
  `,
  normal: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
  extrabold: css`
    font-weight: 800;
  `,
};

// export functions
export const lineClamp = (line: number) => css`
  -webkit-line-clamp: ${line};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const text = (index: textSizeType | fontWeightType) => {
  return textInfo[index] ?? css``;
};
