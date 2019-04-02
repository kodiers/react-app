import React from 'react';

const withClassSecond = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
};

export default withClassSecond;

// usage:
// withClassSecond(Component, Classes) e.g. Radium(person)

