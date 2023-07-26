import { EAVM } from "@/verceldb/schema/EAVMs";
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid'
import EstadoEje from "./EstadoEje";
import Link from 'next/link';


export default function TarjetaEje({eje}:{eje:EAVM}) {
  return (
    <div 
        className='border-gray-700 w-52 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between'
        key = {eje.codigo}>
        <p className='text-center text-xl text-gray-700'> {eje.codigo} </p>
        <p className='text-center text-gray-700'> {eje.tipo} </p>
        <p className='text-center text-gray-700'> {eje.vehiculo} </p>
        {/*<p className='text-center text-gray-700'> {eje.keeper} </p>
        <p className='text-center text-gray-700'> {eje.EEM} </p>
        <EstadoEje eje = {eje}/>*/}
        <div className="flex justify-end gap-4 mx-4 mt-2">
          <Link href = {`/EAVMs/${eje.codigo}/delete`}>
            <TrashIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-red-500 text-white hover:cursor-pointer hover:bg-red-700"/>
          </Link>
          <Link href = {`/EAVMs/${eje.codigo}/edit`}>
            <PencilIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700"/>
          </Link>
        </div>
    </div>
  )
}
