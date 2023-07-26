import { verceldb } from '@/verceldb/drizzle.client';
import { eq } from 'drizzle-orm';
import { EAVM, EAVMs, TipoEAVM} from '@/verceldb/schema/EAVMs';
import { editEAVM } from '@/actions/actions_EAVMs';
import TarjetaEje from '@/componentes/TarjetaEje';
import { Vehiculo } from '@/verceldb/schema/vehiculos';

async function getEje(codigo:string) {
  const res = await fetch(`${process.env.APP_URL}/api/ejes/${codigo}`, {cache: "no-cache", next: { tags: [codigo],}})
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

export default async function page({ params }: { params: { codigo: string } }) {

  const eje = await verceldb.select().from(EAVMs).where(eq(EAVMs.codigo, params.codigo));
  //const eje:EAVM[] = await getEje(params.codigo)
  const tipos_ejes: TipoEAVM[] = await getTiposEjes();
  const lista_tipos: string[] = tipos_ejes.map((tipo) => tipo.codigo) 
  const vehiculos: Vehiculo[] = await getVehiculos(); 
  const lista_vehiculos: string[] = vehiculos.map((vehiculo) => vehiculo.num_uic)

  console.log(eje[0])
  console.log(lista_tipos)
  console.log(lista_vehiculos)

  return(
    <>
    <div className='w-full border border-gray-200 shadow rounded-lg bg-white p-4'>
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
                defaultValue = {params.codigo}
                aria-describedby="codigo del EAVM"/>
              <label htmlFor="tipo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Tipo</label>
              <select
                name="tipo"
                id="tipo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${eje[0].tipo}`}
                aria-describedby="tipo del EAVM">
                {lista_tipos.map((tipo)=>
                <option key = {tipo}>{tipo}</option>
                )}  
              </select>
              <label htmlFor="vehiculo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Vehículo</label>
              <select
                name="vehiculo"
                id="vehiculo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue={`${eje[0].vehiculo}`}
                aria-describedby="Vehículo del EAVM">
                {lista_vehiculos.map((vehiculo)=>
                <option key = {vehiculo}>{vehiculo}</option>
                )}  
              </select>
              <label htmlFor="fabricante" className="mt-2 block text-base font-medium leading-6 text-gray-900">Fabricante</label>
              <input
                type="text"
                name="fabricante"
                id="fabricante"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].vehiculo}`}
                aria-describedby="fabricante del EAVM"/>
              <label htmlFor="owner" className="mt-2 block text-base font-medium leading-6 text-gray-900">Owner</label>
              <input
                type="text"
                name="owner"
                id="owner"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].owner}`}
                aria-describedby="owner del EAVM"/>
              <label htmlFor="keeper" className="mt-2 block text-base font-medium leading-6 text-gray-900">Keeper</label>
              <input
                type="text"
                name="keeper"
                id="keeper"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].keeper}`}
                aria-describedby="keeper del EAVM"/>
              <label htmlFor="EEM" className="mt-2 block text-base font-medium leading-6 text-gray-900">EEM</label>
              <input
                type="text"
                name="EEM"
                id="EEM"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].EEM}`}
                aria-describedby="EEM del EAVM"/>
            </div>
            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
              <div className='flex justify-between'>
                <label htmlFor="servicio" className="text-base font-medium leading-6 text-gray-900">En Servicio</label>
                <input
                  type="checkbox"
                  name="servicio"
                  id="servicio"
                  className="h-6 w-6"
                  defaultValue = {`${eje[0].servicio}`}
                  aria-describedby="EAVM en servicio?"/>
              </div>              
              <div className='flex justify-between'>
                <label htmlFor="mant" className="mt-2 block text-base font-medium leading-6 text-gray-900">En Mantenimiento</label>
                <input
                type = "checkbox"
                name="mant"
                id="mant"
                className="h-6 w-6 mt-2"
                defaultValue={`${eje[0].mant}`}
                aria-describedby="Mantenimiento?"/>
              </div>            
              <div className='flex justify-between'>
                <label htmlFor="cir" className="mt-2 block text-base font-medium leading-6 text-gray-900">Circulando</label>
                <input
                type="checkbox"
                name="cir"
                id="cir"
                className="h-6 w-6 mt-2"
                defaultValue = {`${eje[0].cir}`}
                aria-describedby="Circulando?"/>
              </div>
              <label htmlFor="observaciones" className="mt-2 block text-base font-medium leading-6 text-gray-900">Observaciones Servicio</label>
              <input
                type="text"
                name="observaciones"
                id="observaciones"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${eje[0].observaciones}`}
                aria-describedby="Observaciones sobre situación de servicio"/>
              <label htmlFor="prox_mant" className="mt-2 block text-base font-medium leading-6 text-gray-900">Próximo Mantenimiento</label>
              <input
                type="date"
                name="prox_mant"
                id="prox_mant"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].prox_mant}`}
                aria-describedby="Fecha del próximo mantenimiento del EAVM"/>
              <div className='flex justify-between gap-4'>
                <label htmlFor="tempa" className="mt-2 block text-base font-medium leading-6 text-gray-900">Temp rueda A</label>
                <input
                type="number"
                name="tempa"
                id="tempa"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].tempa}`}
                aria-describedby="Temperatura Rueda A"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="tempb" className="mt-2 block text-base font-medium leading-6 text-gray-900">Temp rueda B</label>
                <input
                type="number"
                name="tempb"
                id="tempb"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].tempb}`}
                aria-describedby="Temperatura rueda B"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="num_cambios" className="mt-2 block text-base font-medium leading-6 text-gray-900">Núm cambios</label>
                <input
                type="number"
                name="num_cambios"
                id="num_cambios"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].num_cambios}`}
                aria-describedby="Numero de Cambios"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="km_totales" className="mt-2 block text-base font-medium leading-6 text-gray-900">Km Totales</label>
                <input
                type="number"
                name="km_totales"
                id="km_totales"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].km_totales}`}
                aria-describedby="Kilómetros totales"/>
              </div>
              <div className='flex justify-between gap-4'>
                <label htmlFor="coef_trabajo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Coeficiente de Trabajo</label>
                <input
                type="number"
                name="coef_trabajo"
                id="coef_trabajo"
                className="block w-32 text-right rounded-md border-0 py-1.5 pr-2 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].coef_trabajo}`}
                aria-describedby="EEM del EAVM"/>
              </div>
            </div>

            <div className='w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2'>
              <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código</label>
              <input
                type="text"
                name="codigo"
                id="codigo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {params.codigo}
                aria-describedby="codigo del EAVM"/>
              <label htmlFor="tipo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Tipo</label>
              <select
                name="tipo"
                id="tipo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue= {`${eje[0].tipo}`}
                aria-describedby="tipo del EAVM">
                {lista_tipos.map((tipo)=>
                <option key = {tipo}>{tipo}</option>
                )}  
              </select>
              <label htmlFor="vehiculo" className="mt-2 block text-base font-medium leading-6 text-gray-900">Vehículo</label>
              <select
                name="vehiculo"
                id="vehiculo"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue={`${eje[0].vehiculo}`}
                aria-describedby="Vehículo del EAVM">
                {lista_vehiculos.map((vehiculo)=>
                <option key = {vehiculo}>{vehiculo}</option>
                )}  
              </select>
              <label htmlFor="fabricante" className="mt-2 block text-base font-medium leading-6 text-gray-900">Fabricante</label>
              <input
                type="text"
                name="fabricante"
                id="fabricante"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].vehiculo}`}
                aria-describedby="fabricante del EAVM"/>
              <label htmlFor="owner" className="mt-2 block text-base font-medium leading-6 text-gray-900">Owner</label>
              <input
                type="text"
                name="owner"
                id="owner"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].owner}`}
                aria-describedby="owner del EAVM"/>
              <label htmlFor="keeper" className="mt-2 block text-base font-medium leading-6 text-gray-900">Keeper</label>
              <input
                type="text"
                name="keeper"
                id="keeper"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].keeper}`}
                aria-describedby="keeper del EAVM"/>
              <label htmlFor="EEM" className="mt-2 block text-base font-medium leading-6 text-gray-900">EEM</label>
              <input
                type="text"
                name="EEM"
                id="EEM"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                defaultValue = {`${eje[0].EEM}`}
                aria-describedby="EEM del EAVM"/>
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
    </div>
    <div className= 'flex flex-wrap gap-2 py-4'>
    
    </div>
    </>
  )
}

