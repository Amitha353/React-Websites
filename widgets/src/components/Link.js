import React, { Children } from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
        return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a style={{fontSize: "16px"}} onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
