import {API_DOMAIN} from "./const.api";

export const getDestinationByName = (destinationName) => {
    return fetch(`${API_DOMAIN}/destination/${destinationName}`)
        .then(items => items.json())
        .then(items => items)
        .catch((error) => {
            return undefined
        })
}