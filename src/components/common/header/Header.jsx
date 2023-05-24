import React from 'react'
import { HeaderContainer, Leftheader, Menu, RightHeader } from './HeaderStyle'

const Header = () => {
  return (
    <HeaderContainer>
      <Menu>
        menu
      </Menu>

      <Leftheader>
        left H
      </Leftheader>

      <RightHeader>
        right H
      </RightHeader>
    </HeaderContainer>
  )
}

export default Header