import { addTipoEAVM } from "@/actions/actions_EAVMs";
import TarjetaTipoEAVM from "@/componentes/TarjetaTipoEAVM";
import { TipoEAVM } from "@/verceldb/schema/EAVMs"

async function getTiposEAVM() {
    const res = await fetch(`${process.env.APP_URL}/api/ejes/tipos`, {cache: 'no-cache', next: {tags: ['tipos_EAVM']}})
    return await res.json()
}

export default async function page() {
    const tipos_EAVM: TipoEAVM[] = await getTiposEAVM();
    return (
        <>
            <div className="w-fit border border-gray-200 shadow bg-white p-4">
                <form action={addTipoEAVM}>
                    <div className="flex gap-8 px-1 flex-wrap">
                        <div className="w-[12rem]">
                            <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código del tipo</label>
                            <input
                            type="text"
                            name="codigo"
                            id="codigo"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder="EAVM.11.760.C.C"
                            aria-describedby="Código del tipo de eje"/>
                            <p className="mt-2 text-sm text-gray-500" id="codigo-description">
                            Lós códigos deben ser únicos. No usar uno existente.
                            </p>
                        </div>
                        <div className='w-[15rem]'>
                            <label htmlFor="anchos" className="block text-base font-medium leading-6 text-gray-900">Anchos</label>
                            <select
                            name="anchos"
                            id="anchos"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder="UIC-IB"
                            aria-describedby="ancho del eje">
                                <option>UIC-IB</option>
                                <option>UIC-RUS</option>
                                <option>UIC-RUS-IB</option>
                                <option>METR-UIC</option>
                                <option>UIC</option>
                                <option>IB</option>  
                            </select>
                        </div>
                        <div className='w-[15rem]'>
                            <label htmlFor="imagen" className="block text-base font-medium leading-6 text-gray-900">Imagen</label>
                            <input
                            type="text"
                            name="imagen"
                            id="imagen"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder="eje.png"
                            aria-describedby="Imagen del tipo de eje"/>
                        </div>
                        <div className=' w-[15rem] flex flex-col justify-center px-4'>
                            <button 
                                type = 'submit'
                                className='text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                                Nuevo Tipo
                            </button> 
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap gap-2 py-4">
                {tipos_EAVM.map((tipo) => 
                    <TarjetaTipoEAVM key={tipo.codigo} tipo={tipo} />
                )}
            </div>
        </>
    )
}