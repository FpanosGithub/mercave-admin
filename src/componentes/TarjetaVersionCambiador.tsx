import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import Image from 'next/image';


export default function TarjetaVersionCambiador({version}:{version:any}) {
  return (
    <div className='border-gray-700 w-96 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between'>
      <Image 
        src = {`/imagenes/cambiadores/${version.imagen}`} 
        alt = 'imagen versión Cambiador' 
        height = {230} width = {400} 
        className="rounded-lg mx-auto h-auto "/>
      <p className='text-center text-xl text-gray-700'> {version.codigo} </p>
      <p className='text-center text-gray-700'> {version.clase} </p>
      <p className='text-center text-gray-700'> {version.descripcion} </p>
      <div className="flex justify-end gap-4 mx-4 mt-2">
        <Link href = {`/Cambiadores/versiones/${version.codigo}/delete`}>
          <TrashIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-red-500 text-white hover:cursor-pointer hover:bg-red-700"/>
        </Link>
        <Link href = {`/Cambiadores/versiones/${version.codigo}/edit`}>
          <PencilIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700"/>
        </Link>
      </div>
    </div>
  )
}
