'use client'
import { editTiposEAVM } from "@/actions/actions_EAVMs";
import { TipoEAVM } from "@/verceldb/schema/EAVMs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FormTipoEAVM({tipo}:{tipo:TipoEAVM}) {
    const router = useRouter()
    const [imagen, setImagen] = useState(tipo.imagen)
    const onImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImagen(e.target.value)
    }
    const handleRefresh = () => {
        router.push('/EAVMs/tipos')
        router.refresh()
    }

    return (
        <form action={editTiposEAVM}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2">
                        <Image 
                        src = {`/imagenes/ejes/${imagen}`} 
                        alt = 'imagen tipo eje' 
                        height = {230} width = {400} 
                        className="rounded-lg mx-auto h-auto "/>
                        <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código del Tipo</label>
                        <input
                        type="text"
                        name="codigo"
                        id="codigo"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {tipo.codigo}
                        aria-describedby="Código del Tipo"/>
                        <label htmlFor="anchos">Anchos</label>
                        <select
                        name="anchos"
                        id="anchos"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue= {`${tipo.anchos}`}
                        aria-describedby="clase de vehículo">
                            <option>{tipo.anchos}</option> 
                            <option>UIC-RUS</option>
                            <option>UIC-RUS-IB</option>
                            <option>METR-UIC</option>
                            <option>UIC</option>
                            <option>IB</option>  
                        </select>
                        <label htmlFor="imagen" className="block text-base font-medium leading-6 text-gray-900">Imagen del Tipo</label>
                        <input
                        type="text"
                        name="imagen"
                        id="imagen"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {`${tipo.imagen}`}
                        onChange={onImagenChange}
                        aria-describedby="Imagen del tipo"/>
                    </div>
                    <div className='w-full flex justify-center space-x-4 p-8'>
                        <button 
                        type = 'submit'
                        onClick={handleRefresh}
                        className='w-60 text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                            Guardar
                        </button>
                        <Link 
                        href= '/EAVMs/tipos'
                        className="w-60 text-2xl text-center border border-gray-400 shadow-xl rounded-xl p-4 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-gray-700">
                            Cancelar
                        </Link> 
                    </div>
                </div>
            </div>
        </form>
    )
}