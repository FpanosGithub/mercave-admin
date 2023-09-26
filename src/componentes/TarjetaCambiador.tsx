import { CambioBanco } from "@/verceldb/schema/EAVMs";
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function TarjetaCambiador({cambiador}:{cambiador: CambioBanco}) {
    return (
        <div className='border-gray-700 w-56 shadow-lg rounded-lg bg-white p-4 flex flex-col justify-between' key={cambiador.id}>
            <p className="text-center text-xl text-gray-700 truncate">{cambiador.fichero}</p>
            <p className="text-center text-gray-700">{cambiador.sentido}</p>
            <div className="flex justify-end gap-4 mx-4 mt-2">
                <Link href = {`/Cambiadores/${cambiador.fichero}/delete`}>
                    <TrashIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-red-500 text-white hover:cursor-pointer hover:bg-red-700"/>
                </Link>
                <Link href = {`/Cambiadores/${cambiador.fichero}/edit`}>
                    <PencilIcon className="p-2 rounded-full border shadow-lg border-gray-400 h-10 w-10 bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700"/>
                </Link>
            </div>
        </div>
    )
}