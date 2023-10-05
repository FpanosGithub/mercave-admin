'use client'

import { editVersionCambiador } from "@/actions/actions_cambiadores"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FormVersionCambiador({version}:{version: any}) {
    const router = useRouter()
    const [imagen, setImagen] = useState(version.imagen)
    const onImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImagen(e.target.value)
    }
    const handleRefresh = () => {
        router.push('/Cambiadores/versiones')
        router.refresh()
    }

    return (
        <form action={editVersionCambiador}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2">
                        <Image 
                        src = {`/imagenes/cambiadores/${imagen}`} 
                        alt = 'imagen cambiador' 
                        height = {230} width = {400} 
                        className="rounded-lg mx-auto h-auto "/>
                        <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código de la Version</label>
                        <input
                        type="text"
                        name="codigo"
                        id="codigo"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {version.codigo}
                        aria-describedby="Código de la version"/>
                        <label htmlFor="descripcion" className="block text-base font-medium leading-6 text-gray-900">Descripción</label>
                        <textarea
                        rows={3}
                        name="descripcion"
                        id="descripcion"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {version.descripcion}
                        aria-describedby="Descripcion de la version" />
                        <label htmlFor="longitud" className="block text-base font-medium leading-6 text-gray-900">Longitud</label>
                        <input
                        type="text"
                        name="longitud"
                        id="longitud"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {version.longitud}
                        aria-describedby="Longitud"/>
                        <label htmlFor="num_cuerpos" className="block text-base font-medium leading-6 text-gray-900">Num cuerpos</label>
                        <input
                        type="number"
                        name="num_cuerpos"
                        id="num_cuerpos"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {version.num_cuerpos}
                        aria-describedby="Código del Tipo"/>
                        <label htmlFor="imagen" className="block text-base font-medium leading-6 text-gray-900">Imagen de la version</label>
                        <input
                        type="text"
                        name="imagen"
                        id="imagen"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {`${version.imagen}`}
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
                        href= '/Cambiadores/versiones'
                        className="w-60 text-2xl text-center border border-gray-400 shadow-xl rounded-xl p-4 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-gray-700">
                            Cancelar
                        </Link> 
                    </div>
                </div>
            </div>
        </form>
    )
}