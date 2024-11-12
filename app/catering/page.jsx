import React from 'react'
import Filter from "./menu-filter"
import Menu from '../components/menu-components/menu'
import props from '../props/catering-props/props'
import NotFound from '../not-found';

export default function Page () {
  return <NotFound />;
  return (
<div className='flex flex-col items-center text-center justify-center space-y-9'>
  <Filter />
  <Menu
  {...props.menu}
  />
  </div>

 
  )
}
