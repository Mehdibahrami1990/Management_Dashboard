import React from 'react';

const mainLayout = (props: any) => {
  const {children} = props;
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default mainLayout;
