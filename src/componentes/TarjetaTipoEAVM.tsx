import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid';
import { TipoEAVM } from "@/verceldb/schema/EAVMs";
import Image from "next/image";
import Link from "next/link";

export default function TarjetaTipoEAVM({tipo}:{tipo:TipoEAVM}) {
    return (
        <div className='border-gray-700 w-96 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between'>
            <Image 
            src = {`/imagenes/ejes/${tipo.imagen}`} 
            alt = 'imagen tipo eje' 
            height = {230} width = {400} 
            className="rounded-lg mx-auto h-auto "/>
            <p className='text-center text-xl text-gray-700'>{tipo.codigo}</p>
            <p className="text-center text-gray-700">{tipo.anchos}</p>
            <div className="flex justify-end gap-4 mx-4 mt-2">
                <Link href = {`/EAVMs/tipos/${tipo.codigo}/delete`}>
                    <TrashIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-red-500 text-white hover:cursor-pointer hover:bg-red-700"/>
                </Link>
                <Link href = {`/EAVMs/tipos/${tipo.codigo}/edit`}>
                    <PencilIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700"/>
                </Link>
            </div>
        </div>
    )
}