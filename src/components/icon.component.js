import L from "leaflet";
import clickedShipIcon from "./../assets/clickedShipIcon.png"
import defaultShipIcon from "./../assets/defaultShipIcon.png"
import destinationIcon from "./../assets/destinationIcon.png"

const iconSize = [45, 45]

export const getMarkerIcon = (index, selectedIndex) => {
    return L.icon({
        iconUrl: index === selectedIndex ? clickedShipIcon : defaultShipIcon,
        iconSize: iconSize
    });
}

export const getMainMarkerIcon = () => {
    return L.icon({
        iconUrl: destinationIcon,
        iconSize: iconSize
    });
}