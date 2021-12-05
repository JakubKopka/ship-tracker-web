import {API_DOMAIN, limit} from "./const.api";

export const getAllShips = () => {
    return fetch(`${API_DOMAIN}/ship?limit=${limit}`).then(items => items.json()).then(items => items)
}