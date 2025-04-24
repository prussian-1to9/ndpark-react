// component for under development page
import React, { useEffect } from "react";

const ExternalRedirect: React.FC<{ to: string }> = ({ to }) => {
  useEffect(() => {
    location.href = to;
  }, [to]);
  return null;
};

export default ExternalRedirect;
// This component will be removed in the future when the external URL is no longer needed.
