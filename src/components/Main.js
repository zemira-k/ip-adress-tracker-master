import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export const Main = ({ ipInfo }) => {
  console.log(ipInfo.ipPosition);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <section className="main">
      <MapContainer
        id="map"
        center={[...ipInfo.ipPosition]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={[...ipInfo.ipPosition]} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[...ipInfo.ipPosition]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};
