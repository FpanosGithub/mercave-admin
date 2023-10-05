'use client'
import { editCambiador } from "@/actions/actions_cambiadores";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormCambiador({cambiador} : {cambiador: any}) {
    const router = useRouter()
    const [mant, setMant] = useState(cambiador.mant)
    const [al_operacion, setAl_operacion] = useState(cambiador.al_operacion)
    const [al_cambiador, setAl_cambiador] = useState(cambiador.al_cambiador)
    const onMantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMant(e.target.value)
    }
    const onOpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAl_operacion(e.target.value)
    }
    const onCamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAl_cambiador(e.target.value)
    }
    const handleRefresh = () => {
        router.push('/Cambiadores')
        router.refresh()
    }

    return (
        <form action={editCambiador}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2">
                        <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código</label>
                        <input
                        type="text"
                        name="codigo"
                        id="codigo"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.codigo}
                        aria-describedby="Codigo"/>
                        <label htmlFor="tipo" className="block text-base font-medium leading-6 text-gray-900">Tipo</label>
                        <select
                            name="tipo"
                            id="tipo"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder={cambiador.tipo}
                            aria-describedby="tipo">
                            <option>Experimental</option>
                            <option>Comercial</option>
                        </select>
                        <label htmlFor="version" className="block text-base font-medium leading-6 text-gray-900">Versión</label>
                        <input
                        type="text"
                        name="version"
                        id="version"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.version.codigo}
                        aria-describedby="Version"/>
                        <label htmlFor="desc" className="block text-base font-medium leading-6 text-gray-900">Descripción</label>
                        <textarea
                        rows={3}
                        name="desc"
                        id="desc"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.desc}
                        aria-describedby="Descripcion"/>
                        <label htmlFor="fabricante" className="block text-base font-medium leading-6 text-gray-900">Fabricante</label>
                        <input
                        type="text"
                        name="fabricante"
                        id="fabricante"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue={cambiador.fabricante}
                        aria-describedby="Sentido"/>
                    </div>
                    <div className="w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2">
                        <div className="flex justify-between">
                            <label htmlFor="mant" className="mt-4 text-base font-medium leading-6 text-gray-900">En mantenimiento</label>
                            <input
                            type="checkbox"
                            name="mant"
                            id="mant"
                            className="h-6 w-6 mt-4"
                            defaultChecked = {Boolean(mant)}
                            onChange={onMantChange}
                            aria-describedby="mant"/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="al_operacion" className="mt-4 text-base font-medium leading-6 text-gray-900">Alarma operación</label>
                            <input
                            type="checkbox"
                            name="al_operacion"
                            id="al_operacion"
                            className="h-6 w-6 mt-4"
                            defaultChecked = {Boolean(al_operacion)}
                            onChange={onOpChange}
                            aria-describedby="al_operacion"/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="al_cambiador" className="mt-4 text-base font-medium leading-6 text-gray-900">Alarma cambiador</label>
                            <input
                            type="checkbox"
                            name="al_cambiador"
                            id="al_cambiador"
                            className="h-6 w-6 mt-4"
                            defaultChecked = {Boolean(al_cambiador)}
                            onChange={onCamChange}
                            aria-describedby="al_operacion"/>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <label htmlFor="num_cambios" className="mt-2 block text-base font-medium leading-6 text-gray-900">Num cambios</label>
                            <input
                            type="number"
                            name="num_cambios"
                            id="num_cambios"
                            className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            defaultValue= {cambiador.num_cambios}
                            aria-describedby="Num Cambios" /> 
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center space-x-4 p-8'>
                    <button 
                    type = 'submit'
                    onClick={handleRefresh}
                    className='w-60 text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                        Guardar
                    </button> 
                    <Link 
                    href= '/Cambiadores'
                    className="w-60 text-2xl text-center border border-gray-400 shadow-xl rounded-xl p-4 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-gray-700">
                        Cancelar
                    </Link>
                </div>
            </div>
        </form>
    )
}