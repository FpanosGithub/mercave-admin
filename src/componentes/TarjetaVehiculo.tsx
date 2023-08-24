import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { Vehiculo } from "@/verceldb/schema/vehiculos";
import Image from 'next/image';


export default function TarjetaVehiculo({vehiculo}:{vehiculo:any}) {
  console.log(vehiculo)
  let imagen = ''
  let tipo = ''
  try {
    imagen = vehiculo.tipo.imagen
    tipo = vehiculo.tipo.codigo
  }
  catch {}
  return (
    <div 
        className='border-gray-700 w-96 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between'
        key = {vehiculo.num_uic}>
        <Image 
          src = {`/imagenes/vehiculos/${imagen}`} 
          alt = 'imagen vehículo' 
          height = {230} width = {400} 
          className="rounded-lg mx-auto h-auto "/>
        <p className='text-center text-xl text-gray-700'> {vehiculo.num_uic} </p>
        <p className='text-center text-gray-700'> {tipo} </p>
        <p className='text-center text-gray-700'> {vehiculo.descripcion} </p>
        <div className="flex justify-end gap-4 mx-4 mt-2">
          <Link href = {`/Vehiculos/${vehiculo.num_uic}/delete`}>
            <TrashIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-red-500 text-white hover:cursor-pointer hover:bg-red-700"/>
          </Link>
          <Link href = {`/Vehiculos/${vehiculo.num_uic}/edit`}>
            <PencilIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700"/>
          </Link>
        </div>
    </div>
  )
}
