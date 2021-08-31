import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
    return (<MapContainer center={[47.00917, 7.49737]} zoom={15} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.00917, 7.49737]}>
            <Popup>
                Schiessplatz Sand
            </Popup>
        </Marker>
    </MapContainer>)
}

export default Map