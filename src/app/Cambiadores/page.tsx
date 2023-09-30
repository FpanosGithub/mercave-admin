import { addCambiador } from "@/actions/actions_cambiadores"
import TarjetaCambiador from "@/componentes/TarjetaCambiador"

async function getCambiadores() {
    const res = await fetch(`http://localhost:3000/api/cambiadores`, {cache: 'no-cache', next: {tags: ['cambiadores']}})
    return await res.json()
}

async function getVersionesCambiadores() {
    const res = await fetch(`http://localhost:3000/api/cambiadores/versiones`, {cache: "no-cache", next: { tags: ['versiones_cambiadores'],}})
    return await res.json()
}

export default async function page() {
    const cambiadores = await getCambiadores()
    const versiones = await getVersionesCambiadores()

    return(
        <>
            <div className="w-fit border border-gray-200 shadow bg-white p-4">
                <form action={addCambiador}>
                    <div className="flex gap-8 flex-wrap">
                        <div className="w-[11rem]">
                            <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Código</label>
                            <input
                            type="text"
                            name="codigo"
                            id="codigo"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
                            placeholder="CM02.20.CORDOBA"
                            aria-describedby="Codigo"/>
                        </div>
                        <div className="w-[12rem]">
                            <label htmlFor="sentido" className="block text-base font-medium leading-6 text-gray-900">Tipo</label>
                            <select
                                name="tipo"
                                id="tipo"
                                className="mt-2 block w-full rounded-md border-0 py-3 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
                                placeholder="Experimental"
                                aria-describedby="Tipo">
                                <option>Comercial</option>
                                <option>Experimental</option>
                            </select>
                        </div>
                        <div className='w-[10rem]'>
                            <label htmlFor="EAVM" className="block text-base font-medium leading-6 text-gray-900">Versión</label>
                                <select
                                name="version"
                                id="version"
                                className="mt-2 block w-full rounded-md border-0 py-3 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
                                placeholder=''
                                aria-describedby="Versión">
                                <option></option>
                                {versiones.map((ver:any)=>
                                <option key = {ver.id}>{ver.codigo}</option>
                                )}  
                                </select>
                        </div>
                        <div className="w-[27rem]">
                            <label htmlFor="codigo" className="block text-base font-medium leading-6 text-gray-900">Descripción</label>
                            <input
                            type="text"
                            name="desc"
                            id="desc"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-8"
                            placeholder="cambiador experimental Mercave v20 de Córdoba-Valchillón"
                            aria-describedby="Codigo"/>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <button 
                                type = 'submit'
                                className='p-3 text-xl border border-blue-700 shadow-xl rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                                Nuevo cambiador
                            </button> 
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap gap-2 py-4">
                {cambiadores.map((cambiador:any) => 
                    <TarjetaCambiador key={cambiador.id} cambiador={cambiador} />
                )}
            </div>
        </>
    )
}