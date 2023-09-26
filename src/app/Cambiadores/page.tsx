import { addCambiador } from "@/actions/actions_EAVMs"
import TarjetaCambiador from "@/componentes/TarjetaCambiador"
import { CambioBanco, EAVM } from "@/verceldb/schema/EAVMs"

async function getCambiadores() {
    const res = await fetch(`${process.env.APP_URL}/api/banco/cambios`, {cache: 'no-cache', next: {tags: ['cambiadores']}})
    return await res.json()
}

async function getEjes() {
    const res = await fetch(`${process.env.APP_URL}/api/ejes`, {cache: "no-cache", next: { tags: ['ejes'],}})
    return await res.json()
}

export default async function page() {
    const cambiadores: CambioBanco[] = await getCambiadores()
    const ejes: EAVM[] = await getEjes()

    return(
        <>
            <div className="w-fit border border-gray-200 shadow bg-white p-4">
                <form action={addCambiador}>
                    <div className="flex gap-8 flex-wrap">
                        <div className="w-[22rem]">
                            <label htmlFor="fichero" className="block text-base font-medium leading-6 text-gray-900">Fichero</label>
                            <input
                            type="text"
                            name="fichero"
                            id="fichero"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                            placeholder="110920001_230511_120615.csv"
                            aria-describedby="Fichero"/>
                        </div>
                        <div className="w-[12rem]">
                            <label htmlFor="sentido" className="block text-base font-medium leading-6 text-gray-900">Sentidos</label>
                            <select
                                name="sentido"
                                id="sentido"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                                placeholder="IBUIC"
                                aria-describedby="Sentido">
                                <option>IBUIC</option>
                                <option>UICIB</option>
                            </select>
                        </div>
                        <div className='w-[15rem]'>
                            <label htmlFor="EAVM" className="block text-base font-medium leading-6 text-gray-900">EAVM</label>
                                <select
                                name="EAVM"
                                id="EAVM"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                                placeholder=''
                                aria-describedby="Vehículo del EAVM">
                                <option></option>
                                {ejes.map((eje)=>
                                <option key = {eje.id}>{eje.codigo}</option>
                                )}  
                                </select>
                                <p className="mt-2 text-sm text-gray-500" id="vehiculo-description">
                                Elige el eje donde va el cambiador
                                </p>
                        </div>
                        <div className=' w-[15rem] flex flex-col justify-center px-4'>
                            <button 
                                type = 'submit'
                                className='text-2xl border border-blue-700 shadow-xl p-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600'>
                                Nuevo cambiador
                            </button> 
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap gap-2 py-4">
                {cambiadores.map((cambiador) => 
                    <TarjetaCambiador key={cambiador.id} cambiador={cambiador} />
                )}
            </div>
        </>
    )
}