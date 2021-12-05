import React, {useEffect} from "react";
import styled from "styled-components";
import Moment from 'moment';
import {subtitleStyles, titleStyles} from "../layout/text.styles";
import Definition from "./definition.component";
import {headerHeight} from "../layout/header.component";

export const boxHeight = 530;
const boxWidth = 300

const Wrapper = styled.div`
  position: absolute;
  left: ${({ active }) => active ? '10px' : '-100%'};
  transition: left 0.3s ease-in-out;
  top: 20px;
  z-index: 1001; {/* bigger than 1000 of zoom indicator */}
  
  @media (min-width: ${boxWidth+100}px) {
    top: ${headerHeight + 10}px;
    left: ${({ active }) => active ? '50px' : '-100%'};
  }
`

const Box = styled.div`
  background-color: #efefef;
  width: ${boxWidth}px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
`

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  h3 {
    margin: 0;
    ${titleStyles};
  }
`
const ImageWrapper = styled.div`
  height: 175px;
  overflow: hidden;
  img {
    min-height: 100%;
    min-width: 100%;
  }
`

const Date = styled.div`
  text-align: center;
  color: gray;
  font-size: 0.7rem;
  margin-top: 5px;
`

const InfoWrapper = styled.div`
    padding: 10px 15px;
`

const InfoTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  text-align: center;
  ${subtitleStyles};
`

const InfoList = styled.dl`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  grid-column-gap: 5px;
  grid-row-gap: 8px;
  align-items: flex-end;

  dt, dd {
    margin: 0;
  }

  dt {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #3d3d3d;
  }
`

const ShipImg = styled.img`
  max-width: 100%;
`

const Modal = ({content: {shipItem, destination} = { shipItem: null }, onClose, active }) => {
    function getFormatDatetime(time) {
        Moment.locale('pl');
        return Moment(time).format('DD-MM-yyyy HH:MM')
    }

    return (
        <Wrapper active={active}>
            <Box>
                <TitleWrapper>
                    <CloseButton onClick={onClose}>X</CloseButton>
                    <h3><b>{shipItem?.name}</b></h3>
                </TitleWrapper>
                <ImageWrapper>
                    <ShipImg src={shipItem?.shipTypeImg}/>
                </ImageWrapper>
                <Date>
                    {getFormatDatetime(shipItem?.time)}
                </Date>
                <InfoWrapper>
                    <InfoTitle>Information</InfoTitle>
                    <InfoList>
                        <dt>Type</dt>
                        <dd>{shipItem?.shipType}</dd>
                        <dt>
                            <Definition explanation={"Heading is the direction in which a vehicle/vessel is pointing at any given moment. It is expressed as the angular distance relative to north, usually 000° at north, clockwise through 359°, in degrees of either true, magnetic, or compass direction. ... Typically, heading determination is the job of the IMU."}>
                                Heading
                            </Definition>
                        </dt>
                        <dd>{shipItem?.heading}</dd>
                        <dt>
                            <Definition explanation={"The draft or draught of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel). Draft determines the minimum depth of water a ship or boat can safely navigate. The more heavily a vessel is loaded, the deeper it sinks into the water, and the greater its draft."}>
                                Draught
                            </Definition>
                        </dt>
                        <dd>{shipItem?.draught}</dd>
                        <dt>
                            <Definition explanation={"A call sign is a designated sequence of letters and numbers that are assigned when a vessel, whether it be a sailing yacht, motor yacht, rib or commercial vessel, receives it's Ship Radio Licence."}>
                                Call sign
                            </Definition>
                        </dt>
                        <dd>{shipItem?.callsign}</dd>
                        <dt>Country</dt>
                        <dd>{shipItem?.country}</dd>
                    </InfoList>
                    <InfoTitle>Destination</InfoTitle>
                    {destination ? <p>{destination.name}, {destination.country} ({destination.continent})</p> :
                        <p>No information</p>}

                </InfoWrapper>
            </Box>
        </Wrapper>
    )
}

export default Modal;