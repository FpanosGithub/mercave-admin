import { verceldb } from '@/verceldb/drizzle.client';
import { eq } from 'drizzle-orm';
import { CambiosBanco, EAVM } from "@/verceldb/schema/EAVMs"
import FormCambiador from "@/componentes/FormCambiador"

async function getCambiador(fichero: string) {
    const res = await fetch(`${process.env.APP_URL}/api/banco/cambios/${fichero}`, {cache: 'no-cache', next: {tags: ['cambiadores']}})
    return await res.json()
}
async function getEjes() {
    const res = await fetch(`${process.env.APP_URL}/api/ejes`, {cache: "no-cache", next: { tags: ['ejes']}})
    return await res.json()
}

export default async function page({params} : {params: {fichero: string}}) {
    const cambiador = await verceldb.select().from(CambiosBanco).where(eq(CambiosBanco.fichero, params.fichero))
    const lista_ejes: EAVM[] = await getEjes()

    return(
        <>
            <div className="w-full border border-gray-200 shadow rounded-lg bg-white p-4">
                <FormCambiador cambiador={cambiador[0]} ejes={lista_ejes} />
            </div>
        </>
    )
}