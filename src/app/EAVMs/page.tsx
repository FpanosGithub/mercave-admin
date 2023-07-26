import { verceldb } from '@/verceldb/drizzle.client';
import { EAVM, TipoEAVM} from '@/verceldb/schema/EAVMs';
import { addEAVM } from '@/actions/actions_EAVMs';
import TarjetaEje from '@/componentes/TarjetaEje';
import { Vehiculo } from '@/verceldb/schema/vehiculos';

async function getEjes() {
  const res = await fetch(`${process.env.APP_URL}/api/ejes`, {cache: "no-cache", next: { tags: ['ejes'],}})
  return await res.json()
}
async function getTiposEjes() {
  const res = await fetch(`${process.env.APP_URL}/api/ejes/tipos`,  { next: { revalidate: 0 } })
  return await res.json()
}
async function getVehiculos() {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos`,{cache: "no-cache", next: { tags: ['vehiculos'],}})
  return await res.json()
}

export default async function page() {
  const ejes:EAVM[] = await getEjes();
  const tipos_ejes: TipoEAVM[] = await getTiposEjes();
  const lista_tipos: string[] = tipos_ejes.map((tipo) => tipo.codigo) 
  const vehiculos: Vehiculo[] = await getVehiculos(); 
  const lista_vehiculos: string[] = vehiculos.map((vehiculo) => vehiculo.num_uic)

  return(
    <>
    <div className='w-fit border border-gray-200 shadow bg-white p-4'>
      <form action={addEAVM}>
        <div className='flex gap-8 flex-wrap'>
          <div className='w-[15rem]'>
            <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código del EAVM</label>
            <input
              type="text"
              name="codigo"
              id="codigo"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
              placeholder="AVR-20092-XXXX"
              aria-describedby="codigo del EAVM"/>
            <p className="mt-2 text-sm text-gray-500" id="codigo-description">
              Lós códigos deben ser únicos. No usar uno existente.
            </p>
        </div>
        <div className='w-[15rem]'>
          <label htmlFor="tipo" className="block text-base font-medium leading-6 text-gray-900">Tipo</label>
            <select
              name="tipo"
              id="tipo"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
              placeholder="EAVM-20.920.C.C"
              aria-describedby="tipo del EAVM">
              <option>EAVM.20.920.C.C</option>
              {lista_tipos.map((tipo)=>
              <option key = {tipo}>{tipo}</option>
              )}  
            </select>
            <p className="mt-2 text-sm text-gray-500" id="tipo-description">
              Elige un tipo
            </p>
        </div>
        <div className='w-[15rem]'>
          <label htmlFor="vehiculo" className="block text-base font-medium leading-6 text-gray-900">Vehículo</label>
            <select
              name="vehiculo"
              id="vehiculo"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
              placeholder=''
              aria-describedby="Vehículo del EAVM">
              <option></option>
              {lista_vehiculos.map((vehiculo)=>
              <option key = {vehiculo}>{vehiculo}</option>
              )}  
            </select>
            <p className="mt-2 text-sm text-gray-500" id="vehiculo-description">
              Elige el vehículo donde va el EAVM
            </p>
        </div>
        <div className=' w-[15rem] flex flex-col justify-center px-4'>
          <button 
            type = 'submit'
            className='text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
              Nuevo EAVM
          </button> 
        </div>
        </div>
      </form>
    </div>
    <div className= 'flex flex-wrap gap-2 py-4'>
    {ejes.map((eje)=>
      <TarjetaEje 
        key = {eje.id}
        eje = {eje}/>
    )}
    </div>
    </>
  )
}
