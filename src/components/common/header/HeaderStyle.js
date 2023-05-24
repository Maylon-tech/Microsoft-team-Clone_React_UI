import styled from 'styled-components'


export const HeaderContainer = styled.header`
  border: 2px  solid orange;
  width: 100%;
  display: flex;
  background-color: #464775;
  color: white;
  flex: 1;
  padding: 6px 0;
`

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export const Leftheader = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  flex: 11;
  justify-content: space-between;
`