import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "@utils/media";

const StyledP = styled.p`
  font-weight: 500;
  color: var(--color-n-50);

  &.goesan {
    color: var(--color-s-20);
  }
  &.gurye {
    color: var(--color-p-20);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h5 {
    ${media.tablet`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `}
    ${media.mobile` -webkit-line-clamp: 1; `}
  }
`;

interface AdditionalContextProps {
  heading: string;
  headingType?: "goesan" | "gurye";
  title: string;
  to?: string;
  date?: Date;
  children?: React.ReactNode;
}

const AdditionalContext: React.FC<AdditionalContextProps> = ({
  heading,
  headingType,
  title,
  to,
  date,
  children,
}) => {
  return (
    <StyledDiv className="flex flex-col gap-4">
      <Link to={to ?? "javascript:;"}>
        <StyledP className={"text-sm lg:text-base " + headingType}>
          {heading}
        </StyledP>
        <h5 className="text-base md:text-lg lg:text-xl">{title}</h5>
        {children}
        {date && (
          <span className="text-xs lg:text-sm text-neutral-400">
            {date.toLocaleDateString()}
          </span>
        )}
      </Link>
    </StyledDiv>
  );
};

export default AdditionalContext;
