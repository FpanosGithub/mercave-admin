'use client'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

export default function MapaEje({lat,lng}:{lat:number, lng:number}) {
  return (
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={200} 
      center={[lat, lng]}
      defaultZoom={8} 
      attribution = {false}
      metaWheelZoom = {true}>
      <Marker
        width={30} 
        color = 'green' 
        anchor={[lat, lng]}/>
    </Map>
  )
}
