import clsx from 'clsx';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, BellAlertIcon, RssIcon, MapPinIcon} from '@heroicons/react/24/solid';

export default function EstadoVehiculo({
  servicio,
  cir,
  mant,
  nudo,
  transmitiendo,
  al_mant,
  al_circ
  }:{
  servicio:boolean | null,
  cir:boolean | null,
  mant:boolean | null,
  nudo:boolean | null,
  transmitiendo:boolean | null,
  al_mant:boolean | null,
  al_circ:boolean | null,
  }) 
  {
  return (
  <div>
    <div className="flex justify-between my-1 px-2 py-1 rounded-full border border-gray-300 bg-gray-100">
      {servicio 
      ? (<BoltIcon className="w-7 h-7 mr-1 text-green-600"/>)
      : (<BoltSlashIcon className="w-7 h-7 mr-1 text-red-600"/>)}
      {cir
      ? (<PlayIcon className={clsx("w-7 h-7 mr-1 text-green-600",{"animate-pulse":al_circ})}/>)
      : (<PauseIcon className={clsx("w-7 h-7 mr-1 text-red-600",{"animate-pulse":al_circ})}/>)}
      {mant
      ? (<WrenchIcon className={clsx("w-7 h-7 mr-1 text-green-600",{"animate-pulse":(al_mant)})}/>)
      : (<WrenchIcon className={clsx("w-7 h-7 mr-1 text-gray-500",{"animate-pulse":(al_mant)})}/>)}
      {nudo
      ? (<MapPinIcon className={clsx("w-7 h-7 mr-1 text-green-600")}/>)
      : (<MapPinIcon className={clsx("w-7 h-7 mr-1 text-gray-500")}/>)}
      {transmitiendo
      ? (<RssIcon className={clsx("w-7 h-7 mr-1 text-green-600")}/>)
      : (<RssIcon className={clsx("w-7 h-7 mr-1 text-gray-500")}/>)}
      {(al_circ || al_mant)? 
        (<BellAlertIcon className = "w-7 h-7 mr-1 text-red-400 animate-pulse"/>)
      : (<BellAlertIcon className = "w-7 h-7 mr-1 text-slate-400"/>)}
    </div>
  </div>
  )
}
