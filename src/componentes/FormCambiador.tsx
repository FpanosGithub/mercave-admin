'use client'
import { editCambiador } from "@/actions/actions_EAVMs";
import { EAVM } from "@/verceldb/schema/EAVMs";
import { useRouter } from "next/navigation";

export default function FormCambiador({cambiador, ejes} : {cambiador: any, ejes: EAVM[]}) {
    const router = useRouter()
    const handleRefresh = () => {
        router.push('/Cambiadores')
        router.refresh()
    }

    return (
        <form action={editCambiador}>
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="w-[20rem] border border-gray-300 shadow rounded-lg p-4 flex flex-col gap-2">
                        <label htmlFor="fichero" className="block text-base font-medium leading-6 text-gray-900">Fichero</label>
                        <input
                        type="text"
                        name="fichero"
                        id="fichero"
                        className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-8"
                        defaultValue = {cambiador.fichero}
                        aria-describedby="Fichero"/>
                    </div>
                </div>
            </div>
        </form>
    )
}