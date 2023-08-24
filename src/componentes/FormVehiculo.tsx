'use client'
import { editVehiculo } from '@/actions/actions_vehiculos';
import EstadoVehiculo from './EstadoVehiculo';
import MapaEje from './MapaEje';
import { useState } from 'react';
import { TipoVehiculo } from '@/verceldb/schema/vehiculos';
import Image from 'next/image';

export default function FormVehiculo({
  vehiculo,
  tipos,
  }:{
  vehiculo:any,
  tipos:TipoVehiculo[],
  }
){
  const [imagen_tipo, setImagenTipo] = useState(vehiculo.tipo.imagen)
  const [lat, setLat] = useState(vehiculo.lat)
  const [lng, setLng] = useState(vehiculo.lng)
  const [servicio, setServicio] = useState(vehiculo.servicio)
  const [cir, setCir] = useState(vehiculo.cir)
  const [mant, setMant] = useState(vehiculo.mant)
  const [al_circ, setAlCirc] = useState(vehiculo.al_circ)
  const [al_mant, setAlMant] = useState(vehiculo.al_mant)
  const [nudo, setNudo] = useState(vehiculo.nudo)
  const [transmitiendo, setTransmitiendo] = useState(vehiculo.transmitiendo)
  
  const onTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setImagenTipo(tipos.find((tipo)=>{return (tipo.codigo as string === e.target.value as string)})?.imagen)
  };
  const onLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLat(e.target.value);
  };
  const onLngChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLng(e.target.value);
  };
  const onServicioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServicio(e.target.checked);
  };
  const onCirChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCir(e.target.checked);
  };
  const onMantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMant(e.target.checked);
  };
  const onNudoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNudo(e.target.checked);
  };
  const onTransmitiendoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransmitiendo(e.target.checked);
  };
  const onAlCircChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlCirc(e.target.checked);
  };
  const onAlMantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlMant(e.target.checked);
  };

  return (
    <form action={editVehiculo}>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-center gap-8 flex-wrap'>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
            <Image 
              src = {`/imagenes/vehiculos/${imagen_tipo}`} 
              alt = 'imagen vehículo' 
              height = {230} width = {400} 
              className="rounded-lg mx-auto h-auto "/>
              <label htmlFor="num_uic" className="block text-base font-medium leading-6 text-gray-900">Número UIC</label>
              <input
                type="text"
                name="num_uic"
                id="num_uic"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {vehiculo.num_uic}
                aria-describedby="Número UIC del Vehículo"/>
              <label htmlFor="tipo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Tipo</label>
              <select
                name="tipo"
                id="tipo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${vehiculo.tipo.codigo}`}
                onChange ={onTipoChange}
                aria-describedby="tipo del EAVM">
                {tipos.map((tipo)=>
                <option key = {tipo.codigo}>{tipo.codigo}</option>
                )}  
              </select>
              <div className='flex justify-between gap-4'>
                <label htmlFor="fabricante" className="mt-2 block text-base font-medium leading-6 text-gray-900">Fabricante</label>
                <input
                  type="text"
                  name="fabricante"
                  id="fabricante"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${vehiculo.fabricante}`}
                  aria-describedby="fabricante del vehiculo"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="owner" className="mt-2 block text-base font-medium leading-6 text-gray-900">Owner</label>
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${vehiculo.owner}`}
                  aria-describedby="owner del vehiculo"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="keeper" className="mt-2 block text-base font-medium leading-6 text-gray-900">Keeper</label>
                <input
                  type="text"
                  name="keeper"
                  id="keeper"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${vehiculo.keeper}`}
                  aria-describedby="keeper del vehiculo"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="EEM" className="mt-2 block text-base font-medium leading-6 text-gray-900">EEM</label>
                <input
                  type="text"
                  name="EEM"
                  id="EEM"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${vehiculo.EEM}`}
                  aria-describedby="EEM del vehiculo"/>
              </div>
            </div>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg px-4 pt-3 flex flex-col gap-2'>
              <EstadoVehiculo
                 servicio = {servicio}
                 mant = {mant}
                 cir = {cir}
                 nudo = {nudo}
                 transmitiendo = {transmitiendo}
                 al_mant = {al_mant}
                 al_circ = {al_circ}
                 />
              <div className='flex justify-between'>
                <label htmlFor="servicio" className="mt-4 text-base font-medium leading-6 text-gray-900">En Servicio</label>
                <input
                  type="checkbox"
                  name="servicio"
                  id="servicio"
                  className="h-6 w-6 mt-4"
                  defaultChecked = {Boolean(vehiculo.servicio)}
                  onChange={onServicioChange}
                  aria-describedby="EAVM en servicio?"/>
              </div> 
              <div className='flex justify-between'>
                <label htmlFor="cir" className="mt-3 block text-base font-medium leading-6 text-gray-900">Circulando</label>
                <input
                type="checkbox"
                name="cir"
                id="cir"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(vehiculo.cir)}
                onChange={onCirChange}
                aria-describedby="Circulando?"/>
              </div>             
              <div className='flex justify-between'>
                <label htmlFor="mant" className="mt-2 block text-base font-medium leading-6 text-gray-900">En Mantenimiento</label>
                <input
                type = "checkbox"
                name="mant"
                id="mant"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(vehiculo.mant)}
                onChange={onMantChange}
                aria-describedby="Mantenimiento?"/>
              </div>            
              <div className='flex justify-between gap-4'>
                <label htmlFor="nudo" className="mt-2 block text-base font-medium leading-6 text-gray-900">En Nudo</label>
                <input
                type="checkbox"
                name="nudo"
                id="nudo"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(vehiculo.nudo)}
                onChange={onNudoChange}
                aria-describedby="En Nudo ferroviario?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="transmitiendo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Transmitiendo</label>
                <input
                type="checkbox"
                name="transmitiendo"
                id="transmitiendo"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(vehiculo.transmitiendo)}
                onChange={onTransmitiendoChange}
                aria-describedby="Transmitiendo?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_circ" className="mt-3 block text-base font-medium leading-6 text-gray-900">Alarma Circulación</label>
                <input
                type="checkbox"
                name="al_circ"
                id="al_circ"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(vehiculo.al_circ)}
                onChange={onAlCircChange}
                aria-describedby="Alarma aceleraciones?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_mant" className="mt-3 block text-base font-medium leading-6 text-gray-900">Alarma mantenimiento</label>
                <input
                type="checkbox"
                name="al_mant"
                id="al_mant"
                className="h-6 w-6 mt-3"
                defaultValue = {`${vehiculo.al_mant}`}
                defaultChecked = {Boolean(vehiculo.al_mant)}
                onChange={onAlMantChange}
                aria-describedby="Alarma mantenimiento?"/>
              </div>
              <label htmlFor="observaciones" className="mt-3 block text-base font-medium leading-6 text-gray-900">Observaciones Servicio</label>
              <textarea
                rows={2}
                name="observaciones"
                id="observaciones"
                className="block w-full truncate rounded-md border-0 py-1.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-8"
                defaultValue= {`${vehiculo.observaciones}`}
                aria-describedby="Observaciones sobre situación de servicio"/>
              <div className='flex justify-between gap-4'>
              <label htmlFor="prox_mant" className="block text-base font-medium leading-6 text-gray-900">Próximo Mant.</label>
              <input
                type="date"
                name="prox_mant"
                id="prox_mant"
                className="block w-56 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {vehiculo.prox_mant as string}
                aria-describedby="Fecha del próximo mantenimiento del EAVM"/>
              </div>
            </div>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
              <MapaEje
                lat = {Number(lat)}
                lng = {Number(lng)}/>
              <div className='flex justify-between gap-4'>
                <label htmlFor="lat" className="mt-2 block text-base font-medium leading-6 text-gray-900">Latitud</label>
                <input
                type="number"
                name="lat"
                id="lat"
                step = {0.0001}
                min = {-360}
                max = {360}
                className="block w-44 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {Number(vehiculo.lat)}
                onChange={onLatChange}
                aria-describedby="Latitud"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="lng" className="mt-2 block text-base font-medium leading-6 text-gray-900">Longitud</label>
                <input
                type="number"
                name="lng"
                id="lng"
                step = {0.0001}
                min = {-360}
                max = {360}
                className="block w-44 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {Number(vehiculo.lng)}
                onChange={onLngChange}
                aria-describedby="Longitud"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="km_totales" className="mt-2 block text-base font-medium leading-6 text-gray-900">Km Totales</label>
                <input
                type="number"
                name="km_totales"
                id="km_totales"
                step = {0.1}
                min = {0}
                max = {10000000}
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${vehiculo.km_totales}`}
                aria-describedby="Kilómetros totales"/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center p-8'>
            <button 
              type = 'submit'
              className='w-60 text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                Guardar
            </button> 
          </div>
        </div>
      </form>
  )
}
