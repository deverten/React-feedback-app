import React from "react";

function Button({ version, children, type, isDisabled }) {
  return (<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
    {children}
  </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisbled: false,
};
export default Button;
