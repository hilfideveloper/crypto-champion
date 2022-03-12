import React from 'react'

interface LayoutProps {
  props: JSX.Element
}

// markup
const Layout: React.FC<LayoutProps> = ({ props }) => {
  return <div>{props}</div>
}

export default Layout
