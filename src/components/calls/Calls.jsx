import React from 'react'
import { 
    Body, 
    Container, 
    LeftFoldContent, 
    RightFoldContent, 
    SidebarContent 
} from './CallsStyles'

import Header from '../common/header/Header'
import Sidebar from '../common/sidebar/Sidebar'
import LeftFold from '../left-fold/LeftFold'
import RightFold from '../right-fold/RightFold'

const Calls = () => {
  return (
    <Container>
        <Header />
        <Body>
            <SidebarContent>
                <Sidebar />
            </SidebarContent>

            <LeftFoldContent>
                <LeftFold />
            </LeftFoldContent>

            <RightFoldContent>
                <RightFold />
            </RightFoldContent>

        </Body>
        <h1>Call right here</h1>
    </Container>
  )
}

export default Calls