import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid var(--color-n-50);
  color: var(--color-n-50);
  background: transparent;
`;

const FooterFamilySiteSelect: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [familySiteLink, setFamilySiteLink] = useState("");

  const handleFamilySiteLinkChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!e.target.value || e.target.value === "none") return;
    setFamilySiteLink(e.target.value);
  };

  useEffect(() => {
    if (familySiteLink) window.open(familySiteLink);
  }, [familySiteLink]);

  return (
    <StyledSelect
      className="p-2"
      onChange={handleFamilySiteLinkChange}
      value={familySiteLink}
    >
      {children}
    </StyledSelect>
  );
};

export default FooterFamilySiteSelect;
