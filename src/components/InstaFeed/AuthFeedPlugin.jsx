import React from "react";

function AuthFeedPlugin() {
  const [returnCode, setReturnCode] = React.useSearchParams();
  console.log(returnCode);
  return <div></div>;
}

export default AuthFeedPlugin;
