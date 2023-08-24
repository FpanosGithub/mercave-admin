import { addVehiculo } from '@/actions/actions_vehiculos';
import TarjetaVehiculo from '@/componentes/TarjetaVehiculo';
import { TipoVehiculo, Vehiculo } from '@/verceldb/schema/vehiculos';

async function getTiposVehiculos() {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos/tipos`,  { next: { revalidate: 0 } })
  return await res.json()
}
async function getVehiculos() {
  const res = await fetch(`${process.env.APP_URL}/api/vehiculos`,{cache: "no-cache", next: { tags: ['vehiculos'],}})
  return await res.json()
}

export default async function page() {
  const tipos_vehiculos: TipoVehiculo[] = await getTiposVehiculos();
  const lista_tipos: string[] = tipos_vehiculos.map((tipo) => tipo.codigo) 
  const vehiculos: Vehiculo[] = await getVehiculos(); 

  return(
    <>
    <div className='w-fit border border-gray-200 shadow bg-white p-4'>
      <form action={addVehiculo}>
        <div className='flex gap-12 px-4 flex-wrap'>
          <div className='w-[15rem]'>
            <label htmlFor="num_uic" className="block text-base font-medium leading-6 text-gray-900">Numero UIC</label>
            <input
              type="text"
              name="num_uic"
              id="num_uic"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
              placeholder="32-71-6934-000-0"
              aria-describedby="Numero UIC"/>
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
            <option>TTM-6934</option>
            {lista_tipos.map((tipo)=>
            <option key = {tipo}>{tipo}</option>
            )}  
          </select>
          <p className="mt-2 text-sm text-gray-500" id="tipo-description">
            Elige un tipo
          </p>
        </div>
        <div className='w-[15rem]'>
          <label htmlFor="descripcion" className="block text-base font-medium leading-6 text-gray-900">Descripcion</label>
          <input
              type="text"
              name="descripcion"
              id="descripcion"
              className="mt-2 block w-full truncate rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
              placeholder=""
              aria-describedby="descripcion"/>
        </div>
        <div className=' w-[15rem] flex flex-col justify-center px-4'>
          <button 
            type = 'submit'
            className='text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
              Nuevo Vehículo
          </button> 
        </div>
        </div>
      </form>
    </div>
    <div className= 'flex flex-wrap gap-2 py-4'>
    {vehiculos.map((vehiculo)=>
      <TarjetaVehiculo
        key = {vehiculo.num_uic}
        vehiculo = {vehiculo}/>
    )}
    </div>
    </>
  )
}
