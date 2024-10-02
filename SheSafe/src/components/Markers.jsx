import icono from "../assets/map/point.png"
import { Marker } from "react-leaflet"
export const Markers = () => {
    return(
        <Marker position={[-34.5475159,-58.446622]} icon={icono}  iconSize={[35,35]}/>
    )
}