import React from "react";
import styled from "styled-components";
import Header, {headerHeight} from "./header.component";
import {boxHeight} from "../components/modal.component";

const Main = styled.main`
  &, .leaflet-container {
    height: calc(100vh - ${headerHeight}px);
    width: 100vw;
  }
`

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  min-height: ${headerHeight + boxHeight}px;
`

const Layout = ({children}) => {

    return (
        <Wrapper>
            <Header/>
            <Main>{children}</Main>
        </Wrapper>
    )
}

export default Layout;