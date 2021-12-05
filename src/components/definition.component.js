import React from "react"
import styled from "styled-components"

const Text = styled.span`
  position: relative;
  cursor: help;

  &:hover {
    dfn {
      visibility: visible;
      opacity: 1;
    }
  }
  
  dfn {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    width: 200px;
    border-radius: 3px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
    padding: 5px;
    text-transform: none;
  }
`

const InfoIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  height: 1em;
  width: 1em;
  padding: 2px;
  background: #d9d9d9;
  color: white;
  font-size: 0.7em;
  font-weight: normal;
  margin-top: calc(-2 * 2px + 1px);
  margin-left: 3px;
`

const Definition = ({ children, explanation }) => {
    return (
        <Text>
            {children}
            <InfoIcon>?</InfoIcon>
            <dfn>{explanation}</dfn>
        </Text>
    )
}

export default Definition