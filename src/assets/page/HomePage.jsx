import React from 'react'
import Showpeofile from '../../component/Showpeofile'
import MenuLists from '../../component/menuLists'

export default function HomePage() {
  return (
    <>
        <Showpeofile width={'4'} text={true}/>
        <MenuLists/>
    </>
  )
}
