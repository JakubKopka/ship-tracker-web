import React from "react";
import styled, { keyframes} from "styled-components";
import {brandColor1} from "./color.styles";

const rotate = keyframes`
  100% {
    -webkit-transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  z-index: 400;
  height: 0;
  width: 0;
  padding: 25px;
  border: 10px solid ${brandColor1};
  border-right-color: azure;
  border-radius: 50%;
  -webkit-animation: ${rotate} 1s infinite linear;
  /* left, top and position just for the demo! */
  position: absolute;
  left: 50%;
  top: 50%;
`


const Loader = () => {
    return (
        <Spinner/>
    )
}

export default Loader