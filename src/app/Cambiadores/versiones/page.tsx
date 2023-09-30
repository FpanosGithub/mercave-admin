import { addVersionCambiador} from '@/actions/actions_cambiadores';
import TarjetaTipoVehiculo from '@/componentes/TarjetaTipoVehiculo';
import TarjetaVersionCambiador from '@/componentes/TarjetaVersionCambiador';


async function getVersionescambiador() {
  const res = await fetch(`http://localhost:3000/api/cambiadores/versiones`, {cache: "no-cache", next: { tags: ['versiones_cambiadores'],}})
  return await res.json()
}

export default async function page() {
  const versiones = await getVersionescambiador();
  return(
    <>
    <div className='w-fit border border-gray-200 shadow bg-white p-4'>
      <form action={addVersionCambiador}>
        <div className='flex gap-8 px-1 flex-wrap'>
          <div className='w-[8rem]'>
            <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código de la Versión</label>
            <input
              type="text"
              name="codigo"
              id="codigo"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
              placeholder="CM-02"
              aria-describedby="Código de la versión del cambiador"/>
            <p className="mt-2 text-sm text-gray-500" id="codigo-description">
              Lós códigos deben ser únicos. No usar uno existente.
            </p>
        </div>
        <div className='w-[12rem]'>
          <label htmlFor="descripcion" className="block text-base font-medium leading-6 text-gray-900">Descripcion</label>
          <textarea
            name="descripcion"
            id="descripcion"
            rows = {3}
            className="mt-2 block w-full truncate rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
            placeholder=""
            aria-describedby="descripcion"/>
        </div>
        <div className='w-[12rem]'>
            <label htmlFor="imagen" className="block text-base font-medium leading-6 text-gray-900">Imagen</label>
            <input
              type="text"
              name="imagen"
              id="imagen"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
              placeholder="tolva.jpg"
              aria-describedby="Imagen del tipo de cambiador"/>
        </div>
        <div className=' w-[11rem] flex flex-col justify-center px-4'>
          <button 
            type = 'submit'
            className='text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
              Nueva Versión
          </button> 
        </div>
        </div>
      </form>
    </div>
    <div className= 'flex flex-wrap gap-2 py-4'>
    {versiones.map((ver:any)=>
      <TarjetaVersionCambiador
        key = {ver.codigo}
        version = {ver}/>
    )}
    </div>
    </>
  )
}
