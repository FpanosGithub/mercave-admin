'use client'
import { editEAVM } from '@/actions/actions_EAVMs';
import { EAVM } from "@/verceldb/schema/EAVMs"
import EstadoEje from './EstadoEje';
import MapaEje from './MapaEje';
import { useState } from 'react';

export default function FormEAVM({
  eje,
  tipos,
  vehiculos,
  }:{
  eje:EAVM,
  tipos:string[],
  vehiculos: string[]
  }
){
  const [lat, setLat] = useState(eje.lat)
  const [lng, setLng] = useState(eje.lng)
  const [servicio, setServicio] = useState(eje.servicio)
  const [cir, setCir] = useState(eje.cir)
  const [mant, setMant] = useState(eje.mant)
  const [al_temp, setAlTemp] = useState(eje.al_temp)
  const [al_acel, setAlAcel] = useState(eje.al_acel)
  const [al_camb, setAlCamb] = useState(eje.al_camb)
  const [al_mant, setAlMant] = useState(eje.al_mant)

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
  const onAlTempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlTemp(e.target.checked);
  };
  const onAlAcelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlAcel(e.target.checked);
  };
  const onAlMantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlMant(e.target.checked);
  };
  const onAlCambChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlCamb(e.target.checked);
  };

  return (
    <form action={editEAVM}>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-center gap-8 flex-wrap'>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
              <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código</label>
              <input
                type="text"
                name="codigo"
                id="codigo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {eje.codigo}
                aria-describedby="codigo del EAVM"/>
              <label htmlFor="tipo" className="block text-base font-medium leading-6 text-gray-900">Tipo</label>
              <select
                name="tipo"
                id="tipo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${eje.tipo}`}
                aria-describedby="tipo del EAVM">
                {tipos.map((tipo)=>
                <option key = {tipo}>{tipo}</option>
                )}  
              </select>
              <label htmlFor="vehiculo" className="block text-base font-medium leading-6 text-gray-900">Vehículo</label>
              <select
                name="vehiculo"
                id="vehiculo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue={`${eje.vehiculo}`}
                aria-describedby="Vehículo del EAVM">
                {vehiculos.map((vehiculo)=>
                <option key = {vehiculo}>{vehiculo}</option>
                )}  
              </select>
              <div className='flex justify-between gap-4'>
                <label htmlFor="fabricante" className="mt-2 block text-base font-medium leading-6 text-gray-900">Fabricante</label>
                <input
                  type="text"
                  name="fabricante"
                  id="fabricante"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${eje.fabricante}`}
                  aria-describedby="fabricante del EAVM"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="owner" className="mt-2 block text-base font-medium leading-6 text-gray-900">Owner</label>
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${eje.owner}`}
                  aria-describedby="owner del EAVM"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="keeper" className="mt-2 block text-base font-medium leading-6 text-gray-900">Keeper</label>
                <input
                  type="text"
                  name="keeper"
                  id="keeper"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${eje.keeper}`}
                  aria-describedby="keeper del EAVM"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="EEM" className="mt-2 block text-base font-medium leading-6 text-gray-900">EEM</label>
                <input
                  type="text"
                  name="EEM"
                  id="EEM"
                  className="block w-40 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                  defaultValue = {`${eje.EEM}`}
                  aria-describedby="EEM del EAVM"/>
              </div>
              <label htmlFor="observaciones" className="block text-base font-medium leading-6 text-gray-900">Observaciones Servicio</label>
              <textarea
                rows = {2}
                name="observaciones"
                id="observaciones"
                className="block w-full truncate rounded-md border-0 py-1.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-8"
                defaultValue= {`${eje.observaciones}`}
                aria-describedby="Observaciones sobre situación de servicio"/>
            </div>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg px-4 pt-2 flex flex-col gap-2'>
              <EstadoEje
                 servicio = {servicio}
                 mant = {mant}
                 cir = {cir}
                 al_mant = {al_mant}
                 al_camb = {al_camb}
                 al_acel = {al_acel}
                 al_temp = {al_temp}
                 />
              <div className='flex justify-between'>
                <label htmlFor="servicio" className="mt-2 text-base font-medium leading-6 text-gray-900">En Servicio</label>
                <input
                  type="checkbox"
                  name="servicio"
                  id="servicio"
                  className="h-6 w-6 mt-2"
                  defaultChecked = {Boolean(eje.servicio)}
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
                defaultChecked = {Boolean(eje.cir)}
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
                defaultChecked = {Boolean(eje.mant)}
                onChange={onMantChange}
                aria-describedby="Mantenimiento?"/>
              </div>            
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_temp" className="mt-2 block text-base font-medium leading-6 text-gray-900">Alarma temperatura</label>
                <input
                type="checkbox"
                name="al_temp"
                id="al_temp"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(eje.al_temp)}
                onChange={onAlTempChange}
                aria-describedby="Alarma temperatura?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_acel" className="mt-3 block text-base font-medium leading-6 text-gray-900">Alarma aceleraciones</label>
                <input
                type="checkbox"
                name="al_acel"
                id="al_acel"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(eje.al_acel)}
                onChange={onAlAcelChange}
                aria-describedby="Alarma aceleraciones?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_camb" className="mt-3 block text-base font-medium leading-6 text-gray-900">Alarma cambios</label>
                <input
                type="checkbox"
                name="al_camb"
                id="al_camb"
                className="h-6 w-6 mt-3"
                defaultChecked = {Boolean(eje.al_camb)}
                onChange={onAlCambChange}
                aria-describedby="Alarma cambios?"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="al_mant" className="mt-3 block text-base font-medium leading-6 text-gray-900">Alarma mantenimiento</label>
                <input
                type="checkbox"
                name="al_mant"
                id="al_mant"
                className="h-6 w-6 mt-3"
                defaultValue = {`${eje.al_mant}`}
                defaultChecked = {Boolean(eje.al_mant)}
                onChange={onAlMantChange}
                aria-describedby="Alarma mantenimiento?"/>
              </div>
              {/*
              <label htmlFor="prox_mant" className="mt-2 block text-base font-medium leading-6 text-gray-900">Próximo Mantenimiento</label>
              <input
                type="date"
                name="prox_mant"
                id="prox_mant"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {eje.prox_mant as string}
                aria-describedby="Fecha del próximo mantenimiento del EAVM"/>
              */}
                <div className='flex justify-between gap-4 mt-2'>
                <label htmlFor="tempa" className="mt-3 block text-base font-medium leading-6 text-gray-900">Temp rueda A</label>
                <input
                type="number"
                name="tempa"
                id="tempa"
                className= "block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje.tempa}`}
                aria-describedby="Temperatura Rueda A"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="tempb" className="mt-2 block text-base font-medium leading-6 text-gray-900">Temp rueda B</label>
                <input
                type="number"
                name="tempb"
                id="tempb"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje.tempb}`}
                aria-describedby="Temperatura rueda B"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="num_cambios" className="mt-2 block text-base font-medium leading-6 text-gray-900">Núm cambios</label>
                <input
                type="number"
                name="num_cambios"
                id="num_cambios"
                step = {1}
                min = {0}
                max = {100000}
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje.num_cambios}`}
                aria-describedby="Numero de Cambios"/>
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
                defaultValue = {`${eje.km_totales}`}
                aria-describedby="Kilómetros totales"/>
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
                defaultValue = {Number(eje.lat)}
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
                defaultValue = {Number(eje.lng)}
                onChange={onLngChange}
                aria-describedby="Longitud"/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center p-6'>
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
