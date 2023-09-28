'use client'
import { editCambiador } from "@/actions/actions_EAVMs";
import { EAVM } from "@/verceldb/schema/EAVMs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormCambiador({cambiador, ejes} : {cambiador: any, ejes: EAVM[]}) {
    const router = useRouter()
    const [alarma, setAlarma] = useState(cambiador.alarma)
    const [EAVM, setEAVM] = useState(cambiador.EAVM)
    const onAlarmaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAlarma(e.target.value)
    }
    const onEjeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEAVM(ejes.find((eje) => {return (eje.codigo as string === e.target.value as string)}))
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
                        <label htmlFor="fichero" className="block text-base font-medium leading-6 text-gray-900">Fichero</label>
                        <input
                        type="text"
                        name="fichero"
                        id="fichero"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.fichero}
                        aria-describedby="Fichero"/>
                        <label htmlFor="fecha" className="block text-base font-medium leading-6 text-gray-900">Fecha</label>
                        <input
                        type="date"
                        name="fecha"
                        id="fecha"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.dt}
                        aria-describedby="Fecha"/>
                        <label htmlFor="V" className="block text-base font-medium leading-6 text-gray-900">Versión</label>
                        <input
                        type="number"
                        name="V"
                        id="V"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.V}
                        aria-describedby="Version"/>
                        <label htmlFor="FV" className="block text-base font-medium leading-6 text-gray-900">FV</label>
                        <input
                        type="number"
                        name="FV"
                        id="FV"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.FV}
                        aria-describedby="FV"/>
                        <label htmlFor="sentido" className="block text-base font-medium leading-6 text-gray-900">Sentido</label>
                        <select
                            name="sentido"
                            id="sentido"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder={cambiador.sentido}
                            aria-describedby="Sentido">
                            <option>IBUIC</option>
                            <option>UICIB</option>
                        </select>
                        <div className="flex justify-between">
                            <label htmlFor="alarma" className="mt-4 text-base font-medium leading-6 text-gray-900">Alarma</label>
                            <input
                            type="checkbox"
                            name="alarma"
                            id="alarma"
                            className="h-6 w-6 mt-4"
                            defaultChecked = {Boolean(cambiador.alarma)}
                            onChange={onAlarmaChange}
                            aria-describedby="FV"/>
                        </div>
                        <label htmlFor="EAVM" className="mt-2 block text-base font-medium leading-6 text-gray-900">EAVM</label>
                        <select
                            name="EAVM"
                            id="EAVM"
                            className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            defaultValue= {`${cambiador.EAVM}`}
                            onChange ={onEjeChange}
                            aria-describedby="EAVM">
                            {ejes.map((eje)=>
                            <option key = {eje.codigo}>{eje.codigo}</option>
                            )}  
                        </select>
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