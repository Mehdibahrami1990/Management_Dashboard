import React from 'react';
type Props = {
  children?: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

const MainLayout = ({children}: Props) => {
  return (
    <div>
      <main className="w-screen h-screen" >{children}</main>
    </div>
  );
};

export default MainLayout;
