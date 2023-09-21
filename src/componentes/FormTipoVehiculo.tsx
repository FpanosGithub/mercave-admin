'use client'
import { editTiposVehiculos} from '@/actions/actions_vehiculos';
import { useState } from 'react';
import { TipoVehiculo } from '@/verceldb/schema/vehiculos';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FormTipoVehiculo({tipo,}:{tipo:TipoVehiculo,}){
  const router = useRouter()
  const [imagen, setImagen] = useState(tipo.imagen)
  const onImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImagen(e.target.value)
  };
  const handleRefresh = () => {
    router.push('/Vehiculos/tipos')
    router.refresh()
  }
  
  return (
    <form action={editTiposVehiculos}>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-center gap-8 flex-wrap'>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
            <Image 
              src = {`/imagenes/vehiculos/${imagen}`} 
              alt = 'imagen vehículo' 
              height = {230} width = {400} 
              className="rounded-lg mx-auto h-auto "/>
              <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código del Tipo</label>
              <input
                type="text"
                name="codigo"
                id="codigo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {tipo.codigo}
                aria-describedby="Número UIC del Vehículo"/>
              <label htmlFor="clase" className="mt-2 block text-base font-medium leading-6 text-gray-900">Clase de Vehículo</label>
              <select
                name="clase"
                id="clase"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${tipo.clase}`}
                aria-describedby="clase de vehículo">
                <option>{tipo.clase}</option> 
                <option>VAG</option>  
                <option>MRA</option> 
                <option>LOC</option> 
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
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
              <label htmlFor="marca" className="block text-base font-medium leading-6 text-gray-900">Marca</label>
              <input
                  type="text"
                  name="marca"
                  id="marca"
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${tipo.marca}`}
                  aria-describedby="Marca del vehículo"/>
              <label htmlFor="modelo" className="block text-base font-medium leading-6 text-gray-900">Modelo</label>
              <input
                  type="text"
                  name="modelo"
                  id="modelo"
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${tipo.modelo}`}
                  aria-describedby="Modelo del vehículo"/>
              <label htmlFor="tipo_uic" className="block text-base font-medium leading-6 text-gray-900">Tipo UIC</label>
              <input
                  type="text"
                  name="tipo_uic"
                  id="tipo_uic"
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${tipo.tipo_uic}`}
                  aria-describedby="tipo UIC"/>
              <label htmlFor="serie_uic" className="block text-base font-medium leading-6 text-gray-900">Serie UIC</label>
              <input
                  type="text"
                  name="serie_uic"
                  id="serie_uic"
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${tipo.serie_uic}`}
                  aria-describedby="serie UIC"/>
              <label htmlFor="descripcion" className="mt-3 block text-base font-medium leading-6 text-gray-900">Descripcion</label>
              <textarea
                rows={3}
                name="descripcion"
                id="descripcion"
                className="block w-full truncate rounded-md border-0 py-1.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-8"
                defaultValue= {`${tipo.descripcion}`}
                aria-describedby="descripción del vehículo"/>
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
              href= '/Vehiculos/tipos'
              className="w-60 text-2xl text-center border border-gray-400 shadow-xl rounded-xl p-4 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-gray-700">
                Cancelar
            </Link> 
          </div>
        </div>
      </form>
  )
}
