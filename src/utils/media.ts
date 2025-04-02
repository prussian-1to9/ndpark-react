import { css, CSSObject, Interpolation } from "styled-components";
type DeviceType = "mobile" | "tablet" | "desktop";
const sizes: Record<DeviceType, number> = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<any>[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
