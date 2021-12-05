import React, {useEffect, useState} from "react";
import Layout from "../layout/layout.component";
import Map from "../components/map.component";
import Modal from "../components/modal.component";
import {getAllShips} from "../api/ships.api";
import {getDestinationByName} from "../api/point.api";
import Loader from "../layout/loader.component";

const mapDestinationToMarker = (APIdestination) => {
    return {
        ...APIdestination,
        lat: APIdestination.latitude,
        lon: APIdestination.longitude
    }
}

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(undefined)
    const [ships, setShips] = useState([])
    const [destinationMarker, setDestinationMarker] = useState(undefined)
    const [loading, setLoading] = useState(true)

    const openModal = (shipItem) => {
        if (shipItem) {
            getDestinationByName(shipItem.destinationName).then((destinationResponse) => {
                if (destinationResponse.name) {
                    setModalContent({shipItem, destination: destinationResponse})
                } else {
                    setModalContent({shipItem})
                }
                setModalOpen(true)
                const destMarker = mapDestinationToMarker(destinationResponse)
                setDestinationMarker(destMarker.lon && destMarker.lat ? destMarker : undefined)
            })
        }
    }

    useEffect(() => {
        getAllShips().then((items) => {
            setShips(items)
            setLoading(false);
        })
    }, [])

    return (
        <Layout>
            <Map markers={ships} openModal={openModal} mainMarker={destinationMarker}/>
            <Modal active={modalOpen} content={modalContent} onClose={() => setModalOpen(false)}/>
            {loading && <Loader/>}
        </Layout>
    )
}

export default Home;