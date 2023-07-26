import clsx from 'clsx';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, BellAlertIcon} from '@heroicons/react/24/solid';
import { EAVM } from '@/verceldb/schema/EAVMs';

export default function EstadoEje({eje}:{eje:EAVM}) {

  return (
  <div>
    <div className="flex justify-between my-2 mx-3 px-2 py-1 rounded-full bg-gray-100">
      {eje.servicio 
      ? (<BoltIcon className="w-6 h-6 mr-1 text-green-600"/>)
      : (<BoltSlashIcon className="w-6 h-6 mr-1 text-red-600"/>)}
      {eje.cir
      ? (<PlayIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(eje.al_acel || eje.al_temp)})}/>)
      : (<PauseIcon className={clsx("w-6 h-6 mr-1 text-red-600",{"animate-pulse":(eje.al_acel || eje.al_temp)})}/>)}
      {eje.mant
      ? (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(eje.al_mant)})}/>)
      : (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-gray-500",{"animate-pulse":(eje.al_mant)})}/>)}
      {(eje.al_temp || eje.al_acel || eje.al_mant || eje.al_camb)? 
        (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400 animate-pulse"/>)
      : (<BellAlertIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
    </div>
    <div className='flex flex-wrap justify-center gap-4'>
      <div className='flex gap-2'>
        <p className=' text-gray-900'>{Math.round(eje.km_totales as number).toLocaleString('es-ES')}</p>
        <p className='text-xs text-gray-600 mt-1.5'>km</p>
      </div>
      <div className='flex gap-1'>
        <p className=' text-gray-900'>{Math.round(eje.num_cambios as number).toLocaleString('es-ES')}</p>
        <p className='text-xs text-gray-600 mt-1.5'>camb</p>
      </div>
    </div>
  </div>
  )
}
