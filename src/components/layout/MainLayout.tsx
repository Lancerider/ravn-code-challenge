import React from 'react';
import NavBar from '../ui/NavBar';

type LayoutProps = { children: React.ReactNode };

function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <NavBar />
      { props.children }
    </React.Fragment>
  )
}

export default Layout