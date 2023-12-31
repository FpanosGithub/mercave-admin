import clsx from 'clsx';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, BellAlertIcon} from '@heroicons/react/24/solid';

export default function EstadoEje({
  servicio,
  cir,
  mant,
  al_temp,
  al_mant,
  al_acel,
  al_camb
  }:{
  servicio:boolean | null,
  cir:boolean | null,
  mant:boolean | null,
  al_temp:boolean | null,
  al_mant:boolean | null,
  al_acel:boolean | null,
  al_camb:boolean | null}) 
  {
  console.log ('Servicio: ', servicio)
  console.log ('Mant: ', mant)
  return (
  <div>
    <div className="flex justify-between my-1 px-2 py-1 rounded-full border border-gray-300 bg-gray-100">
      {servicio 
      ? (<BoltIcon className="w-7 h-7 mr-1 text-green-600"/>)
      : (<BoltSlashIcon className="w-7 h-7 mr-1 text-red-600"/>)}
      {cir
      ? (<PlayIcon className={clsx("w-7 h-7 mr-1 text-green-600",{"animate-pulse":(al_acel || al_temp)})}/>)
      : (<PauseIcon className={clsx("w-7 h-7 mr-1 text-red-600",{"animate-pulse":(al_acel || al_temp)})}/>)}
      {mant
      ? (<WrenchIcon className={clsx("w-7 h-7 mr-1 text-green-600",{"animate-pulse":(al_mant)})}/>)
      : (<WrenchIcon className={clsx("w-7 h-7 mr-1 text-gray-500",{"animate-pulse":(al_mant)})}/>)}
      {(al_temp || al_acel || al_mant || al_camb)? 
        (<BellAlertIcon className = "w-7 h-7 mr-1 text-red-400 animate-pulse"/>)
      : (<BellAlertIcon className = "w-7 h-7 mr-1 text-slate-400"/>)}
    </div>
  </div>
  )
}
