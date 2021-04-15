import React from 'react';
import './Box.css';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    };

    event.preventDefault();
    window.history.pushState({}, '', href);

    // Get Navigation to listen to this event
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href} >
      {children}
    </a>
  )
};

export default Link;