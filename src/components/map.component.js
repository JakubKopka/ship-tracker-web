import React, {createRef, useEffect, useRef, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet"
import styled from "styled-components";
import 'leaflet/dist/leaflet.css';
import {getMarkerIcon, getMainMarkerIcon} from "./icon.component";
import { titleStyles} from "../layout/text.styles";
import {brandColor1} from "../layout/color.styles";

const MarkerName = styled.h2`
  font-size: 1rem;
  ${titleStyles};
`

const Map = ({markers, openModal, mainMarker}) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <MapContainer
            center={[63.4763083, 10.1030905]}
            zoom={5}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, index) => {
                return (
                    <Marker position={[marker.lat, marker.lon]}
                            key={marker.name + index}
                            index={index}
                            icon={getMarkerIcon(index, selectedIndex)}
                            eventHandlers={{
                                click: (e) => {
                                    setSelectedIndex(e.target.options.index)
                                    openModal(marker)
                                }
                            }}>
                        <Popup>
                            <MarkerName>{marker.name}</MarkerName>
                        </Popup>
                    </Marker>
                )
            })}
            {mainMarker && <>
                <Marker position={[mainMarker.lat, mainMarker.lon]}
                        key={"main" + mainMarker.name}
                        icon={getMainMarkerIcon()}
                        zIndexOffset={1000}
                >
                    <Popup>
                        <MarkerName>{mainMarker.name}</MarkerName>
                    </Popup>
                </Marker>
                <Polyline key={"polyline" + mainMarker.name}
                          positions={[[mainMarker.lat, mainMarker.lon], [markers[selectedIndex].lat, markers[selectedIndex].lon],]}
                          color={brandColor1}
                />
            </>
            }
        </MapContainer>
    )
}

export default Map;